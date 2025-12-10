import { useState, useEffect } from 'react';
import backgroundImage from 'figma:asset/aa3af1d95aba4ccf88ccd4bd34162fea9842798b.png';

interface HeroProps {
  onRegister: () => void;
  videoSrc?: string; // Optional video source
}

export function Hero({ onRegister, videoSrc }: HeroProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('home');
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        const sectionHeight = rect.height;
        const scrolled = -rect.top;
        const progress = Math.min(Math.max(scrolled / sectionHeight, 0), 1);
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const contentY = scrollProgress * 200; // Move content down on scroll
  const contentOpacity = 1 - scrollProgress * 1.5; // Fade out content

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background - Video or Image */}
      <div className="absolute inset-0 z-0">
        {videoSrc ? (
          <>
            <video 
              autoPlay 
              loop
              muted 
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
            {/* Fallback image if video doesn't load */}
            <img
              src={backgroundImage}
              alt="Pokemon Event"
              className="absolute inset-0 w-full h-full object-cover object-center"
              style={{ display: 'none' }}
              onError={(e) => {
                e.currentTarget.style.display = 'block';
              }}
            />
          </>
        ) : (
          <img
            src={backgroundImage}
            alt="Pokemon Event"
            className="w-full h-full object-cover object-center"
          />
        )}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div 
        className="relative z-10 text-center px-4 sm:px-6 max-w-7xl mx-auto w-full transition-all duration-100 -mt-20"
        style={{
          transform: `translateY(${contentY}px)`,
          opacity: contentOpacity,
        }}
      >
        <div className="mb-8">
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl mb-4 italic px-2" 
            style={{ 
              fontFamily: '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif',
              letterSpacing: '0.02em',
              fontWeight: '900',
              textShadow: '3px 3px 0px #1e40af, -1px -1px 0px rgba(59, 130, 246, 0.5), 2px 2px 8px rgba(0,0,0,0.8)',
              WebkitTextStroke: '1.5px #1e40af',
              transform: 'skewY(-2deg)'
            }}
          >
            <span className="text-yellow-400">GENESIS</span> <span className="text-blue-400">5</span>
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-white/90 mb-8 sm:mb-12 tracking-wide px-2">
            REALITY CAN BE WHATEVER WE WANT
          </p>
        </div>
        
        <button 
          onClick={onRegister}
          className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-3.5 md:py-4 rounded-lg text-sm sm:text-base md:text-lg transition-all hover:translate-y-[-2px] active:translate-y-[1px]"
          style={{
            boxShadow: '0 6px 0 #b45309, 0 8px 20px rgba(0,0,0,0.4)',
            fontWeight: '700',
          }}
        >
          Register
        </button>
      </div>

      {/* Multi-layer gradient fade for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 z-25 pointer-events-none">
        {/* Deep atmospheric glow */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-[400px]"
          style={{
            background: 'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(59, 130, 246, 0.15) 0%, transparent 70%)'
          }}
        ></div>
        
        {/* Primary gradient fade - deep navy to black */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-[300px]"
          style={{
            background: 'linear-gradient(to top, #000000 0%, #0a0f1a 40%, rgba(10, 15, 26, 0.8) 70%, transparent 100%)'
          }}
        ></div>
        
        {/* Soft atmospheric edge glow */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-[200px]"
          style={{
            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(10, 15, 26, 0.6) 50%, transparent 100%)'
          }}
        ></div>
      </div>
    </div>
  );
}