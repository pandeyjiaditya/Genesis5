import { Building2, Zap, Gamepad2, Cpu, Trophy, Star } from 'lucide-react';

export function Sponsors() {
  const platinumSponsors = [
    { name: "PokéTech Industries", icon: Cpu, description: "Leading gaming hardware manufacturer" },
    { name: "Kanto Gaming Network", icon: Gamepad2, description: "Premier esports organization" }
  ];

  const goldSponsors = [
    { name: "Silph Co.", icon: Building2, description: "Innovation in gaming technology" },
    { name: "Elite Four Gaming", icon: Trophy, description: "Professional gaming league" },
    { name: "Thunder Games", icon: Zap, description: "Game development studio" }
  ];

  const silverSponsors = [
    "Celadon Computers",
    "Viridian Ventures",
    "Pewter Gaming Gear",
    "Vermillion Esports",
    "Lavender Technologies",
    "Saffron Systems"
  ];

  return (
    <section className="min-h-screen bg-black py-12 sm:py-16 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 sm:mb-4 text-white px-2">
            OUR <span className="text-blue-400">SPONSORS</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4">
            Genesis 5 is made possible by our amazing sponsors who share our passion for bringing the Pokemon community together
          </p>
        </div>

        {/* Platinum Sponsors */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            <Star className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-yellow-400" />
            <h3 className="text-xl sm:text-2xl md:text-3xl text-white">Platinum Sponsors</h3>
            <Star className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-yellow-400" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {platinumSponsors.map((sponsor, index) => {
              const Icon = sponsor.icon;
              return (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 border-2 border-yellow-500/50 rounded-2xl p-6 sm:p-8 md:p-10 text-center hover:border-yellow-400 transition-all group"
                >
                  <Icon className="w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 text-yellow-400 mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-lg sm:text-xl md:text-2xl text-white mb-2">{sponsor.name}</h4>
                  <p className="text-gray-400 text-sm sm:text-base">{sponsor.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            <Star className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-amber-400" />
            <h3 className="text-xl sm:text-2xl md:text-3xl text-white">Gold Sponsors</h3>
            <Star className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-amber-400" />
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {goldSponsors.map((sponsor, index) => {
              const Icon = sponsor.icon;
              return (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-amber-500/10 to-amber-600/10 border border-amber-500/50 rounded-xl p-6 sm:p-8 text-center hover:border-amber-400 transition-all group"
                >
                  <Icon className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 text-amber-400 mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-lg sm:text-xl text-white mb-2">{sponsor.name}</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">{sponsor.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Silver Sponsors */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            <Star className="w-5 sm:w-6 h-5 sm:h-6 text-gray-400" />
            <h3 className="text-xl sm:text-2xl md:text-3xl text-white">Silver Sponsors</h3>
            <Star className="w-5 sm:w-6 h-5 sm:h-6 text-gray-400" />
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {silverSponsors.map((sponsor, index) => (
              <div 
                key={index}
                className="bg-white/5 border border-white/10 rounded-lg p-4 sm:p-6 text-center hover:border-gray-400 hover:bg-white/10 transition-all"
              >
                <Building2 className="w-8 sm:w-10 h-8 sm:h-10 text-gray-400 mx-auto mb-2 sm:mb-3" />
                <p className="text-white text-xs sm:text-sm">{sponsor}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Become a Sponsor CTA */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-6 sm:p-8 md:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl text-white mb-3 sm:mb-4">Become a Sponsor</h3>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
            Partner with Genesis 5 and connect with thousands of passionate Pokemon fans and gamers. Multiple sponsorship packages available.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-colors text-sm sm:text-base">
              View Sponsorship Packages
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg border border-white/20 transition-colors text-sm sm:text-base">
              Contact Sales Team
            </button>
          </div>
        </div>

        {/* Media Partners */}
        <div className="mt-12 sm:mt-16 text-center">
          <h3 className="text-xl sm:text-2xl text-white mb-6 sm:mb-8">Media Partners</h3>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 items-center opacity-60 px-2">
            {["Pokemon News Network", "GameTrainer Weekly", "Esports Daily", "Trading Card Chronicle"].map((partner, index) => (
              <div 
                key={index}
                className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base md:text-lg"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
