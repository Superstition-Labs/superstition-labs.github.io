import { Line, Stars } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { type ReactElement, useMemo, useRef } from 'react';
import {
  BufferGeometry,
  CatmullRomCurve3,
  Color,
  Float32BufferAttribute,
  type Group,
  type Mesh,
  Vector3,
} from 'three';

const CYAN = new Color('#4FD1FF');
const AMBER = new Color('#FFB347');

function OrbitRing({
  color,
  inclination,
  radius,
  rotation,
}: {
  readonly color: Color;
  readonly inclination: number;
  readonly radius: number;
  readonly rotation: number;
}): ReactElement {
  const points = useMemo<Vector3[]>(() => {
    const out: Vector3[] = [];
    for (let i = 0; i <= 180; i++) {
      const a = (i / 180) * Math.PI * 2;
      out.push(new Vector3(Math.cos(a) * radius, 0, Math.sin(a) * radius));
    }
    return out;
  }, [radius]);

  return (
    <group rotation={[inclination, rotation, 0]}>
      <Line color={color} lineWidth={1} opacity={0.35} points={points} transparent />
    </group>
  );
}

function Satellite({
  inclination,
  phase,
  radius,
  rotation,
  speed,
}: {
  readonly inclination: number;
  readonly phase: number;
  readonly radius: number;
  readonly rotation: number;
  readonly speed: number;
}): ReactElement {
  const ref = useRef<Mesh>(null);

  const curve = useMemo(() => {
    const pts: Vector3[] = [];
    for (let i = 0; i <= 200; i++) {
      const a = (i / 200) * Math.PI * 2;
      pts.push(new Vector3(Math.cos(a) * radius, 0, Math.sin(a) * radius));
    }
    return new CatmullRomCurve3(pts, true);
  }, [radius]);

  useFrame((state) => {
    const t = (state.clock.elapsedTime * speed + phase) % 1;
    const p = curve.getPointAt(t);
    if (ref.current) ref.current.position.set(p.x, p.y, p.z);
  });

  return (
    <group rotation={[inclination, rotation, 0]}>
      <mesh ref={ref}>
        <boxGeometry args={[0.06, 0.03, 0.06]} />
        <meshBasicMaterial color={CYAN} />
      </mesh>
    </group>
  );
}

function Planet(): ReactElement {
  const ref = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.06;
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.95, 96, 96]} />
      <meshStandardMaterial
        color="#0c1626"
        emissive="#0a1f3d"
        emissiveIntensity={0.4}
        metalness={0.2}
        roughness={0.75}
      />
    </mesh>
  );
}

function ParticleField(): ReactElement {
  const ref = useRef<Group>(null);
  const geometry = useMemo(() => {
    const count = 320;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 1.7 + Math.random() * 1.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    const g = new BufferGeometry();
    g.setAttribute('position', new Float32BufferAttribute(positions, 3));
    return g;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.02;
  });

  return (
    <group ref={ref}>
      <points>
        <primitive attach="geometry" object={geometry} />
        <pointsMaterial color={CYAN} size={0.02} sizeAttenuation transparent />
      </points>
    </group>
  );
}

export function OrbitalScene(): ReactElement {
  return (
    <Canvas
      camera={{ fov: 38, position: [0, 1.2, 4.5] }}
      dpr={[1, 2]}
      gl={{ antialias: true, powerPreference: 'high-performance' }}
      style={{ pointerEvents: 'none', touchAction: 'pan-y' }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight color="#4FD1FF" intensity={1.3} position={[5, 4, 5]} />
      <directionalLight color="#FFB347" intensity={0.5} position={[-4, -1, -3]} />

      <Planet />
      <OrbitRing color={CYAN} inclination={0.05} radius={1.4} rotation={0} />
      <OrbitRing color={CYAN} inclination={0.9} radius={1.85} rotation={0.4} />
      <OrbitRing color={AMBER} inclination={-0.6} radius={2.3} rotation={-0.3} />

      <Satellite inclination={0.05} phase={0} radius={1.4} rotation={0} speed={0.06} />
      <Satellite inclination={0.05} phase={0.5} radius={1.4} rotation={0} speed={0.06} />
      <Satellite inclination={0.9} phase={0.2} radius={1.85} rotation={0.4} speed={0.04} />
      <Satellite inclination={-0.6} phase={0.7} radius={2.3} rotation={-0.3} speed={0.03} />

      <ParticleField />

      <Stars count={1600} depth={70} factor={2} fade radius={90} saturation={0} speed={0.3} />

      <EffectComposer>
        <Bloom intensity={0.9} luminanceSmoothing={0.85} luminanceThreshold={0.28} mipmapBlur />
      </EffectComposer>
    </Canvas>
  );
}
