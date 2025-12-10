import { useEffect, useState, useRef } from 'react';
import * as THREE from 'three';
import CLOUDS from 'vanta/dist/vanta.clouds.min';
import backgroundImage from 'figma:asset/dfad918da999bcffd38c9f2533573b65bca677ce.png';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (targetDate: string): TimeLeft => {
  const total = new Date(targetDate).getTime() - new Date().getTime();

  return {
    days: Math.max(0, Math.floor(total / (1000 * 60 * 60 * 24))),
    hours: Math.max(0, Math.floor((total / (1000 * 60 * 60)) % 24)),
    minutes: Math.max(0, Math.floor((total / 1000 / 60) % 60)),
    seconds: Math.max(0, Math.floor((total / 1000) % 60)),
  };
};

interface Props {
  targetDate: string;
  videoSrc?: string;
}

export function Countdown({ targetDate, videoSrc }: Props) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(targetDate));
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  // Initialize Vanta clouds effect
  useEffect(() => {
    if (!vantaEffect.current && vantaRef.current) {
      vantaEffect.current = CLOUDS({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        skyColor: 0x315868,
        cloudColor: 0x4a7c91,
        cloudShadowColor: 0x1e3a47,
        sunColor: 0xffa500,
        sunGlareColor: 0xff6b00,
        speed: 1.20
      });
    }
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="countdown-section">
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
              alt="Countdown Background"
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
            alt="Countdown Background"
            className="w-full h-full object-cover object-center"
          />
        )}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Multi-layer gradient transition from Hero for seamless flow */}
      <div className="gradient-top"></div>
      <div className="gradient-glow-top"></div>

      <style>{`
        .countdown-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 80px 20px;
        }

        .gradient-top {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 120px;
          background: linear-gradient(to bottom, #000000 0%, #0a0f1a 30%, rgba(10, 15, 26, 0.7) 60%, transparent 100%);
          z-index: 5;
        }

        .gradient-glow-top {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 180px;
          background: radial-gradient(ellipse 70% 50% at 50% 0%, rgba(59, 130, 246, 0.08) 0%, transparent 70%);
          z-index: 4;
        }

        .gradient-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 128px;
          background: linear-gradient(to top, #000000, transparent);
          z-index: 5;
        }

        .countdown-content {
          position: relative;
          z-index: 10;
          text-align: center;
          animation: fadeInUp 1.2s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .countdown-title {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
          text-shadow: 0 4px 20px rgba(59, 130, 246, 0.3);
        }

        .countdown-date {
          color: #d1d5db;
          font-size: 1.5rem;
          margin-bottom: 3rem;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        }

        /* DaisyUI Countdown Styles */
        .countdown {
          display: inline-flex;
        }

        .countdown > * {
          height: auto;
          display: inline-block;
          overflow-y: hidden;
        }

        .countdown > *:before {
          position: relative;
          content: "00";
          display: block;
          text-align: center;
          transition: all 0.6s cubic-bezier(0.4, 0.0, 0.2, 1);
        }

        .countdown > *:before {
          content: "0" attr(style);
          content: "0" var(--value) / "";
        }

        @media (max-width: 768px) {
          .countdown-title {
            font-size: 2rem;
          }

          .countdown-date {
            font-size: 1.125rem;
          }
        }

        @media (max-width: 640px) {
          .countdown-title {
            font-size: 1.5rem;
          }
        }
      `}</style>

      {/* Content */}
      <div className="countdown-content">
        <h2 className="countdown-title">
          <span style={{ color: '#fbbf24' }}>EVENT</span>{' '}
          <span style={{ color: '#60a5fa' }}>COUNTDOWN</span>
        </h2>
        <p className="countdown-date font-[Asset] text-[#60a5fa]">February 14, 2026</p>
        
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
          <div 
            className="flex flex-col p-4 rounded-2xl border backdrop-blur-sm"
            style={{
              background: 'linear-gradient(135deg, rgba(38, 38, 38, 0.5) 0%, rgba(23, 23, 23, 0.6) 100%)',
              borderColor: 'rgba(59, 130, 246, 0.3)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), 0 2px 8px rgba(59, 130, 246, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
            }}
          >
            <span className="countdown font-mono text-5xl md:text-6xl lg:text-7xl">
              <span 
                style={{ '--value': timeLeft.days.toString().padStart(2, '0'), color: '#93c5fd' } as React.CSSProperties} 
                aria-live="polite" 
                aria-label={timeLeft.days.toString().padStart(2, '0')}
              >
                {timeLeft.days.toString().padStart(2, '0')}
              </span>
            </span>
            <span className="text-neutral-400 mt-2 text-sm md:text-base uppercase tracking-wider">days</span>
          </div>
          <div 
            className="flex flex-col p-4 rounded-2xl border backdrop-blur-sm"
            style={{
              background: 'linear-gradient(135deg, rgba(38, 38, 38, 0.5) 0%, rgba(23, 23, 23, 0.6) 100%)',
              borderColor: 'rgba(59, 130, 246, 0.3)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), 0 2px 8px rgba(59, 130, 246, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
            }}
          >
            <span className="countdown font-mono text-5xl md:text-6xl lg:text-7xl">
              <span 
                style={{ '--value': timeLeft.hours.toString().padStart(2, '0'), color: '#93c5fd' } as React.CSSProperties} 
                aria-live="polite" 
                aria-label={timeLeft.hours.toString().padStart(2, '0')}
              >
                {timeLeft.hours.toString().padStart(2, '0')}
              </span>
            </span>
            <span className="text-neutral-400 mt-2 text-sm md:text-base uppercase tracking-wider">hours</span>
          </div>
          <div 
            className="flex flex-col p-4 rounded-2xl border backdrop-blur-sm"
            style={{
              background: 'linear-gradient(135deg, rgba(38, 38, 38, 0.5) 0%, rgba(23, 23, 23, 0.6) 100%)',
              borderColor: 'rgba(59, 130, 246, 0.3)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), 0 2px 8px rgba(59, 130, 246, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
            }}
          >
            <span className="countdown font-mono text-5xl md:text-6xl lg:text-7xl">
              <span 
                style={{ '--value': timeLeft.minutes.toString().padStart(2, '0'), color: '#93c5fd' } as React.CSSProperties} 
                aria-live="polite" 
                aria-label={timeLeft.minutes.toString().padStart(2, '0')}
              >
                {timeLeft.minutes.toString().padStart(2, '0')}
              </span>
            </span>
            <span className="text-neutral-400 mt-2 text-sm md:text-base uppercase tracking-wider">min</span>
          </div>
          <div 
            className="flex flex-col p-4 rounded-2xl border backdrop-blur-sm"
            style={{
              background: 'linear-gradient(135deg, rgba(38, 38, 38, 0.5) 0%, rgba(23, 23, 23, 0.6) 100%)',
              borderColor: 'rgba(59, 130, 246, 0.3)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), 0 2px 8px rgba(59, 130, 246, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
            }}
          >
            <span className="countdown font-mono text-5xl md:text-6xl lg:text-7xl">
              <span 
                style={{ '--value': timeLeft.seconds.toString().padStart(2, '0'), color: '#93c5fd' } as React.CSSProperties} 
                aria-live="polite" 
                aria-label={timeLeft.seconds.toString().padStart(2, '0')}
              >
                {timeLeft.seconds.toString().padStart(2, '0')}
              </span>
            </span>
            <span className="text-neutral-400 mt-2 text-sm md:text-base uppercase tracking-wider">sec</span>
          </div>
        </div>
      </div>

      {/* Gradient transition to About section */}
      <div className="gradient-bottom"></div>
    </div>
  );
}