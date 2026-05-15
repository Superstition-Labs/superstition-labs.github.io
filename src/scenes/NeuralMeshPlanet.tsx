import { Line, Stars } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { type ReactElement, useMemo, useRef } from 'react';
import {
  Color,
  EdgesGeometry,
  type Group,
  IcosahedronGeometry,
  LineBasicMaterial,
  LineSegments,
  type Mesh,
  MeshStandardMaterial,
  SphereGeometry,
  Vector3,
} from 'three';

const ACCENT = new Color('#4FD1FF');
const WARM = new Color('#FFB347');

function Planet(): ReactElement {
  const ref = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.04;
  });

  const geometry = useMemo(() => new SphereGeometry(1.25, 96, 96), []);
  const material = useMemo(
    () =>
      new MeshStandardMaterial({
        color: new Color('#08111f'),
        emissive: new Color('#0a1f3d'),
        emissiveIntensity: 0.3,
        metalness: 0.1,
        roughness: 0.82,
      }),
    [],
  );

  return <mesh geometry={geometry} material={material} ref={ref} />;
}

function NeuralMesh(): ReactElement {
  const ref = useRef<Group>(null);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.05;
      ref.current.rotation.x += delta * 0.01;
    }
  });

  const { edges, nodes } = useMemo(() => {
    const icosa = new IcosahedronGeometry(1.36, 2);
    const edgeGeom = new EdgesGeometry(icosa);
    const lineMat = new LineBasicMaterial({
      color: ACCENT,
      opacity: 0.45,
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
          <sphereGeometry args={[0.018, 8, 8]} />
          <meshBasicMaterial color={i % 5 === 0 ? WARM : ACCENT} />
        </mesh>
      ))}
    </group>
  );
}

interface OrbitProps {
  readonly accent?: 'cyan' | 'amber';
  readonly inclination: number;
  readonly phase: number;
  readonly radius: number;
  readonly speed: number;
}

function OrbitingNode({
  accent = 'cyan',
  inclination,
  phase,
  radius,
  speed,
}: OrbitProps): ReactElement {
  const group = useRef<Group>(null);
  const color = accent === 'amber' ? WARM : ACCENT;

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * speed;
  });

  const ringPoints = useMemo<Vector3[]>(() => {
    const out: Vector3[] = [];
    for (let i = 0; i <= 160; i++) {
      const a = (i / 160) * Math.PI * 2;
      out.push(new Vector3(Math.cos(a) * radius, 0, Math.sin(a) * radius));
    }
    return out;
  }, [radius]);

  return (
    <group rotation={[inclination, 0, 0]}>
      {/* Thin orbital path */}
      <Line color={color} lineWidth={0.6} opacity={0.18} points={ringPoints} transparent />

      <group ref={group} rotation={[0, phase, 0]}>
        {/* Connection beam from planet center out to the satellite */}
        <Line
          color={color}
          lineWidth={0.8}
          opacity={0.28}
          points={[
            [0, 0, 0],
            [radius, 0, 0],
          ]}
          transparent
        />
        {/* Satellite — small faceted node */}
        <mesh position={[radius, 0, 0]}>
          <octahedronGeometry args={[0.058, 0]} />
          <meshBasicMaterial color={color} />
        </mesh>
        {/* Soft halo around satellite */}
        <mesh position={[radius, 0, 0]}>
          <sphereGeometry args={[0.13, 12, 12]} />
          <meshBasicMaterial color={color} opacity={0.12} transparent />
        </mesh>
      </group>
    </group>
  );
}

export function NeuralMeshPlanet(): ReactElement {
  return (
    <Canvas
      camera={{ fov: 32, position: [0, 0.3, 5.6] }}
      dpr={[1, 2]}
      gl={{ antialias: true, powerPreference: 'high-performance' }}
      style={{ pointerEvents: 'none', touchAction: 'pan-y' }}
    >
      <ambientLight intensity={0.35} />
      <directionalLight color="#4FD1FF" intensity={1.6} position={[6, 4, 6]} />
      <directionalLight color="#FFB347" intensity={0.4} position={[-5, -2, -3]} />

      <Planet />
      <NeuralMesh />

      <OrbitingNode accent="cyan" inclination={0.12} phase={0} radius={2.05} speed={0.16} />
      <OrbitingNode accent="cyan" inclination={0.78} phase={1.3} radius={2.45} speed={0.11} />
      <OrbitingNode accent="amber" inclination={-0.45} phase={2.6} radius={2.85} speed={0.085} />
      <OrbitingNode accent="cyan" inclination={-0.18} phase={4.2} radius={2.25} speed={0.13} />

      <Stars count={1200} depth={60} factor={1.6} fade radius={80} saturation={0} speed={0.2} />

      <EffectComposer>
        <Bloom intensity={0.65} luminanceSmoothing={0.9} luminanceThreshold={0.32} mipmapBlur />
      </EffectComposer>
    </Canvas>
  );
}
