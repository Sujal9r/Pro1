import { useState, useEffect, useRef } from "react";

const Pro3 = () => {
  const targetNumbers = {
    revenue: 245,
    audience: 130,
    brands: 50,
    awards: 24,
  };

  const duration = 2000;
  const [counts, setCounts] = useState({
    revenue: 0,
    audience: 0,
    brands: 0,
    awards: 0,
  });

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setCounts({
            revenue: 0,
            audience: 0,
            brands: 0,
            awards: 0,
          });
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.3 }
    );
  
    observerRef.current = observer;
  
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
  
  useEffect(() => {
    if (isVisible) {
      Object.keys(targetNumbers).forEach((key) => {
        const target = targetNumbers[key];
        let start = 0;
        const step = target / (duration / 30);
  
        const interval = setInterval(() => {
          start += step;
          setCounts((prev) => ({
            ...prev,
            [key]: Math.min(Math.floor(start), target),
          }));
          if (start >= target) clearInterval(interval);
        }, 30);
      });
    }
  }, [isVisible]);

  const statsData = [
    {
      key: 'revenue',
      value: counts.revenue,
      suffix: '%',
      label: 'More revenues for the brand',
      icon: '📈'
    },
    {
      key: 'audience',
      value: counts.audience,
      suffix: 'K+',
      label: 'Audiences reached',
      icon: '👥'
    },
    {
      key: 'brands',
      value: counts.brands,
      suffix: '+',
      label: 'Brands trust us',
      icon: '🏢'
    },
    {
      key: 'awards',
      value: counts.awards,
      suffix: '+',
      label: 'Worldwide Awards',
      icon: '🏆'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 25%, #0f172a 50%, #4c1d95 75%, #581c87 100%)'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs - Smaller on mobile */}
        <div 
          className="absolute w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full opacity-10 sm:opacity-15 md:opacity-20 animate-pulse"
          style={{
            background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)',
            top: '5%',
            left: '5%',
            animation: 'float 6s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full opacity-8 sm:opacity-10 md:opacity-15 animate-pulse"
          style={{
            background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)',
            top: '50%',
            right: '5%',
            animation: 'float 8s ease-in-out infinite reverse'
          }}
        />
        <div 
          className="absolute w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full opacity-5 sm:opacity-8 md:opacity-10"
          style={{
            background: 'radial-gradient(circle, #a855f7 0%, transparent 70%)',
            bottom: '15%',
            left: '60%',
            animation: 'float 7s ease-in-out infinite'
          }}
        />

        {/* Grid Pattern - Responsive size */}
        <div 
          className="absolute inset-0 opacity-3 sm:opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle, #8b5cf6 1px, transparent 1px)',
            backgroundSize: '20px 20px sm:30px sm:30px'
          }}
        />

        {/* Animated Lines */}
        <div 
          className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-30 sm:opacity-50"
          style={{ animation: 'shimmer 3s ease-in-out infinite' }}
        />
        <div 
          className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent opacity-30 sm:opacity-50"
          style={{ animation: 'shimmer 3s ease-in-out infinite 1.5s' }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Mobile-First Layout */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
          
          {/* Content Section - Mobile First */}
          <div className="text-center lg:text-left order-2 lg:order-1 lg:pl-8 w-full">
            <div className="relative">
              {/* Decorative Element - Hidden on mobile, shown on larger screens */}
              <div 
                className="hidden sm:block absolute -top-6 lg:-top-8 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 lg:-left-4 w-16 sm:w-20 h-1 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full"
                style={{ animation: 'expandWidth 1s ease-out 0.5s both' }}
              />
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6 md:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-indigo-200 to-purple-200">
                Made In India. <br/>
                <span className="bg-gradient-to-r from-indigo-200 to-purple-200 bg-clip-text text-transparent">
                  Made For The World.
                </span>
              </h1>
            </div>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-purple-200/90 mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-md mx-auto lg:mx-0 lg:max-w-lg px-2 sm:px-0">
              We are committed to working with you collaboratively to understand your goals and create a strategy that will achieve them.
            </p>
          </div>

          {/* Stats Grid - Responsive Layout */}
          <div className="order-1 lg:order-2 w-full">
            {/* Mobile: Single Column, Tablet+: 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 max-w-sm sm:max-w-none mx-auto">
              {statsData.map((stat, index) => (
                <div 
                  key={stat.key} 
                  className="relative p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 group"
                  style={{
                    background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(99, 102, 241, 0.05) 100%)',
                    animation: `slideUp 0.8s ease-out ${index * 0.15}s both`
                  }}
                >
                  {/* Card Glow Effect */}
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Mobile Layout: Horizontal, Desktop: Vertical */}
                  <div className="flex sm:block items-center sm:items-start gap-3 sm:gap-0">
                    {/* Icon */}
                    <div className="text-xl sm:text-2xl mb-0 sm:mb-3 transform group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      {stat.icon}
                    </div>
                    
                    <div className="flex-1 sm:flex-none">
                      {/* Number */}
                      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-indigo-200 mb-1 sm:mb-2">
                        {stat.value}{stat.suffix}
                      </div>
                      
                      {/* Label */}
                      <div className="text-xs sm:text-sm md:text-base text-purple-200/80 leading-relaxed">
                        {stat.label}
                      </div>
                    </div>
                  </div>

                  {/* Shine Effect */}
                  <div 
                    className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                    style={{
                      background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
                      animation: 'shine 2s ease-in-out infinite'
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles with Mobile Optimizations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(90deg); }
        }
        
        @media (min-width: 640px) {
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @media (min-width: 640px) {
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        }
        
        @keyframes shine {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }
        
        @keyframes expandWidth {
          from { width: 0; }
          to { width: 4rem; }
        }
        
        @media (min-width: 640px) {
          @keyframes expandWidth {
            from { width: 0; }
            to { width: 5rem; }
          }
        }
      `}</style>
    </section>
  );
};

export default Pro3;