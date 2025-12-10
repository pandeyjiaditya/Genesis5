import { Gamepad2, Trophy, Users, Calendar } from 'lucide-react';
import aboutBg from 'figma:asset/dbde9649abfaafbc510db0693cfbc75ce5f3223f.png';
import { Pokemon3DModel } from './Pokemon3DModel';
import { useRef, useEffect, useState } from 'react';

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const modelRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        const windowHeight = window.innerHeight;
        
        // Calculate scroll progress through the section
        const scrollPosition = -sectionTop;
        const maxScroll = sectionHeight + windowHeight;
        const progress = Math.max(0, Math.min(1, scrollPosition / maxScroll));
        
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen py-20 px-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={aboutBg}
          alt="Night City View"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Gradient transition from Countdown */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-5"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main About Section */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 md:mb-20">
          {/* Pokemon 3D Model */}
          <div ref={modelRef} className="relative h-80 sm:h-96 md:h-[28rem] lg:h-[32rem]">
            <Pokemon3DModel rotationY={scrollProgress * Math.PI * 2} />
          </div>

          {/* About Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-8 text-white">
              ABOUT <span className="text-blue-400">GENESIS</span>
            </h2>
            
            <p className="text-gray-300 text-base sm:text-lg mb-6 md:mb-8 leading-relaxed">
              Rev your engines and fasten your seat belts as the GDXR Club kick-starts the Fourth Edition of Genesis - your ticket to an adventure that hits closer to home than ever! Returning after the 2024 Last Edition, this 2025 Genesis isn't just about pixels and coding; it's about bringing the spirit of games to life.
            </p>

            {/* Stages */}
            <div className="space-y-4">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6 hover:border-blue-500/50 transition-all">
                <h3 className="text-lg sm:text-xl text-white mb-2">Stage 1:</h3>
                <p className="text-gray-400 text-sm sm:text-base">Online Game Jam Round</p>
              </div>
              
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6 hover:border-blue-500/50 transition-all">
                <h3 className="text-lg sm:text-xl text-white mb-2">Stage 2:</h3>
                <p className="text-gray-400 text-sm sm:text-base">Offline Surprise Element Round</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-5"></div>
    </section>
  );
}