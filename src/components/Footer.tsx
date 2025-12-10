import { Mail, Phone, MapPin, Twitter, Instagram, Youtube, Facebook } from 'lucide-react';
import logoImage from 'figma:asset/34cb416c5e656bc3587aa0e00399a8d9a49836b8.png';
import backgroundImage from 'figma:asset/b9a74bb6cf8c3373bdabff77c9d03825992c4a8f.png';

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-8 sm:py-10 md:py-12 px-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="Footer Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <div>
            <a 
              href="#home" 
              className="inline-block mb-3 sm:mb-4 hover:opacity-80 transition-opacity"
            >
              <img 
                src={logoImage} 
                alt="GDXR Logo" 
                className="h-16 sm:h-20 w-auto"
              />
            </a>
            <p className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4">
              Bringing the Pokemon community together through competitive gaming and unforgettable experiences.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a href="#" className="w-9 sm:w-10 h-9 sm:h-10 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50">
                <Twitter className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
              </a>
              <a href="#" className="w-9 sm:w-10 h-9 sm:h-10 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50">
                <Instagram className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
              </a>
              <a href="#" className="w-9 sm:w-10 h-9 sm:h-10 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50">
                <Youtube className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
              </a>
              <a href="#" className="w-9 sm:w-10 h-9 sm:h-10 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50">
                <Facebook className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg sm:text-xl mb-3 sm:mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <a href="#home" className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:translate-x-1 inline-block">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:translate-x-1 inline-block">
                  About
                </a>
              </li>
              <li>
                <a href="#prizes" className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:translate-x-1 inline-block">
                  Prizes
                </a>
              </li>
              <li>
                <a href="#memories" className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:translate-x-1 inline-block">
                  Memories
                </a>
              </li>
              <li>
                <a href="#faqs" className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:translate-x-1 inline-block">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Event Details */}
          <div>
            <h4 className="text-lg sm:text-xl mb-3 sm:mb-4 text-white">Event Details</h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li className="text-gray-400">
                <span className="text-blue-400">📅</span> Date: 14th Feb 2026
              </li>
              <li className="text-gray-400">
                <span className="text-blue-400">💻</span> Format: Hybrid (Online + Offline)
              </li>
              <li className="text-gray-400">
                <span className="text-blue-400">💰</span> Prize Pool: ₹45,000+
              </li>
              <li className="text-gray-400">
                <span className="text-blue-400">🎨</span> Theme: To be announced
              </li>
              <li className="text-gray-400">
                <span className="text-blue-400">⏱️</span> Duration: 48 hours
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg sm:text-xl mb-3 sm:mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3 text-sm sm:text-base">
              <li className="flex items-start gap-2 sm:gap-3">
                <Mail className="w-4 sm:w-5 h-4 sm:h-5 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400 break-all">gdxr@aiitpune.in</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <Phone className="w-4 sm:w-5 h-4 sm:h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <div>Abhinav S: +91 97780 52399</div>
                  <div className="mt-1">Aradhna Kumari: +91 70502 62224</div>
                </div>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Army Institute Of Technology,<br />
                  Dighi Hills,<br />
                  Pune-411015
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-sm sm:text-base mb-2">
            © 2025 AR-VR Club AIT Pune. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500 px-2">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Code of Conduct</a>
          </div>
          <p className="text-gray-500 text-xs sm:text-sm mt-3 sm:mt-4 px-4">
            Made with ❤️ by GDXR Web Team | Powered by AIT Pune
          </p>
        </div>
      </div>
    </footer>
  );
}