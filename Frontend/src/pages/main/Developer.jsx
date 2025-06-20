import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const developerTypes = [
  {
    type: 'Frontend Developer',
    description: 'Expert in building interactive UI using modern frameworks like React.',
    icon: '🖌️',
    gradient: 'from-purple-600 via-blue-600 to-indigo-700'
  },
  {
    type: 'Backend Developer',
    description: 'Specialized in server-side logic, databases, and API development.',
    icon: '💻',
    gradient: 'from-indigo-600 via-purple-600 to-blue-700'
  },
  {
    type: 'Full Stack Developer',
    description: 'Versatile in handling both frontend and backend development.',
    icon: '⚙️',
    gradient: 'from-blue-600 via-indigo-600 to-purple-700'
  },
  {
    type: 'Native Developer',
    description: 'Focused on creating mobile applications for iOS and Android platforms.',
    icon: '📱',
    gradient: 'from-purple-700 via-indigo-600 to-blue-600'
  },
  {
    type: 'MERN Stack Developer',
    description: 'Specialist in the MERN stack (MongoDB, Express, React, Node).',
    icon: '🌐',
    gradient: 'from-indigo-700 via-blue-600 to-purple-600'
  },
  {
    type: 'Game Developer',
    description: 'Creates engaging video games using engines like Unity or Unreal.',
    icon: '🎮',
    gradient: 'from-blue-700 via-purple-600 to-indigo-600'
  },
  {
    type: 'AI/ML Developer',
    description: 'Builds and trains machine learning models for AI applications.',
    icon: '🤖',
    gradient: 'from-purple-600 via-indigo-700 to-blue-600'
  },
  {
    type: 'E-commerce Developer',
    description: 'Builds and maintains e-commerce platforms.',
    icon: '🛒',
    gradient: 'from-indigo-600 via-blue-700 to-purple-600'
  },
];

const Developer = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  const reDirect = (type) => {
    sessionStorage.setItem('developerType', type);
    navigate(`/hiring`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-300"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-700"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-ping opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent animate-pulse">
            Elite Developers
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Discover our handpicked team of exceptional developers ready to bring your vision to life
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 w-full max-w-7xl">
          {developerTypes.map((dev, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 sm:p-8 flex flex-col items-center transition-all duration-500 hover:scale-105 hover:border-purple-400/40 hover:shadow-2xl hover:shadow-purple-500/25 ${
                hoveredCard === index ? 'transform -translate-y-2' : ''
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-indigo-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative mb-6">
                <div className={`absolute inset-0 bg-gradient-to-br ${dev.gradient} rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500`}></div>
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full flex items-center justify-center border border-purple-400/30 group-hover:border-purple-400/60 transition-all duration-500">
                  <span className="text-3xl sm:text-4xl filter drop-shadow-lg">{dev.icon}</span>
                </div>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-indigo-300 transition-all duration-500">
                {dev.type}
              </h2>
              
              <p className="text-gray-400 text-center mb-8 flex-1 leading-relaxed text-sm sm:text-base group-hover:text-gray-300 transition-colors duration-500">
                {dev.description}
              </p>

              <button
                onClick={() => reDirect(dev.type)}
                className={`relative w-full py-3 px-6 bg-gradient-to-r ${dev.gradient} text-white font-semibold rounded-xl overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/25 group-hover:scale-105 active:scale-95`}
              >
                <span className="relative z-10">Hire Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>

              <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Developer;