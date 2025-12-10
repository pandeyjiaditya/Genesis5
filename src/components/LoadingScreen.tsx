import { useEffect, useState } from 'react';
import logoImage from 'figma:asset/34cb416c5e656bc3587aa0e00399a8d9a49836b8.png';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Simulate loading progress over 8 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          setTimeout(() => {
            onLoadingComplete();
          }, 500);
          return 100;
        }
        // Accelerate progress as it goes - tuned for 8 seconds
        const increment = prev < 20 ? 0.4 : prev < 50 ? 0.6 : prev < 80 ? 0.8 : 1.2;
        return Math.min(prev + increment, 100);
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center transition-opacity duration-500 ${
        isComplete ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-purple-950/20 to-black"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center space-y-12">
        {/* AR-VR Logo with 3D Animation */}
        <div className="relative" style={{ perspective: '1000px' }}>
          <div 
            className="relative"
            style={{
              animation: 'logoFloat 3s ease-in-out infinite, logoRotate 4s linear infinite',
              transformStyle: 'preserve-3d',
            }}
          >
            <img 
              src={logoImage} 
              alt="AR-VR Club Logo" 
              className="h-32 sm:h-40 w-auto"
              style={{
                filter: 'drop-shadow(0 0 30px rgba(59, 130, 246, 0.6)) drop-shadow(0 0 60px rgba(147, 51, 234, 0.4))',
              }}
            />
            
            {/* Orbital Rings */}
            <div 
              className="absolute inset-0 border-2 border-blue-500/30 rounded-full"
              style={{
                animation: 'orbit 3s linear infinite',
                transform: 'translateZ(-20px)',
              }}
            ></div>
            <div 
              className="absolute inset-0 border-2 border-purple-500/30 rounded-full"
              style={{
                animation: 'orbit 4s linear infinite reverse',
                transform: 'translateZ(-40px)',
              }}
            ></div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl text-white tracking-wider">
            Loading Genesis 5
          </h2>
          <p className="text-blue-400 text-sm sm:text-base">
            Preparing your Pokémon experience...
          </p>
        </div>

        {/* Loading Bar */}
        <div className="w-80 sm:w-96 space-y-3">
          {/* Progress Bar Container */}
          <div className="relative h-3 bg-gray-900/50 rounded-full overflow-hidden border border-blue-500/30 backdrop-blur-sm">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent animate-pulse"></div>
            
            {/* Progress Bar Fill */}
            <div 
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 transition-all duration-300 ease-out rounded-full"
              style={{ 
                width: `${progress}%`,
                boxShadow: '0 0 20px rgba(59, 130, 246, 0.8), 0 0 40px rgba(147, 51, 234, 0.6)',
              }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
            </div>
          </div>

          {/* Progress Percentage */}
          <div className="text-center text-blue-400 text-sm font-mono">
            {progress}%
          </div>
        </div>

        {/* Loading Dots */}
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes logoFloat {
          0%, 100% {
            transform: translateY(0px) rotateX(0deg);
          }
          50% {
            transform: translateY(-20px) rotateX(10deg);
          }
        }

        @keyframes logoRotate {
          0% {
            transform: rotateY(0deg);
          }
          100% {
            transform: rotateY(360deg);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
}
