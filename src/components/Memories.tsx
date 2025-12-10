import * as THREE from 'three';
import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Image, Environment, ScrollControls, useScroll } from '@react-three/drei';
import { easing } from 'maath';
import '../utils/three-extensions';
import memoriesBg from 'figma:asset/b698b8474aeec881ef6d1075d00247eaedaf9655.png';

const images = [
  'https://raw.githubusercontent.com/pandeyjiaditya/3d-model/main/gen%204%20pics/img1.jpg',
  'https://raw.githubusercontent.com/pandeyjiaditya/3d-model/main/gen%204%20pics/img2.jpg',
  'https://raw.githubusercontent.com/pandeyjiaditya/3d-model/main/gen%204%20pics/img4.jpg',
  'https://raw.githubusercontent.com/pandeyjiaditya/3d-model/main/gen%204%20pics/img5.jpg',
  'https://raw.githubusercontent.com/pandeyjiaditya/3d-model/main/gen%204%20pics/img7.jpg',
  'https://raw.githubusercontent.com/pandeyjiaditya/3d-model/main/gen%204%20pics/img8.jpg',
  'https://raw.githubusercontent.com/pandeyjiaditya/3d-model/main/gen%204%20pics/img10.jpg',
  'https://raw.githubusercontent.com/pandeyjiaditya/3d-model/main/gen%204%20pics/img11.jpg',
];

function Rig({ children, ...props }: any) {
  const ref = useRef<THREE.Group>(null);
  const scroll = useScroll();
  
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y = -scroll.offset * (Math.PI * 2);
    }
    state.events.update();
    easing.damp3(state.camera.position, [-state.pointer.x * 2, state.pointer.y + 1.5, 10], 0.3, delta);
    state.camera.lookAt(0, 0, 0);
  });
  
  return <group ref={ref} {...props}>{children}</group>;
}

function Carousel({ radius = 1.4, count = 8 }: { radius?: number; count?: number }) {
  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <Card
          key={i}
          url={images[i % images.length]}
          position={[
            Math.sin((i / count) * Math.PI * 2) * radius,
            0,
            Math.cos((i / count) * Math.PI * 2) * radius
          ]}
          rotation={[0, Math.PI + (i / count) * Math.PI * 2, 0]}
        />
      ))}
    </>
  );
}

function Card({ url, ...props }: any) {
  const ref = useRef<any>();
  const [hovered, hover] = useState(false);
  
  const pointerOver = (e: any) => {
    e.stopPropagation();
    hover(true);
  };
  
  const pointerOut = () => hover(false);
  
  useFrame((state, delta) => {
    if (ref.current) {
      easing.damp3(ref.current.scale, hovered ? 1.15 : 1, 0.1, delta);
      easing.damp(ref.current.material, 'radius', hovered ? 0.25 : 0.1, 0.2, delta);
      easing.damp(ref.current.material, 'zoom', hovered ? 1 : 1.5, 0.2, delta);
    }
  });
  
  return (
    <Image
      ref={ref}
      url={url}
      transparent
      side={THREE.DoubleSide}
      onPointerOver={pointerOver}
      onPointerOut={pointerOut}
      {...props}
    >
      <bentPlaneGeometry args={[0.1, 1, 1, 20, 20]} />
    </Image>
  );
}

export function Memories() {
  return (
    <section id="memories" className="relative h-[120vh] sm:h-[130vh] md:h-[140vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={memoriesBg}
          alt="Pokemon Arena"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      {/* Gradient transition from previous section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none"></div>
      
      {/* Title */}
      <div className="absolute top-16 sm:top-20 md:top-24 lg:top-32 left-0 right-0 z-30 flex justify-center pointer-events-none px-4">
        <h2 
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-wider uppercase text-center"
          style={{
            fontFamily: '"Press Start 2P", cursive',
            color: '#FFD700',
            textShadow: '2px 2px 0px #FF4500, -1px -1px 0px #FFA500, 0px 0px 15px #FFD700, 0px 0px 30px #FFA500',
            WebkitTextStroke: '1px #000000',
            paintOrder: 'stroke fill'
          }}
        >
          GENESIS 4 Memories
        </h2>
      </div>
      
      {/* 3D Canvas - with padding at bottom for scroll space */}
      <div className="absolute inset-0 z-10 pb-[30vh] sm:pb-[35vh] md:pb-[40vh]">
        <style>{`
          #memories {
            overflow: hidden !important;
          }
          #memories * {
            scrollbar-width: none !important;
            -ms-overflow-style: none !important;
          }
          #memories *::-webkit-scrollbar {
            display: none !important;
            width: 0 !important;
            height: 0 !important;
          }
        `}</style>
        <Canvas 
          camera={{ position: [0, 0, 100], fov: 15 }} 
          gl={{ alpha: true }} 
          style={{ background: 'transparent' }}
        >
          <fog attach="fog" args={['#0a0a0a', 8.5, 12]} />
          <ScrollControls pages={2} infinite>
            <Rig rotation={[0, 0, 0.15]}>
              <Carousel />
            </Rig>
          </ScrollControls>
          <Environment preset="dawn" />
        </Canvas>
      </div>
      
      {/* Gradient transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none"></div>
    </section>
  );
}