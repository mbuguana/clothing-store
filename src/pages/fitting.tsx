'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';

function CharacterModel() {
  const gltf = useGLTF('/models/VC.glb'); // ✅ make sure VC.glb is inside /public/models/
  return <primitive object={gltf.scene} scale={1} />;
}

export default function FittingPage() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Canvas camera={{ position: [0, 1, 3] }}>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 2, 5]} />
        <Suspense fallback={null}>
          <CharacterModel />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
