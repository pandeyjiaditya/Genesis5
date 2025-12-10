import { Suspense, useRef, memo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

interface ZekromModelProps {
  rotationY: number;
}

function ZekromModel({ rotationY }: ZekromModelProps) {
  const modelUrl = 'https://raw.githubusercontent.com/pandeyjiaditya/3d-model/main/pokemon_black_and_white_zekrom.glb';
  const { scene } = useGLTF(modelUrl);
  const meshRef = useRef<any>();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y = rotationY;
    }
  });

  return <primitive ref={meshRef} object={scene} scale={0.8} position={[0, -0.8, 0]} />;
}

function PokeballModel() {
  const modelUrl = 'https://raw.githubusercontent.com/pandeyjiaditya/3d-model/main/open_pokemon_ball.glb';
  const { scene } = useGLTF(modelUrl);
  const meshRef = useRef<any>();

  useFrame(() => {
    // Debug: log to console when model is loaded
    if (meshRef.current && !meshRef.current.userData.logged) {
      console.log('Pokeball model loaded', meshRef.current);
      meshRef.current.userData.logged = true;
    }
  });

  return <primitive ref={meshRef} object={scene} scale={2} position={[0, 0, 0]} />;
}

interface Pokemon3DModelProps {
  rotationY?: number;
}

const Pokemon3DModelComponent = ({ rotationY = 0 }: Pokemon3DModelProps) => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ width: '100%', height: '100%' }}
        dpr={[1, 2]}
        gl={{ 
          antialias: true,
          preserveDrawingBuffer: true,
          powerPreference: 'high-performance'
        }}
        shadows={false}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <directionalLight position={[-10, -10, -5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={1.5} color="#60a5fa" />
        <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
        <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={1.5} color="#3b82f6" />
        
        <Suspense fallback={null}>
          <ZekromModel rotationY={rotationY} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export const Pokemon3DModel = memo(Pokemon3DModelComponent);

// Pokeball 3D Model Component
const Pokeball3DModelComponent = () => {
  return (
    <div className="w-full h-full" style={{ background: 'rgba(255, 0, 0, 0.1)' }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        style={{ width: '100%', height: '100%' }}
        dpr={[1, 2]}
        gl={{ 
          alpha: true, 
          antialias: true,
          preserveDrawingBuffer: true,
          powerPreference: 'high-performance'
        }}
        shadows={false}
      >
        <color attach="background" args={['transparent']} />
        <ambientLight intensity={2} />
        <directionalLight position={[5, 5, 5]} intensity={3} />
        <directionalLight position={[-5, -5, -5]} intensity={2} />
        <pointLight position={[0, 0, 5]} intensity={2} color="#ffffff" />
        <pointLight position={[0, 5, 0]} intensity={2} color="#60a5fa" />
        
        <Suspense fallback={null}>
          <PokeballModel />
        </Suspense>
      </Canvas>
    </div>
  );
};

export const Pokeball3DModel = memo(Pokeball3DModelComponent);

useGLTF.preload('https://raw.githubusercontent.com/pandeyjiaditya/3d-model/main/pokemon_black_and_white_zekrom.glb');
useGLTF.preload('https://raw.githubusercontent.com/pandeyjiaditya/3d-model/main/open_pokemon_ball.glb');