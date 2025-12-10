import { Trophy } from 'lucide-react';
import goldCard from 'figma:asset/d0e89c96722cbd703d40e2d1b4837ce7edbeb925.png';
import redCard from 'figma:asset/56ebde86565afe10674b5e6ca23519568b0fc21d.png';
import greenCard from 'figma:asset/ec716fb39e36da1ea2e3507e5b5620acf9dbb731.png';
import backgroundImage from 'figma:asset/8b24ceac4b17d181a370aea8ed452a9c6f109774.png';
import { useEffect, useRef, useState } from 'react';

export function PrizePool() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isScrollLocked, setIsScrollLocked] = useState(false);

  const prizes = [
    {
      position: '2nd',
      title: 'Runner Up',
      amount: '₹15,000',
      card: redCard,
      scale: 0.9,
      order: 2,
      delay: 0.2
    },
    {
      position: '1st',
      title: 'Champion',
      amount: '₹17,500',
      card: goldCard,
      scale: 1,
      order: 1,
      delay: 0
    },
    {
      position: '3rd',
      title: '2nd Runner Up',
      amount: '₹12,500',
      card: greenCard,
      scale: 0.85,
      order: 3,
      delay: 0.4
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            // Lock scroll
            document.body.style.overflow = 'hidden';
            setIsScrollLocked(true);
            
            // Trigger animation
            setIsVisible(true);

            // Unlock scroll after animation completes
            setTimeout(() => {
              document.body.style.overflow = '';
              setIsScrollLocked(false);
            }, 2500); // Give time for all animations to complete
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      // Ensure scroll is unlocked on cleanup
      document.body.style.overflow = '';
    };
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen py-12 sm:py-16 md:py-20 px-4 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="Prizes Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Gradient transitions */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-5"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-5"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div 
          className="text-center mb-12 sm:mb-16 md:mb-20"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(-30px)',
            transition: 'opacity 0.7s ease-out, transform 0.7s ease-out'
          }}
        >
          <h2 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-4 sm:mb-6 text-yellow-400"
            style={{
              fontFamily: 'Impact, "Arial Black", "Franklin Gothic Bold", sans-serif',
              fontWeight: '900',
              letterSpacing: '0.02em',
              textShadow: '4px 4px 8px rgba(0,0,0,0.5)'
            }}
          >
            Prize Pool
          </h2>
          <p 
            className="text-blue-300 text-2xl sm:text-3xl md:text-4xl px-4"
            style={{
              fontFamily: '"Brush Script MT", cursive',
              fontStyle: 'italic',
              letterSpacing: '0.05em'
            }}
          >
            Exclusive Goodies & Merch
          </p>
        </div>

        {/* Prize Cards */}
        <div className="flex flex-col md:flex-row items-end justify-center gap-6 sm:gap-8 md:gap-6 lg:gap-8 mb-8">
          {prizes.map((prize) => (
            <div
              key={prize.position}
              className={`relative ${prize.order === 1 ? 'md:order-2' : prize.order === 2 ? 'md:order-1' : 'md:order-3'}`}
              style={{
                transform: isVisible 
                  ? `scale(${prize.scale}) translateY(0)` 
                  : `scale(0) translateY(100px)`,
                opacity: isVisible ? 1 : 0,
                transition: `all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${prize.delay}s`
              }}
            >
              {/* Pokedex Card Background */}
              <div className="relative w-64 sm:w-72 md:w-64 lg:w-80 hover:scale-105 transition-all duration-500 ease-out hover:rotate-1 hover:shadow-2xl hover:shadow-blue-500/30 cursor-pointer">
                <img
                  src={prize.card}
                  alt={`${prize.title} Card`}
                  className="w-full h-auto"
                />
                
                {/* Prize Information Overlay */}
                <div className="absolute top-[8%] left-[8%] right-[8%] bottom-[52%] flex flex-col items-center justify-center text-center">
                  <div className="mb-2">
                    <div 
                      className={`text-5xl sm:text-6xl ${
                        prize.order === 1 ? 'text-yellow-400' : 
                        prize.order === 2 ? 'text-red-500' : 
                        'text-green-500'
                      }`}
                      style={{
                        fontFamily: '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                      }}
                    >
                      {prize.position}
                    </div>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl mb-3 text-gray-800" style={{ fontFamily: '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif' }}>
                    {prize.title}
                  </h3>
                  
                  <div 
                    className="text-3xl sm:text-4xl text-gray-900"
                    style={{
                      fontFamily: '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif'
                    }}
                  >
                    {prize.amount}
                  </div>
                </div>

                {/* Position Badge */}
                {prize.order === 1 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm flex items-center gap-2 shadow-lg">
                      <Trophy className="w-4 h-4" />
                      <span className="uppercase tracking-wider">Winner</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div 
          className="text-center mt-8 sm:mt-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.7s ease-out 0.7s, transform 0.7s ease-out 0.7s'
          }}
        >
          <p className="text-gray-400 text-sm sm:text-base md:text-lg">
            Plus exclusive Genesis 5 merchandise, collectibles, and special surprises!
          </p>
        </div>
      </div>
    </section>
  );
}