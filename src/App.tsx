import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Countdown } from './components/Countdown';
import { About } from './components/About';
import { PrizePool } from './components/PrizePool';
import { Memories } from './components/Memories';
import { FAQ } from './components/FAQ';
import { Sponsors } from './components/Sponsors';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';
import { IntroVideo } from './components/IntroVideo';
import pokeballCursor from 'figma:asset/b85703017eddc550bd9a810060ce47de7f152781.png';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showIntro, setShowIntro] = useState(true);
  const [showMainContent, setShowMainContent] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll spy to detect active section
  useEffect(() => {
    const sections = ['home', 'about', 'prizes', 'memories', 'faqs'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}
      
      {!isLoading && showIntro && (
        <IntroVideo 
          onComplete={() => {
            setShowIntro(false);
            setTimeout(() => setShowMainContent(true), 100);
          }} 
        />
      )}
      
      <div 
        className={`min-h-screen bg-black text-white transition-opacity duration-1000 ${
          showMainContent ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ cursor: `url(${pokeballCursor}) 16 16, auto` }}
      >
        <style>{`
          * {
            cursor: url(${pokeballCursor}) 16 16, auto !important;
          }
          button, a, [role="button"], img[class*="cursor-pointer"] {
            cursor: pointer !important;
          }
        `}</style>
        <Navigation activeSection={activeSection} onNavigate={scrollToSection} />
        
        <div id="home">
          <Hero 
            onRegister={() => scrollToSection('about')} 
            videoSrc="https://res.cloudinary.com/adiaurbackend/video/upload/v1764955319/1_hqr12u.mp4"
          />
        </div>
        
        <Countdown 
          targetDate="2026-02-14T00:00:00" 
          videoSrc="https://res.cloudinary.com/adiaurbackend/video/upload/v1764955671/2_xgobob.mp4"
        />
        
        <div id="about">
          <About />
        </div>
        
        <div id="prizes">
          <PrizePool />
        </div>
        
        <div id="memories">
          <Memories />
        </div>
        
        <div id="faqs">
          <FAQ />
        </div>
        
        <Sponsors />
        
        <Footer />
      </div>
    </>
  );
}

export default App;