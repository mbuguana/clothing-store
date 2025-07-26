'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { useLoader } from '@react-three/fiber';

function CharacterModel() {
  const model = useLoader(FBXLoader, '/models/character.fbx');
  return <primitive object={model} scale={0.01} />;
}

export default function FittingView() {
  return (
    <Canvas style={{ height: '100vh' }}>
      <ambientLight />
      <directionalLight position={[10, 10, 5]} />
      <Suspense fallback={null}>
        <CharacterModel />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
