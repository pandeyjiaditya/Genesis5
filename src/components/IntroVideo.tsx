import { useEffect, useState, useRef } from 'react';

interface Props {
  onComplete: () => void;
}

export function IntroVideo({ onComplete }: Props) {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isStarted) return;

    const handleEnded = () => {
      // Start fade out animation
      setIsFadingOut(true);
      
      // After fade animation completes, hide the intro completely
      setTimeout(() => {
        setIsVisible(false);
        onComplete();
      }, 1000); // Match the CSS transition duration
    };

    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('ended', handleEnded);
    };
  }, [onComplete, isStarted]);

  const handleStart = () => {
    const video = videoRef.current;
    if (!video) return;

    setIsStarted(true);
    
    // Play video with audio
    video.muted = false;
    video.play().catch((error) => {
      console.log('Play failed:', error);
    });
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black transition-opacity duration-1000 ${
        isFadingOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        playsInline
        muted
      >
        <source
          src="https://res.cloudinary.com/adiaurbackend/video/upload/v1765176244/4_tbjheb.mp4"
          type="video/mp4"
        />
      </video>

      {/* Click to Start Overlay */}
      {!isStarted && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <button
            onClick={handleStart}
            className="px-12 py-6 text-2xl font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-500 hover:to-purple-500 transform hover:scale-105 transition-all duration-300 shadow-2xl animate-pulse"
            style={{ cursor: 'pointer' }}
          >
            Click to Start
          </button>
        </div>
      )}
    </div>
  );
}