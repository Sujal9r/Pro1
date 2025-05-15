import React, { useState, useEffect } from 'react';
import Footer from '../Footer/Footer';
import { Navbar } from '../Navbar/Navbar';
import { ComButton } from '../Common/ComButton';

const CustomIcon = ({ type }) => {
  switch (type) {
    case 'cpu':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <path d="M4 9h2M4 15h2M9 4v2M15 4v2M9 18v2M15 18v2M18 9h2M18 15h2" />
        </svg>
      );
    case 'zap':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      );
    case 'shield':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case 'smartphone':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <path d="M12 18h.01" />
        </svg>
      );
    case 'globe':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
    case 'chevron-right':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
          <path d="M9 18l6-6-6-6" />
        </svg>
      );
    case 'arrow-right':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 ml-2">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      );
    case 'play':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 ml-2">
          <polygon points="5 3 19 12 5 21" />
        </svg>
      );
    case 'x':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      );
    default:
      return null;
  }
};

const VideoModal = ({ isOpen, onClose, videoId }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-slate-900 rounded-xl w-full max-w-4xl p-4 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <CustomIcon type="x" />
        </button>
        
        <div className="aspect-video w-full">
          <iframe
            className="w-full h-full rounded-lg"
            src={`https://youtu.be/XO8wew38VM8`}
            title="S9R Technology Demo"
            allowFullScreen
          ></iframe>
        </div>
        
        <div className="mt-4 text-center">
          <h3 className="text-xl font-bold text-blue-400">S9R Technology</h3>
          <p className="text-gray-400 mt-2">Experience the future of computing with our revolutionary neural-quantum platform.</p>
        </div>
      </div>
    </div>
  );
};

export default function TechRevolution() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState([false, false, false]);
  const [animatedBoxes, setAnimatedBoxes] = useState([]);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  
  const demoVideoId = "XO8wew38VM8";

  useEffect(() => {
    const boxes = [];
    for (let i = 0; i < 12; i++) {
      const size = Math.floor(Math.random() * 100) + 50;
      boxes.push({
        id: i,
        size,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        duration: Math.floor(Math.random() * 30) + 15,
        delay: Math.floor(Math.random() * 5),
      });
    }
    setAnimatedBoxes(boxes);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          setIsVisible(prev => {
            const updated = [...prev];
            updated[i] = true;
            return updated;
          });
        }, i * 400);
      }
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % features.length);
    }, 5000);
    
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, []);

  const features = [
    {
      title: "Neural Quantum Processing",
      icon: <CustomIcon type="cpu" />,
      color: "text-blue-500",
      description: "Experience 1000x faster computational speeds with our proprietary quantum-neural hybrid architecture, capable of solving previously impossible problems."
    },
    {
      title: "Instant Transmission Protocol",
      icon: <CustomIcon type="zap" />,
      color: "text-yellow-500",
      description: "Our revolutionary ITP technology enables zero-latency data transfer across any distance, fundamentally changing how networks operate."
    },
    {
      title: "Autonomous Defense Systems",
      icon: <CustomIcon type="shield" />,
      color: "text-green-500",
      description: "Advanced self-repairing security infrastructure that adapts in real-time to threats, maintaining perfect operational integrity."
    },
    {
      title: "Dimensional Interface Engine",
      icon: <CustomIcon type="smartphone" />,
      color: "text-pink-500",
      description: "Interact with information through our revolutionary spatial computing interface that responds to natural gestures and neural inputs."
    },
    {
      title: "Planetary Network Grid",
      icon: <CustomIcon type="globe" />,
      color: "text-purple-500",
      description: "Access the NeoCore ecosystem from anywhere on Earth through our proprietary satellite and ground-station mesh architecture."
    }
  ];

  const testimonials = [
    {
      name: "Dr. Elena Kovalova",
      role: "Director of Research, Quantum Futures",
      quote: "After decades in the field, I can confidently say that S9R's technology is at least 15 years ahead of what I thought possible."
    },
    {
      name: "Hiroshi Takahashi",
      role: "CTO, Global Dynamics",
      quote: "The implementation of S9R has reduced our computational costs by 87% while increasing throughput exponentially. It's transformed our business model entirely."
    },
    {
      name: "Dr. Maria Rodriguez",
      role: "Lead Architect, Nexus Institute",
      quote: "The dimensional interface has revolutionized how we approach complex data visualization. What used to take teams of experts can now be intuitively understood by anyone."
    }
  ];

  const stats = [
    { value: "10,000x", label: "Computational Advantage" },
    { value: "0.001ms", label: "System Latency" },
    { value: "100%", label: "Security Rating" },
    { value: "3,721", label: "Enterprise Deployments" }
  ];

const handleScheduleCall = () => {
  window.open('https://calendly.com/sujalsukoimk5','_blank')
};

  return (
    <div>
      <Navbar/>
      <div className="bg-slate-900 text-white overflow-hidden">
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          {animatedBoxes.map((box) => (
            <div
              key={box.id}
              className="absolute rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/5"
              style={{
                width: box.size,
                height: box.size,
                top: box.top,
                left: box.left,
                animation: `float ${box.duration}s ease-in-out ${box.delay}s infinite alternate`
              }}
            />
          ))}
          <style jsx>{`
            @keyframes float {
              0% { transform: translate(0, 0) rotate(0deg); opacity: 0.05; }
              100% { transform: translate(100px, -100px) rotate(45deg); opacity: 0.2; }
            }
          `}</style>
        </div>

        <div className={`relative py-[100px] md:min-h-screen flex items-center transition-all duration-1000 ${isVisible[0] ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/40 via-slate-900/60 to-purple-900/30"></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 z-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 mb-12 md:mb-0 text-center md:text-left">
                <div className="inline-block px-3 py-1 rounded-full bg-blue-900/50 text-blue-300 text-xs font-medium mb-4">NEXT GENERATION TECHNOLOGY</div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 text-transparent bg-clip-text">S9R</span> 
                  <span className="text-white"> Technology</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
                  The world's first neural-quantum computing platform, delivering unprecedented computational capabilities with intuitive dimensional interfaces.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <ComButton customStyle={" px-10 py-4  bg-gradient-to-br from-purple-900"} title={"Schedule a call"}  onClick={handleScheduleCall}>
                    Schedule call
                    <CustomIcon type="arrow-right" />
                  </ComButton >
                  <button 
                    className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-gray-300 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium flex items-center transition-all"
                    onClick={() => setIsVideoModalOpen(true)}
                  >
                    Experience Demo
                    <CustomIcon type="play" />
                  </button>
                </div>
              </div>
              
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-cyan-600/20 rounded-full animate-pulse"></div>
                  <div className="absolute inset-4 border border-blue-500/30 rounded-full animate-spin" style={{ animationDuration: '15s' }}></div>
                  <div className="absolute inset-8 border border-cyan-500/40 rounded-full animate-spin" style={{ animationDuration: '10s', animationDirection: 'reverse' }}></div>
                  <div className="absolute inset-16 border border-teal-500/50 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
                  <div className="absolute inset-24 bg-blue-600/80 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/20">
                    <span className="font-bold text-2xl sm:text-3xl tracking-wider">S9R</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`py-16 md:py-24 bg-slate-800/50 transition-all duration-1000 ${isVisible[1] ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-block px-3 py-1 rounded-full bg-blue-900/50 text-blue-300 text-xs font-medium mb-4">CORE CAPABILITIES</div>
              <h2 className="h-[8.5vh] text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text">Breakthrough Technologies</h2>
              <p className="text-gray-400 max-w-2xl mx-auto px-4">
                S9R integrates multiple revolutionary advances into a cohesive ecosystem that transforms digital operations.
              </p>
            </div>
            
            <div className="flex overflow-x-auto pb-4 md:pb-0 md:grid md:grid-cols-5 gap-4 md:gap-6 no-scrollbar">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`p-4 rounded-xl cursor-pointer transition-all duration-300 flex-shrink-0 w-40 sm:w-48 md:w-auto ${
                    activeFeature === index 
                      ? 'bg-slate-700/70 shadow-lg transform scale-105' 
                      : 'bg-slate-800/50 hover:bg-slate-700/30'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className={`rounded-lg p-3 mb-3 ${
                    activeFeature === index 
                      ? feature.color.replace('text-', 'bg-').replace('500', '900/50') 
                      : 'bg-slate-700'
                  }`}>
                    <div className={feature.color}>{feature.icon}</div>
                  </div>
                  <h3 className={`font-medium text-sm sm:text-base lg:text-lg ${activeFeature === index ? 'text-white' : 'text-gray-300'}`}>
                    {feature.title}
                  </h3>
                </div>
              ))}
            </div>
            
            <div className="mt-8 md:mt-12 bg-slate-800 rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl shadow-blue-900/10">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="md:w-1/3">
                  <div className={`rounded-lg p-4 mb-4 ${features[activeFeature].color.replace('text-', 'bg-').replace('500', '900/50')}`}>
                    <div className={features[activeFeature].color}>{features[activeFeature].icon}</div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3">{features[activeFeature].title}</h3>
                  <p className="text-gray-300 mb-6">
                    {features[activeFeature].description}
                  </p>
                  <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium">
                    Technical specifications
                    <CustomIcon type="chevron-right" />
                  </button>
                </div>
                
                <div className="md:w-2/3 bg-slate-900 rounded-xl p-4 sm:p-6 h-48 sm:h-64 relative overflow-hidden">
                  <div className="absolute inset-0">
                    {activeFeature === 0 && (
                      <div className="h-full w-full flex items-center justify-center">
                        <div className="grid grid-cols-6 grid-rows-6 gap-1 w-40 h-40 sm:w-64 sm:h-64">
                          {Array(36).fill(0).map((_, i) => (
                            <div key={i} className="bg-blue-500/30 rounded-sm animate-pulse" style={{ animationDelay: `${i * 0.05}s` }}></div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {activeFeature === 1 && (
                      <div className="h-full flex items-center justify-center">
                        <div className="relative">
                          <div className="absolute w-40 sm:w-64 h-1 bg-yellow-500/70"></div>
                          <div className="absolute h-40 sm:h-64 w-1 bg-yellow-500/70"></div>
                          <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-yellow-500 animate-ping"></div>
                        </div>
                      </div>
                    )}
                    
                    {activeFeature === 2 && (
                      <div className="h-full flex items-center justify-center">
                        <div className="relative">
                          <div className="w-32 h-32 sm:w-48 sm:h-48 border-4 border-green-500/40 rounded-full animate-pulse"></div>
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-32 sm:h-32 border-4 border-green-500/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-16 sm:h-16 bg-green-500/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                        </div>
                      </div>
                    )}
                    
                    {activeFeature === 3 && (
                      <div className="h-full flex items-center justify-center">
                        <div className="grid grid-cols-3 grid-rows-3 gap-2 sm:gap-3 w-40 h-40 sm:w-64 sm:h-64 rotate-12">
                          {Array(9).fill(0).map((_, i) => (
                            <div key={i} className="bg-pink-500/20 rounded-lg shadow-lg flex items-center justify-center group hover:bg-pink-500/40 transition-all">
                              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-pink-500/70 rounded-sm group-hover:scale-150 transition-all"></div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {activeFeature === 4 && (
                      <div className="h-full flex items-center justify-center">
                        <div className="relative">
                          <div className="w-32 h-32 sm:w-48 sm:h-48 rounded-full border border-purple-500/40 animate-spin" style={{ animationDuration: '20s' }}></div>
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-32 sm:h-32 rounded-full border border-purple-500/60 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-purple-500 rounded-full"></div>
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-purple-500 rounded-full"></div>
                          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-2 h-2 bg-purple-500 rounded-full"></div>
                          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-2 h-2 bg-purple-500 rounded-full"></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`py-16 md:py-24 transition-all duration-1000 ${isVisible[2] ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-24">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-4 sm:p-6 text-center shadow-lg">
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text mb-2">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-block px-3 py-1 rounded-full bg-blue-900/50 text-blue-300 text-xs font-medium mb-4">INDUSTRY IMPACT</div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Expert Validation</h2>
              <p className="text-gray-400 max-w-2xl mx-auto px-4">
                Leading authorities across scientific and industrial sectors recognize S9R's revolutionary potential.
              </p>
            </div>
            
            <div className="flex overflow-x-auto pb-4 md:pb-0 md:grid md:grid-cols-3 gap-4 md:gap-8 no-scrollbar">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-xl p-4 sm:p-6 relative shadow-lg border border-slate-700/50 flex-shrink-0 w-80 sm:w-96 md:w-auto">
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl">"</span>
                  </div>
                  <p className="text-gray-300 mb-6 italic leading-relaxed">{testimonial.quote}</p>
                  <div className="border-t border-slate-700 pt-4">
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-blue-400">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 md:mt-24">
              <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-2xl p-1">
                <div className="bg-slate-900 rounded-xl px-4 sm:px-8 py-8 sm:py-12 text-center">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 text-transparent bg-clip-text">
                    Join the Quantum Revolution
                  </h3>
                  <p className="text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto">
                    Limited access is now available for strategic partners and innovative organizations ready to transform their technological capabilities.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium transition-all">
                      Apply for Partnership
                    </button>
                    <button className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-gray-300 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium transition-all">
                      Request Technical Briefing
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <VideoModal 
          isOpen={isVideoModalOpen} 
          onClose={() => setIsVideoModalOpen(false)} 
          videoId={demoVideoId} 
        />

        <Footer/>
      </div>
    </div>
  );
}