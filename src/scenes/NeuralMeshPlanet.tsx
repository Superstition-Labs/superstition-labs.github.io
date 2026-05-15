import { OrbitControls, Stars } from '@react-three/drei';
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

const ACCENT = new Color('#5B8DEF');
const WARM = new Color('#C9A66B');

function Planet(): ReactElement {
  const ref = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.04;
  });

  const geometry = useMemo(() => new SphereGeometry(1.5, 96, 96), []);
  const material = useMemo(
    () =>
      new MeshStandardMaterial({
        color: new Color('#0a1428'),
        emissive: new Color('#0a1f3d'),
        emissiveIntensity: 0.25,
        metalness: 0.1,
        roughness: 0.85,
      }),
    [],
  );

  return <mesh geometry={geometry} material={material} ref={ref} />;
}

function NeuralMesh(): ReactElement {
  const ref = useRef<Group>(null);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.06;
      ref.current.rotation.x += delta * 0.012;
    }
  });

  const { edges, nodes } = useMemo(() => {
    const icosa = new IcosahedronGeometry(1.62, 3);
    const edgeGeom = new EdgesGeometry(icosa);
    const lineMat = new LineBasicMaterial({
      color: ACCENT,
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
          <sphereGeometry args={[0.012, 8, 8]} />
          <meshBasicMaterial color={i % 7 === 0 ? WARM : ACCENT} />
        </mesh>
      ))}
    </group>
  );
}

export function NeuralMeshPlanet(): ReactElement {
  return (
    <Canvas
      camera={{ fov: 32, position: [0, 0.2, 5.4] }}
      dpr={[1, 2]}
      gl={{ antialias: true, powerPreference: 'high-performance' }}
    >
      <ambientLight intensity={0.35} />
      <directionalLight color="#5B8DEF" intensity={1.6} position={[6, 4, 6]} />
      <directionalLight color="#C9A66B" intensity={0.35} position={[-5, -2, -3]} />

      <Planet />
      <NeuralMesh />

      <Stars count={1200} depth={60} factor={1.6} fade radius={80} saturation={0} speed={0.2} />

      <OrbitControls
        autoRotate
        autoRotateSpeed={0.4}
        enablePan={false}
        enableRotate={false}
        enableZoom={false}
      />

      <EffectComposer>
        <Bloom intensity={0.5} luminanceSmoothing={0.9} luminanceThreshold={0.35} mipmapBlur />
      </EffectComposer>
    </Canvas>
  );
}
