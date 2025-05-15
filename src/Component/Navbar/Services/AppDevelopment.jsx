import { useState, useEffect, useRef } from "react";
import { Navbar } from "../Navbar";
import Footer from "../../Footer/Footer";

export default function AppDevelopment() {
  // eslint-disable-next-line
  const [activeService, setActiveService] = useState(null);
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [animatePhone, setAnimatePhone] = useState(false);
  const phoneRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      setScrollProgress(scrollPercent);

      const sections = document.querySelectorAll(".animate-on-scroll");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isInViewport = rect.top <= window.innerHeight * 0.85;
        if (isInViewport) {
          setIsVisible((prev) => ({ ...prev, [section.id]: true }));
        }
      });

      if (phoneRef.current) {
        const phoneRect = phoneRef.current.getBoundingClientRect();
        const phoneInView = phoneRect.top <= window.innerHeight * 0.7;
        setAnimatePhone(phoneInView);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      id: 1,
      title: "Native App Development",
      description: "High-performance iOS and Android applications with native code",
      icon: "📱",
      details: "Our native app development leverages platform-specific technologies for optimal performance, security, and user experience. We build with Swift for iOS and Kotlin for Android to create powerful, responsive applications.",
      bgColor: "from-indigo-600/30 to-blue-600/30",
      borderColor: "indigo-500/40"
    },
    {
      id: 2,
      title: "Cross-Platform Solutions",
      description: "Build once, deploy everywhere with React Native & Flutter",
      icon: "🔄",
      details: "Maximize efficiency with cross-platform development that targets multiple platforms from a single codebase. Our experts in React Native and Flutter create beautiful, consistent apps that feel native on every device.",
      bgColor: "from-purple-600/30 to-indigo-600/30",
      borderColor: "purple-500/40"
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that users love",
      icon: "✨",
      details: "Our design team crafts visually stunning and highly functional interfaces with meticulous attention to user behavior, accessibility, and modern design principles for maximum engagement and satisfaction.",
      bgColor: "from-blue-600/30 to-cyan-600/30",
      borderColor: "blue-500/40"
    },
    {
      id: 4,
      title: "Backend & API Development",
      description: "Robust, scalable server solutions for your apps",
      icon: "⚙️",
      details: "We build powerful backend systems and APIs that handle complex business logic, data processing, and third-party integrations to support your mobile applications at any scale.",
      bgColor: "from-indigo-600/30 to-violet-600/30",
      borderColor: "violet-500/40"
    },
    {
      id: 5,
      title: "App Maintenance & Updates",
      description: "Keep your app cutting-edge with ongoing support",
      icon: "🔧",
      details: "Our continuous maintenance services ensure your app remains secure, stable, and compatible with the latest OS versions and devices through regular updates, performance optimization, and feature enhancements.",
      bgColor: "from-sky-600/30 to-blue-600/30",
      borderColor: "sky-500/40"
    },
    {
      id: 6,
      title: "App Store Optimization",
      description: "Maximize visibility and downloads in app stores",
      icon: "📊",
      details: "Our ASO strategies increase your app's visibility and conversion rates in the App Store and Google Play through keyword optimization, compelling visuals, and analytics-driven improvements.",
      bgColor: "from-cyan-600/30 to-teal-600/30",
      borderColor: "teal-500/40"
    },
  ];

  const processSteps = [
    {
      title: "Discovery & Strategy",
      description: "We analyze your business needs, target audience, and market landscape to develop a comprehensive app strategy.",
      icon: "🔍",
      color: "blue"
    },
    {
      title: "UX/UI Design",
      description: "Our designers create intuitive user flows and visually stunning interfaces tailored to your brand.",
      icon: "🎨",
      color: "indigo"
    },
    {
      title: "Development",
      description: "Our engineers build your app with clean, efficient code and the latest technologies for optimal performance.",
      icon: "💻",
      color: "violet"
    },
    {
      title: "Testing & QA",
      description: "Rigorous testing across devices and use cases ensures your app is stable, secure, and ready to launch.",
      icon: "🧪",
      color: "purple"
    },
    {
      title: "Launch & Deployment",
      description: "We handle all aspects of app store submission and deployment to get your app live quickly.",
      icon: "🚀",
      color: "indigo"
    },
    {
      title: "Post-Launch Support",
      description: "Ongoing maintenance, analytics, and updates keep your app performing at its best.",
      icon: "📱",
      color: "blue"
    }
  ];
// eslint-disable-next-line
  const [pulse, setPulse] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setPulse((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const handleTiltMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 20, y: y * -20 });
  };

  const resetTilt = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-violet-900 text-white relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full mix-blend-overlay opacity-20"
            style={{
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              background: `radial-gradient(circle, ${
                ["rgba(99,102,241,0.8)", "rgba(139,92,246,0.8)", "rgba(59,130,246,0.8)"][
                  Math.floor(Math.random() * 3)
                ]
              } 0%, rgba(30,27,75,0) 70%)`,
              transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)`,
              transition: "transform 0.3s ease-out",
            }}
          ></div>
        ))}
      </div>

      <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 z-50" style={{ width: `${scrollProgress * 100}%` }}></div>

      <Navbar />

      <section className="pt-40 pb-32 px-4 max-w-6xl mx-auto relative">
        <div className="absolute top-40 right-10 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-indigo-500/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-60 left-40 w-64 h-64 bg-violet-500/20 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 z-20">
            <div className="relative mb-6">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg blur opacity-30 animate-pulse"></div>
              <div className="relative px-4 py-2 bg-blue-900/50 rounded border border-blue-500/20 backdrop-blur-sm inline-block">
                <span className="text-blue-200 font-medium">The Future of Mobile</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
              <span className="bg-gradient-to-br from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">Revolutionary</span>
              <br />
              <span className="bg-gradient-to-r from-indigo-300 to-blue-200 bg-clip-text text-transparent">App Development</span>
            </h1>
            <p className="text-xl text-blue-200 mb-10 max-w-lg">
              Transforming ideas into exceptional mobile experiences with cutting-edge technology and stunning design.
            </p>
          </div>

          <div
            ref={phoneRef}
            className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center"
          >
            <div
              className={`relative transition-all duration-1000 ease-out transform ${
                animatePhone ? "translate-y-0 opacity-100 rotate-0" : "translate-y-20 opacity-0 rotate-12"
              }`}
              style={{
                transform: `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
                transition: "transform 0.5s ease-out",
              }}
              onMouseMove={handleTiltMove}
              onMouseLeave={resetTilt}
            >
              <div className="relative w-64 h-128 bg-gray-900 rounded-3xl p-3 shadow-2xl border border-gray-800">
                <div className="bg-gradient-to-br from-blue-900 to-indigo-900 h-full w-full rounded-2xl overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 h-16 bg-indigo-800/30 backdrop-blur-md p-3 flex items-center justify-between">
                    <div className="w-24 h-4 bg-white/20 rounded-full"></div>
                    <div className="flex space-x-2">
                      <div className="w-4 h-4 rounded-full bg-blue-400/70"></div>
                      <div className="w-4 h-4 rounded-full bg-indigo-400/70"></div>
                    </div>
                  </div>

                  <div className="pt-16 px-4">
                    <div className="h-32 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl mb-4 flex items-center justify-center backdrop-blur-sm border border-white/10">
                      <div className="w-12 h-12 rounded-full bg-blue-500/40 flex items-center justify-center">
                        <span className="text-2xl">📱</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="h-6 bg-white/10 rounded-md w-3/4"></div>
                      <div className="h-4 bg-white/10 rounded-md w-full"></div>
                      <div className="h-4 bg-white/10 rounded-md w-5/6"></div>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-3">
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} className="h-24 rounded-lg bg-indigo-600/20 border border-indigo-500/20 p-3 flex flex-col justify-between">
                          <div className="w-8 h-8 rounded-full bg-blue-500/30 flex items-center justify-center">
                            <div className="w-4 h-4 bg-blue-400/80 rounded-sm"></div>
                          </div>
                          <div className="h-3 bg-white/10 rounded-md w-full"></div>
                        </div>
                      ))}
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-indigo-800/30 backdrop-blur-md flex items-center justify-around px-6">
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                          <div className={`w-5 h-5 ${i === 2 ? 'bg-blue-400' : 'bg-white/40'} rounded-md`}></div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="absolute top-24 right-4 w-8 h-8 bg-blue-500/40 rounded-full animate-ping opacity-70"></div>
                  <div className="absolute bottom-40 left-4 w-6 h-6 bg-purple-500/40 rounded-full animate-pulse"></div>
                </div>
              </div>

              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl opacity-20 blur-xl"></div>

              <div
                className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-blue-400/10 to-transparent rounded-t-3xl"
                style={{
                  transform: `translateY(5px) rotateX(180deg)`,
                  opacity: 0.4,
                  filter: 'blur(2px)'
                }}
              ></div>

              <div className="absolute -bottom-8 -left-4 -right-4 h-12 bg-blue-700/20 blur-xl rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-wrap justify-center gap-6">
          {["React Native", "Swift", "Kotlin", "Flutter", "Firebase"].map((tech, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-indigo-800/40 to-blue-800/40 backdrop-blur-sm px-6 py-3 rounded-full border border-indigo-500/30 flex items-center gap-2"
              style={{
                animation: `float ${3 + i * 0.5}s ease-in-out infinite alternate`
              }}
            >
              <span className="w-3 h-3 rounded-full bg-blue-400"></span>
              <span className="text-blue-200 font-medium">{tech}</span>
            </div>
          ))}
        </div>
      </div>

      <section
        id="services-grid"
        className={`py-20 px-4 max-w-6xl mx-auto animate-on-scroll ${
          isVisible["services-grid"]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        } transition-all duration-1000`}
      >
        <h2 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
          App Development Services
        </h2>
        <p className="text-blue-200/80 text-center max-w-2xl mx-auto mb-16">
          Comprehensive mobile solutions for businesses of all sizes, from startups to enterprises.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative overflow-hidden group transition-all duration-500"
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              <div className={`relative bg-gradient-to-br ${service.bgColor} backdrop-blur-lg p-6 rounded-xl border border-${service.borderColor} transition-all duration-300 h-full group-hover:translate-y-[-4px] group-hover:shadow-lg group-hover:shadow-indigo-500/20`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full blur-xl transform translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="flex flex-col h-full">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-blue-100">
                    {service.title}
                  </h3>
                  <p className="text-blue-200/80 mb-6">{service.description}</p>

                  <div className="mt-auto">
                    <div className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-4 transition-all duration-500 opacity-0 group-hover:opacity-100">
                      <p className="text-indigo-200/80">{service.details}</p>
                    </div>
                    <button className="mt-4 text-sm font-medium text-blue-300 hover:text-white flex items-center transition-all duration-300">
                      Learn more
                      <span className="transform group-hover:translate-x-2 transition-transform duration-300 ml-2">
                        →
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="app-showcase"
        className={`py-20 px-4 max-w-6xl mx-auto animate-on-scroll ${
          isVisible["app-showcase"]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        } transition-all duration-1000`}
      >
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="mb-6 inline-block">
              <div className="px-4 py-2 bg-blue-900/30 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium">
                App Portfolio
              </div>
            </div>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
              Beautiful Apps That <br />Deliver Results
            </h2>

            <div className="space-y-8">
              {[
                {
                  title: "Intuitive User Experience",
                  description: "We design apps with user-centered navigation and interactions that feel natural and effortless.",
                  icon: "✨"
                },
                {
                  title: "Pixel-Perfect Design",
                  description: "Every visual element is crafted with precision to create beautiful, consistent interfaces.",
                  icon: "🎨"
                },
                {
                  title: "Performance Optimization",
                  description: "Our apps are engineered for speed, responsiveness, and efficient resource usage.",
                  icon: "⚡"
                }
              ].map((feature, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-500/20 flex items-center justify-center backdrop-blur-sm">
                    <span className="text-xl">{feature.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-200 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-blue-200/70">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <div
              className="relative perspective"
              onMouseMove={handleTiltMove}
              onMouseLeave={resetTilt}
            >
              <div
                className="relative w-72 h-144 transform transition-all duration-700 preserve-3d"
                style={{
                  transform: `rotateY(${tilt.x * 0.5}deg) rotateX(${tilt.y * 0.5}deg)`
                }}
              >
                <div className="absolute inset-0 bg-gray-900 rounded-3xl shadow-2xl border border-gray-800 overflow-hidden backface-hidden">
                  <div className="h-full w-full bg-gradient-to-br from-blue-800 to-indigo-900 p-4">
                    <div className="h-8 flex justify-between items-center mb-6">
                      <div className="w-24 h-3 bg-white/20 rounded-full"></div>
                      <div className="flex space-x-1">
                        <div className="w-3 h-3 rounded-full bg-blue-400/70"></div>
                        <div className="w-3 h-3 rounded-full bg-white/20"></div>
                        <div className="w-3 h-3 rounded-full bg-white/20"></div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="h-40 rounded-lg bg-gradient-to-br from-blue-600/30 to-indigo-600/30 border border-blue-500/20 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-blue-500/30 flex items-center justify-center">
                          <div className="w-8 h-8 bg-blue-400 rounded-md"></div>
                        </div>
                      </div>

                      <div className="h-6 bg-white/10 rounded-md w-1/2 mx-auto"></div>
                      <div className="h-3 bg-white/10 rounded-md w-3/4 mx-auto"></div>

                      <div className="grid grid-cols-2 gap-3 mt-6">
                        {[1, 2, 3, 4].map(i => (
                          <div key={i} className="h-20 rounded-lg bg-indigo-600/20 border border-indigo-500/20 p-3 flex flex-col justify-between">
                            <div className="w-6 h-6 rounded-full bg-blue-500/30 flex items-center justify-center">
                              <div className="w-3 h-3 bg-blue-400 rounded-sm"></div>
                            </div>
                            <div className="h-2 bg-white/10 rounded-md w-full"></div>
                          </div>
                        ))}
                      </div>

                      <div className="h-12 mt-4 rounded-lg bg-blue-600/20 border border-blue-500/20 flex items-center justify-center">
                        <div className="h-3 bg-white/20 rounded-md w-1/3"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="absolute bg-gray-900 rounded-3xl shadow-xl border border-gray-800 overflow-hidden"
                  style={{
                    width: "90%",
                    height: "90%",
                    top: "15%",
                    left: "-40%",
                    transform: "translateZ(-100px) rotateY(-15deg)",
                    opacity: 0.9
                  }}
                >
                  <div className="h-full w-full bg-gradient-to-br from-indigo-800 to-violet-900 p-4">
                    <div className="h-8 flex justify-between items-center mb-6">
                      <div className="w-24 h-3 bg-white/20 rounded-full"></div>
                      <div className="flex space-x-1">
                        <div className="w-3 h-3 rounded-full bg-white/20"></div>
                        <div className="w-3 h-3 rounded-full bg-indigo-400/70"></div>
                        <div className="w-3 h-3 rounded-full bg-white/20"></div>
                      </div>
                    </div>

                    <div className="h-4 bg-white/10 rounded-md w-1/2 mb-6"></div>

                    <div className="space-y-3">
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} className="h-14 rounded-lg bg-indigo-600/20 border border-indigo-500/20 p-3 flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-indigo-500/30 flex items-center justify-center">
                            <div className="w-4 h-4 bg-indigo-400 rounded-sm"></div>
                          </div>
                          <div className="flex-1">
                            <div className="h-2 bg-white/10 rounded-md w-full mb-2"></div>
                            <div className="h-2 bg-white/10 rounded-md w-2/3"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div
                  className="absolute bg-gray-900 rounded-3xl shadow-xl border border-gray-800 overflow-hidden"
                  style={{
                    width: "90%",
                    height: "90%",
                    top: "10%", 
                    left: "40%", 
                    transform: "translateZ(-150px) rotateY(15deg)", 
                    opacity: 0.8
                  }}
                >
                  <div className="h-full w-full bg-gradient-to-br from-violet-800 to-purple-900 p-4">
                    <div className="h-8 flex justify-between items-center mb-6">
                      <div className="w-24 h-3 bg-white/20 rounded-full"></div>
                      <div className="flex space-x-1">
                        <div className="w-3 h-3 rounded-full bg-white/20"></div>
                        <div className="w-3 h-3 rounded-full bg-white/20"></div>
                        <div className="w-3 h-3 rounded-full bg-purple-400/70"></div>
                      </div>
                    </div>

                    <div className="h-4 bg-white/10 rounded-md w-2/3 mb-6"></div>

                    <div className="space-y-3">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="h-16 rounded-lg bg-purple-600/20 border border-purple-500/20 p-3 flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-purple-500/30 flex items-center justify-center">
                            <div className="w-5 h-5 bg-purple-400 rounded-sm"></div>
                          </div>
                          <div className="flex-1">
                            <div className="h-3 bg-white/10 rounded-md w-full mb-2"></div>
                            <div className="h-3 bg-white/10 rounded-md w-1/2"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="development-process"
        className={`py-20 px-4 max-w-6xl mx-auto animate-on-scroll ${
          isVisible["development-process"]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        } transition-all duration-1000`}
      >
        <h2 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent">
          Our Development Process
        </h2>
        <p className="text-blue-200/80 text-center max-w-2xl mx-auto mb-16">
          A streamlined, agile process designed to deliver your app efficiently and effectively.
        </p>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500/50 to-violet-500/50 rounded-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                } relative`}
              >
                <div className={`absolute hidden md:flex left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-${step.color}-500 to-${step.color}-700 border-2 border-white/50 items-center justify-center z-10`}>
                  <span className="text-xl">{step.icon}</span>
                </div>

                <div className={`w-full md:w-[calc(50%-30px)] p-6 rounded-xl shadow-lg bg-gradient-to-br from-blue-900/40 to-indigo-900/40 border border-blue-700/30 backdrop-blur-sm group hover:border-blue-500/50 transition-all duration-300
                  ${index % 2 === 0 ? "md:text-right md:pr-10" : "md:text-left md:pl-10"}
                `}>
                  <h3 className="text-2xl font-semibold text-blue-100 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-blue-200/80">{step.description}</p>
                  <div className={`absolute hidden md:block w-0 h-0 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent 
                    ${index % 2 === 0 ? "left-full border-l-[15px] border-l-blue-700/30" : "right-full border-r-[15px] border-r-blue-700/30"}
                    top-1/2 transform -translate-y-1/2
                  `}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 max-w-4xl mx-auto text-center animate-on-scroll" id="cta">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-300 to-purple-400 bg-clip-text text-transparent">
          Ready to Build Your Next Great App?
        </h2>
        <p className="text-xl text-blue-200/90 mb-10">
          Let's create something amazing together. Contact us today for a free consultation.
        </p>
        <button className="relative group inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white rounded-lg overflow-hidden shadow-xl transition-all duration-300 ease-out hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out blur-lg"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 rounded-lg transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
          <span className="relative z-10">Start Your Project</span>
          <span className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-50 rounded-lg transform scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></span>
        </button>
      </section>

      <Footer />
    </div>
  );
}