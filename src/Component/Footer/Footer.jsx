import React, { useState, useEffect } from 'react';

export default function Footer() {
  const [hoverSocial, setHoverSocial] = useState(null);
  const [gradientPosition, setGradientPosition] = useState(0);
  
  // Gradient animation effect
  useEffect(() => {
    const gradientInterval = setInterval(() => {
      setGradientPosition(prev => (prev + 1) % 100);
    }, 50);
    
    return () => clearInterval(gradientInterval);
  }, []);
  
  // Dynamic gradient style
  const gradientStyle = {
    backgroundImage: `linear-gradient(135deg, 
      hsl(220, 60%, 10%) 0%, 
      hsl(240, 70%, 15%) ${(gradientPosition + 20) % 100}%, 
      hsl(200, 80%, 15%) ${(gradientPosition + 40) % 100}%, 
      hsl(180, 75%, 20%) ${(gradientPosition + 60) % 100}%, 
      hsl(220, 70%, 15%) ${(gradientPosition + 80) % 100}%, 
      hsl(240, 60%, 10%) 100%)`,
    backgroundSize: "400% 400%",
    transition: "background-position 0.5s ease"
  };

  const socialLinks = [
    { name: "LinkedIn", icon: "🔗", color: "#4a76c4", hoverBg: "#1e3a8a" },
    { name: "GitHub", icon: "🐙", color: "#a78bfa", hoverBg: "#4c1d95" },
    { name: "Twitter", icon: "✦", color: "#38bdf8", hoverBg: "#075985" },
    { name: "Instagram", icon: "📸", color: "#f472b6", hoverBg: "#831843" },
  ];

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Custom Link component to avoid using <a> tags
  const CustomLink = ({ children, onClick, className }) => (
    <div 
      onClick={onClick} 
      className={`cursor-pointer ${className}`}
      role="button"
      tabIndex={0}
      style={{ outline: 'none' }}
      onKeyDown={(e) => e.key === 'Enter' && onClick && onClick()}
    >
      {children}
    </div>
  );

  return (
    <footer 
      className="text-gray-300 text-sm relative overflow-hidden"
      style={gradientStyle}
    >
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div 
          className="absolute rounded-full blur-3xl" 
          style={{ 
            right: "-4rem", 
            top: "-4rem", 
            width: "16rem", 
            height: "16rem", 
            background: "#22d3ee",
            animation: "float 15s ease-in-out infinite"
          }}
        ></div>
        <div 
          className="absolute rounded-full blur-3xl" 
          style={{ 
            left: "25%", 
            top: "25%", 
            width: "8rem", 
            height: "8rem", 
            background: "#c084fc",
            animation: "float 20s ease-in-out infinite reverse"
          }}
        ></div>
        <div 
          className="absolute rounded-full blur-3xl" 
          style={{ 
            left: "66%", 
            bottom: "0", 
            width: "12rem", 
            height: "12rem", 
            background: "#3b82f6",
            animation: "float 18s ease-in-out infinite"
          }}
        ></div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-10px) translateX(10px); }
          50% { transform: translateY(-5px) translateX(-15px); }
          75% { transform: translateY(10px) translateX(5px); }
          100% { transform: translateY(0) translateX(0); }
        }
        
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        
        .hover-slide:hover {
          transform: translateX(4px);
        }
        
        .hover-scale:hover {
          transform: scale(1.1);
        }
        
        .social-icon {
          transition: all 0.3s ease;
        }
        
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        
        @media (min-width: 640px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (min-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(12, minmax(0, 1fr));
          }
          
          .company-info {
            grid-column: span 4 / span 4;
          }
          
          .services-col {
            grid-column: span 2 / span 2;
          }
          
          .company-col {
            grid-column: span 2 / span 2;
          }
          
          .connect-col {
            grid-column: span 4 / span 4;
          }
          
          .bottom-footer {
            flex-direction: row;
            justify-content: space-between;
          }
        }
        
        .bottom-footer {
          margin-top: 3rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(31, 41, 55, 0.5);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }
        
        .section-title::before {
          content: '';
          display: inline-block;
          width: 1rem;
          height: 0.25rem;
          margin-right: 0.5rem;
          border-radius: 9999px;
        }
      `}</style>

      <div className="container mx-auto px-4 py-8 md:py-12 relative z-10">
        {/* Tech-themed divider */}
        <div className="flex items-center justify-center mb-8 md:mb-10">
          <div style={{ height: "1px", background: "linear-gradient(to right, transparent, #22d3ee, transparent)", width: "100%" }}></div>
          <div className="px-4">
            <div className="text-cyan-400 mx-2" style={{ fontSize: "24px" }}>⦿</div>
          </div>
          <div style={{ height: "1px", background: "linear-gradient(to right, transparent, #22d3ee, transparent)", width: "100%" }}></div>
        </div>

        {/* Main footer content */}
        <div className="footer-grid">
          {/* Company info */}
          <div className="company-info flex flex-col gap-4">
            <div className="flex items-center gap-2 mb-4">
              <div style={{ background: "#22d3ee", height: "2rem", width: "0.25rem", borderRadius: "9999px" }}></div>
              <h3 className="text-white font-bold text-xl">S9r Technologies</h3>
            </div>
            <p className="text-gray-300">Transforming ideas into digital reality with cutting-edge solutions.</p>
            
            <div className="flex items-center gap-2 transition-colors duration-300 hover-scale">
              <div className="text-cyan-400">📍</div>
              <p>Jaipur, 302031, Rajasthan, India</p>
            </div>
            
            <div className="flex items-center gap-2 transition-colors duration-300 hover-scale">
              <div className="text-cyan-400">📞</div>
              <p>+91 9672632315</p>
            </div>
            
            <div className="flex items-center gap-2 transition-colors duration-300 hover-scale">
              <div className="text-cyan-400">✉️</div>
              <p>contact@s9rtechnologies.com</p>
            </div>
          </div>

          {/* Services */}
          <div className="services-col">
            <h3 className="text-white font-bold text-lg mb-4 flex items-center">
              <div style={{ height: "0.25rem", width: "1rem", background: "#a855f7", marginRight: "0.5rem", borderRadius: "9999px" }}></div>
              Services
            </h3>
            <ul className="flex flex-col gap-2">
              <li>
                <CustomLink className="hover-slide flex items-center transition-all duration-300 text-gray-400">
                  <span style={{ opacity: 0, transition: "opacity 0.3s ease", marginRight: "0.25rem" }}>→</span>
                  <span style={{ color: "#d1d5db", transition: "color 0.3s ease" }} 
                        onMouseOver={(e) => { e.currentTarget.style.color = "#22d3ee"; e.currentTarget.previousSibling.style.opacity = 1; }}
                        onMouseOut={(e) => { e.currentTarget.style.color = "#d1d5db"; e.currentTarget.previousSibling.style.opacity = 0; }}>
                    Cloud Solutions
                  </span>
                </CustomLink>
              </li>
              <li>
                <CustomLink className="hover-slide flex items-center transition-all duration-300 text-gray-400">
                  <span style={{ opacity: 0, transition: "opacity 0.3s ease", marginRight: "0.25rem" }}>→</span>
                  <span style={{ color: "#d1d5db", transition: "color 0.3s ease" }} 
                        onMouseOver={(e) => { e.currentTarget.style.color = "#22d3ee"; e.currentTarget.previousSibling.style.opacity = 1; }}
                        onMouseOut={(e) => { e.currentTarget.style.color = "#d1d5db"; e.currentTarget.previousSibling.style.opacity = 0; }}>
                    App Development
                  </span>
                </CustomLink>
              </li>
              <li>
                <CustomLink className="hover-slide flex items-center transition-all duration-300 text-gray-400">
                  <span style={{ opacity: 0, transition: "opacity 0.3s ease", marginRight: "0.25rem" }}>→</span>
                  <span style={{ color: "#d1d5db", transition: "color 0.3s ease" }} 
                        onMouseOver={(e) => { e.currentTarget.style.color = "#22d3ee"; e.currentTarget.previousSibling.style.opacity = 1; }}
                        onMouseOut={(e) => { e.currentTarget.style.color = "#d1d5db"; e.currentTarget.previousSibling.style.opacity = 0; }}>
                    AI Integration
                  </span>
                </CustomLink>
              </li>
              <li>
                <CustomLink className="hover-slide flex items-center transition-all duration-300 text-gray-400">
                  <span style={{ opacity: 0, transition: "opacity 0.3s ease", marginRight: "0.25rem" }}>→</span>
                  <span style={{ color: "#d1d5db", transition: "color 0.3s ease" }} 
                        onMouseOver={(e) => { e.currentTarget.style.color = "#22d3ee"; e.currentTarget.previousSibling.style.opacity = 1; }}
                        onMouseOut={(e) => { e.currentTarget.style.color = "#d1d5db"; e.currentTarget.previousSibling.style.opacity = 0; }}>
                    Data Analytics
                  </span>
                </CustomLink>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="company-col">
            <h3 className="text-white font-bold text-lg mb-4 flex items-center">
              <div style={{ height: "0.25rem", width: "1rem", background: "#3b82f6", marginRight: "0.5rem", borderRadius: "9999px" }}></div>
              Company
            </h3>
            <ul className="flex flex-col gap-2">
              <li>
                <CustomLink className="hover-slide flex items-center transition-all duration-300 text-gray-400">
                  <span style={{ opacity: 0, transition: "opacity 0.3s ease", marginRight: "0.25rem" }}>→</span>
                  <span style={{ color: "#d1d5db", transition: "color 0.3s ease" }} 
                        onMouseOver={(e) => { e.currentTarget.style.color = "#22d3ee"; e.currentTarget.previousSibling.style.opacity = 1; }}
                        onMouseOut={(e) => { e.currentTarget.style.color = "#d1d5db"; e.currentTarget.previousSibling.style.opacity = 0; }}>
                    About Us
                  </span>
                </CustomLink>
              </li>
              <li>
                <CustomLink className="hover-slide flex items-center transition-all duration-300 text-gray-400">
                  <span style={{ opacity: 0, transition: "opacity 0.3s ease", marginRight: "0.25rem" }}>→</span>
                  <span style={{ color: "#d1d5db", transition: "color 0.3s ease" }} 
                        onMouseOver={(e) => { e.currentTarget.style.color = "#22d3ee"; e.currentTarget.previousSibling.style.opacity = 1; }}
                        onMouseOut={(e) => { e.currentTarget.style.color = "#d1d5db"; e.currentTarget.previousSibling.style.opacity = 0; }}>
                    Careers
                  </span>
                </CustomLink>
              </li>
              <li>
                <CustomLink className="hover-slide flex items-center transition-all duration-300 text-gray-400">
                  <span style={{ opacity: 0, transition: "opacity 0.3s ease", marginRight: "0.25rem" }}>→</span>
                  <span style={{ color: "#d1d5db", transition: "color 0.3s ease" }} 
                        onMouseOver={(e) => { e.currentTarget.style.color = "#22d3ee"; e.currentTarget.previousSibling.style.opacity = 1; }}
                        onMouseOut={(e) => { e.currentTarget.style.color = "#d1d5db"; e.currentTarget.previousSibling.style.opacity = 0; }}>
                    Blog
                  </span>
                </CustomLink>
              </li>
              <li>
                <CustomLink className="hover-slide flex items-center transition-all duration-300 text-gray-400">
                  <span style={{ opacity: 0, transition: "opacity 0.3s ease", marginRight: "0.25rem" }}>→</span>
                  <span style={{ color: "#d1d5db", transition: "color 0.3s ease" }} 
                        onMouseOver={(e) => { e.currentTarget.style.color = "#22d3ee"; e.currentTarget.previousSibling.style.opacity = 1; }}
                        onMouseOut={(e) => { e.currentTarget.style.color = "#d1d5db"; e.currentTarget.previousSibling.style.opacity = 0; }}>
                    Contact
                  </span>
                </CustomLink>
              </li>
            </ul>
          </div>

          {/* Social and newsletter */}
          <div className="connect-col">
            <h3 className="text-white font-bold text-lg mb-4 flex items-center">
              <div style={{ height: "0.25rem", width: "1rem", background: "#22d3ee", marginRight: "0.5rem", borderRadius: "9999px" }}></div>
              Connect With Us
            </h3>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social, index) => (
                <CustomLink 
                  key={index}
                  className="social-icon"
                  style={{ 
                    height: "2.5rem", 
                    width: "2.5rem", 
                    borderRadius: "0.5rem",
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                    backgroundColor: hoverSocial === index ? social.hoverBg : "rgba(31, 41, 55, 0.8)",
                    color: hoverSocial === index ? "white" : "#9ca3af",
                    boxShadow: hoverSocial === index ? `0 10px 15px -3px ${social.color}33` : "none",
                    transform: hoverSocial === index ? "scale(1.1)" : "scale(1)",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={() => setHoverSocial(index)}
                  onMouseLeave={() => setHoverSocial(null)}
                >
                  <span style={{ fontSize: "1.25rem" }}>{social.icon}</span>
                </CustomLink>
              ))}
            </div>
            
            <h3 className="text-white font-bold text-lg mb-3 flex items-center">
              <div style={{ height: "0.25rem", width: "1rem", background: "#ec4899", marginRight: "0.5rem", borderRadius: "9999px" }}></div>
              Stay Updated
            </h3>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full p-3 rounded-lg bg-gray-800 bg-opacity-80 outline-none text-white border border-gray-700 pr-24 transition-all duration-300"
                style={{
                  transition: "all 0.3s ease"
                }}
                onFocus={(e) => e.target.style.borderColor = "#22d3ee"}
                onBlur={(e) => e.target.style.borderColor = "#374151"}
              />
              <button className="absolute right-1 top-1 py-2 px-3 md:px-4 rounded-md font-medium text-sm text-white transition-all duration-300"
                style={{
                  background: "linear-gradient(to right, #22d3ee, #3b82f6)"
                }}
                onMouseOver={(e) => {
                  e.target.style.background = "linear-gradient(to right, #06b6d4, #2563eb)";
                  e.target.style.transform = "scale(1.03)";
                }}
                onMouseOut={(e) => {
                  e.target.style.background = "linear-gradient(to right, #22d3ee, #3b82f6)";
                  e.target.style.transform = "scale(1)";
                }}>
                Subscribe
              </button>
            </div>
            <p className="mt-2 text-xs text-gray-400">Join our newsletter for tech insights & updates</p>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="bottom-footer">
          <p className="flex items-center text-center">
            <span className="text-cyan-400 mr-1">&copy;</span> 2025 S9r Technologies. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-4 mt-4 md:mt-0">
            <CustomLink className="text-gray-400 transition-colors duration-300 hover:text-white"
              onMouseOver={(e) => e.target.style.color = "white"}
              onMouseOut={(e) => e.target.style.color = "#9ca3af"}>
              Privacy
            </CustomLink>
            <CustomLink className="text-gray-400 transition-colors duration-300 hover:text-white"
              onMouseOver={(e) => e.target.style.color = "white"}
              onMouseOut={(e) => e.target.style.color = "#9ca3af"}>
              Terms
            </CustomLink>
            <CustomLink className="text-gray-400 transition-colors duration-300 hover:text-white"
              onMouseOver={(e) => e.target.style.color = "white"}
              onMouseOut={(e) => e.target.style.color = "#9ca3af"}>
              Sitemap
            </CustomLink>
            
            <div className="flex items-center text-gray-400"
                 onMouseOver={(e) => {
                   e.currentTarget.style.color = "#22d3ee";
                   e.currentTarget.firstChild.style.animation = "pulse 1s infinite";
                 }}
                 onMouseOut={(e) => {
                   e.currentTarget.style.color = "#9ca3af";
                   e.currentTarget.firstChild.style.animation = "none";
                 }}>
              <span className="text-cyan-400 mr-2">☕</span>
              <span className="transition-colors duration-300">Made with ❤️ in India</span>
            </div>
            
            <CustomLink
              onClick={scrollToTop}
              className="text-cyan-400 transition-all duration-300 hover-scale text-xl"
              aria-label="Scroll to top"
            >
              ↑
            </CustomLink>
          </div>
        </div>
      </div>
    </footer>
  );
}