import { Line, Stars } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { type ReactElement, type RefObject, useMemo, useRef } from 'react';
import {
  Color,
  EdgesGeometry,
  type Group,
  IcosahedronGeometry,
  LineBasicMaterial,
  LineSegments,
  type Mesh,
  MeshLambertMaterial,
  SphereGeometry,
  Vector3,
} from 'three';

import { useInViewport } from '../lib/useInViewport';
import { useScrollY } from '../lib/useScrollY';

// Palette aligned with --c-accent (amber) and --c-steel (cool blue secondary).
const AMBER = new Color('#FFB347');
const STEEL = new Color('#7C9CDC');

// Conversion between scrolled pixels and rotation radians. Each component
// multiplies this by its own `speed` value (kept identical to the per-frame
// speeds the scene used before) so the planet / mesh / orbits maintain
// their original relative pacing — they just respond to scroll input now
// instead of wall-clock time. At 1000px of scroll the planet rotates
// ~115°, the fastest orbit completes ~1.3 revolutions.
const SCROLL_SCALE = 0.05;

interface ScrollProps {
  readonly scrollRef: RefObject<number>;
}

function Planet({ scrollRef }: ScrollProps): ReactElement {
  const ref = useRef<Mesh>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y = scrollRef.current * 0.04 * SCROLL_SCALE;
    }
  });

  // Lambert is dramatically cheaper per-pixel than MeshStandardMaterial and
  // the planet has no specular highlights to lose.
  const geometry = useMemo(() => new SphereGeometry(1.25, 64, 64), []);
  const material = useMemo(
    () =>
      new MeshLambertMaterial({
        color: new Color('#04060a'),
        emissive: new Color('#0c1626'),
        emissiveIntensity: 0.55,
      }),
    [],
  );

  return <mesh geometry={geometry} material={material} ref={ref} />;
}

function NeuralMesh({ scrollRef }: ScrollProps): ReactElement {
  const ref = useRef<Group>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y = scrollRef.current * 0.05 * SCROLL_SCALE;
      ref.current.rotation.x = scrollRef.current * 0.01 * SCROLL_SCALE;
    }
  });

  const { edges, nodes } = useMemo(() => {
    const icosa = new IcosahedronGeometry(1.36, 2);
    const edgeGeom = new EdgesGeometry(icosa);
    const lineMat = new LineBasicMaterial({
      color: STEEL,
      opacity: 0.55,
      transparent: true,
    });
    const lines = new LineSegments(edgeGeom, lineMat);

    const position = icosa.getAttribute('position');
    const seen = new Set<string>();
    const nodePositions: Vector3[] = [];
    for (let i = 0; i < position.count; i++) {
      const v = new Vector3().fromBufferAttribute(position, i);
      const key = `${v.x.toFixed(3)}|${v.y.toFixed(3)}|${v.z.toFixed(3)}`;
      if (seen.has(key)) continue;
      seen.add(key);
      nodePositions.push(v);
    }
    return { edges: lines, nodes: nodePositions };
  }, []);

  return (
    <group ref={ref}>
      <primitive object={edges} />
      {nodes.map((p, i) => (
        <mesh key={`node-${String(i)}`} position={p}>
          <sphereGeometry args={[0.02, 6, 6]} />
          <meshBasicMaterial color={i % 4 === 0 ? AMBER : STEEL} />
        </mesh>
      ))}
    </group>
  );
}

interface OrbitProps extends ScrollProps {
  readonly accent?: 'amber' | 'steel';
  readonly inclination: number;
  readonly phase: number;
  readonly radius: number;
  readonly speed: number;
}

function OrbitingNode({
  accent = 'steel',
  inclination,
  phase,
  radius,
  scrollRef,
  speed,
}: OrbitProps): ReactElement {
  const group = useRef<Group>(null);
  const color = accent === 'amber' ? AMBER : STEEL;

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y = phase + scrollRef.current * speed * SCROLL_SCALE;
    }
  });

  const ringPoints = useMemo<Vector3[]>(() => {
    const out: Vector3[] = [];
    for (let i = 0; i <= 120; i++) {
      const a = (i / 120) * Math.PI * 2;
      out.push(new Vector3(Math.cos(a) * radius, 0, Math.sin(a) * radius));
    }
    return out;
  }, [radius]);

  return (
    <group rotation={[inclination, 0, 0]}>
      <Line color={color} lineWidth={0.6} opacity={0.22} points={ringPoints} transparent />

      <group ref={group}>
        <Line
          color={color}
          lineWidth={0.8}
          opacity={0.32}
          points={[
            [0, 0, 0],
            [radius, 0, 0],
          ]}
          transparent
        />
        <mesh position={[radius, 0, 0]} rotation={[0, 0, 0]}>
          <tetrahedronGeometry args={[0.07, 0]} />
          <meshBasicMaterial color={color} />
        </mesh>
        <mesh position={[radius, 0, 0]}>
          <sphereGeometry args={[0.16, 8, 8]} />
          <meshBasicMaterial color={color} opacity={0.14} transparent />
        </mesh>
      </group>
    </group>
  );
}

export function NeuralMeshPlanet(): ReactElement {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inView = useInViewport(wrapperRef);
  const scrollRef = useScrollY();

  return (
    <div className="h-full w-full" ref={wrapperRef}>
      <Canvas
        camera={{ fov: 32, position: [0, 0.3, 5.6] }}
        dpr={[1, 1.5]}
        frameloop={inView ? 'always' : 'never'}
        gl={{ antialias: true, powerPreference: 'high-performance' }}
        style={{ pointerEvents: 'none', touchAction: 'pan-y' }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight color="#7C9CDC" intensity={1.2} position={[6, 4, 6]} />
        <directionalLight color="#FFB347" intensity={0.55} position={[-4, -1, -2]} />

        <Planet scrollRef={scrollRef} />
        <NeuralMesh scrollRef={scrollRef} />

        <OrbitingNode
          accent="steel"
          inclination={0.12}
          phase={0}
          radius={2.05}
          scrollRef={scrollRef}
          speed={0.16}
        />
        <OrbitingNode
          accent="steel"
          inclination={0.78}
          phase={1.3}
          radius={2.45}
          scrollRef={scrollRef}
          speed={0.11}
        />
        <OrbitingNode
          accent="amber"
          inclination={-0.45}
          phase={2.6}
          radius={2.85}
          scrollRef={scrollRef}
          speed={0.085}
        />
        <OrbitingNode
          accent="steel"
          inclination={-0.18}
          phase={4.2}
          radius={2.25}
          scrollRef={scrollRef}
          speed={0.13}
        />

        <Stars count={500} depth={50} factor={1.4} fade radius={70} saturation={0} speed={0.2} />

        <EffectComposer>
          <Bloom intensity={0.5} luminanceSmoothing={0.9} luminanceThreshold={0.6} mipmapBlur />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
