import { Menu, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import logoImage from 'figma:asset/34cb416c5e656bc3587aa0e00399a8d9a49836b8.png';

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'prizes', label: 'Prizes' },
    { id: 'memories', label: 'Memories' },
    { id: 'faqs', label: 'FAQS' },
  ];

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };

  // Update underline position when active section changes
  useEffect(() => {
    if (navRef.current) {
      const activeButton = navRef.current.querySelector(
        `[data-section="${activeSection}"]`
      ) as HTMLButtonElement;
      
      if (activeButton) {
        const navContainer = navRef.current;
        const navRect = navContainer.getBoundingClientRect();
        const buttonRect = activeButton.getBoundingClientRect();
        
        setUnderlineStyle({
          left: buttonRect.left - navRect.left,
          width: buttonRect.width,
        });
      }
    }
  }, [activeSection]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-20 relative">
          {/* Logo - Always visible on left */}
          <div className="absolute left-0">
            <button 
              onClick={() => handleNavClick('home')}
              className="cursor-pointer perspective-1000"
              style={{ perspective: '1000px' }}
            >
              <img 
                src={logoImage} 
                alt="GDXR Logo" 
                className="h-12 sm:h-14 w-auto cursor-pointer transition-all duration-500 ease-out hover:scale-110"
                style={{
                  transformStyle: 'preserve-3d',
                  filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.3))',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'rotateY(360deg) rotateX(10deg)';
                  e.currentTarget.style.filter = 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.8)) drop-shadow(0 4px 12px rgba(0, 0, 0, 0.5))';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'rotateY(0deg) rotateX(0deg)';
                  e.currentTarget.style.filter = 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.3))';
                }}
              />
            </button>
          </div>

          {/* Desktop Menu - Centered */}
          <div ref={navRef} className="hidden md:flex items-center space-x-8 relative">
            {menuItems.map((item) => (
              <button
                key={item.id}
                data-section={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-lg transition-colors duration-300 py-2 relative z-10 ${
                  activeSection === item.id
                    ? 'text-white'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Animated underline */}
            <div
              className="absolute bottom-0 h-0.5 bg-blue-400 transition-all duration-300 ease-out"
              style={{
                left: `${underlineStyle.left}px`,
                width: `${underlineStyle.width}px`,
              }}
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden absolute right-0">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-blue-400 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border-white/10">
          <div className="px-4 py-6 space-y-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left text-lg py-2 transition-colors ${
                  activeSection === item.id
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
