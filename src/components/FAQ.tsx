import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import backgroundImage from 'figma:asset/e04c032cd6d3c70d2d6c944d90b1c641302a52a6.png';

type Category = 'registration' | 'eventDetails' | 'prizes' | 'general';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<Category>('registration');

  const categories = [
    { id: 'registration' as Category, label: 'Registration & Participation' },
    { id: 'eventDetails' as Category, label: 'Event Details' },
    { id: 'prizes' as Category, label: 'Prizes & Perks' },
    { id: 'general' as Category, label: 'General Information' },
  ];

  const allFaqs: Record<Category, { question: string; answer: string }[]> = {
    registration: [
      {
        question: "How can I register for GENESIS 5?",
        answer: "You can register through the official link on our website or Unstop page once registrations open."
      },
      {
        question: "What is the maximum number of participants per team?",
        answer: "Teams can consist of 2-4 members. Solo participation is also allowed for certain categories."
      },
      {
        question: "Can I join even if I don't know coding?",
        answer: "Absolutely! Genesis 5 welcomes participants of all skill levels. We have workshops and beginner-friendly challenges to help you learn."
      },
      {
        question: "Can teams from different colleges participate together?",
        answer: "Yes, teams can be formed with members from different colleges or institutions."
      },
      {
        question: "Is there a registration fee?",
        answer: "The registration details including fees will be announced when registration opens. Early bird registrations may receive special benefits."
      }
    ],
    eventDetails: [
      {
        question: "When and where will GENESIS 5 take place?",
        answer: "Genesis 5 is scheduled for February 14, 2026. The venue details will be announced closer to the event date."
      },
      {
        question: "What is the format of the competition?",
        answer: "Genesis 5 features multiple stages including online preliminary rounds, game jams, Pokemon-themed challenges, and an offline finale with surprise elements."
      },
      {
        question: "How long is the event?",
        answer: "The event spans multiple days with online phases followed by an intensive offline finale. Exact duration will be communicated in the detailed schedule."
      },
      {
        question: "Will there be workshops or training sessions?",
        answer: "Yes! We'll have workshops, masterclasses, and training sessions conducted by industry experts and Pokemon game developers."
      }
    ],
    prizes: [
      {
        question: "What is the total prize pool?",
        answer: "Genesis 5 features a massive prize pool exceeding $100,000 with cash prizes, gaming equipment, exclusive Pokemon merchandise, and more."
      },
      {
        question: "Are there prizes for all participants?",
        answer: "All participants receive participation certificates and goodies. Winners receive cash prizes, exclusive merchandise, and recognition."
      },
      {
        question: "What exclusive perks are available?",
        answer: "Elite participants get access to exclusive meetups, limited edition Genesis merchandise, Pokemon collectibles, and networking opportunities with game developers."
      },
      {
        question: "Will there be merchandise available?",
        answer: "Yes! Limited edition Genesis 5 merchandise including apparel, accessories, and Pokemon-themed collectibles will be available for purchase."
      }
    ],
    general: [
      {
        question: "What is Genesis 5?",
        answer: "Genesis 5 is the fifth edition of our premier Pokemon-themed gaming event, featuring competitive tournaments, game jams, community activities, and exclusive Pokemon experiences."
      },
      {
        question: "Is there an age restriction?",
        answer: "Genesis 5 is open to all ages. Participants under 18 may need parental consent. Age-specific categories may be available for certain competitions."
      },
      {
        question: "What Pokemon games will be featured?",
        answer: "We'll feature latest Pokemon video games, Trading Card Game tournaments, Pokemon GO events, and exclusive previews of upcoming releases."
      },
      {
        question: "Will food and accommodation be provided?",
        answer: "Details about food arrangements and accommodation partnerships will be shared closer to the event date."
      }
    ]
  };

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = allFaqs[activeCategory];

  return (
    <section className="min-h-screen py-12 sm:py-16 md:py-20 px-4 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="FAQs Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Gradient transitions */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-5"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-5"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8 sm:mb-12 italic"
            style={{ 
              fontFamily: '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif',
              letterSpacing: '0.05em',
              fontWeight: '900',
              color: '#facc15',
              textShadow: '3px 3px 0px #b45309, -1px -1px 0px rgba(250, 204, 21, 0.5), 2px 2px 10px rgba(0,0,0,0.8)',
              WebkitTextStroke: '2px #b45309',
            }}
          >
            FAQs
          </h2>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setOpenIndex(0);
                }}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base transition-all duration-300 ease-in-out transform hover:scale-105 ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50'
                    : 'bg-blue-950/50 text-blue-300 border border-blue-800/50 hover:bg-blue-900/50 hover:border-blue-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-4 sm:space-y-5">
          {filteredFaqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-transparent border-2 border-blue-800/60 rounded-xl overflow-hidden hover:border-blue-600/80 transition-all duration-300 ease-in-out backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/20 hover:scale-[1.02]"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
              }}
            >
              <style>{`
                @keyframes fadeInUp {
                  from {
                    opacity: 0;
                    transform: translateY(20px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
              `}</style>
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left hover:bg-blue-950/30 transition-all duration-300"
              >
                <span className="text-base sm:text-lg text-white pr-3 sm:pr-4">{faq.question}</span>
                <div className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <ChevronDown className="w-5 sm:w-6 h-5 sm:h-6 text-blue-400 flex-shrink-0" />
                </div>
              </button>
              
              <div 
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-2 border-t border-blue-800/40 bg-blue-950/20">
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}