import React, { useState, useEffect } from 'react';

export default function Footer () {
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
        
        .section-title::before {
          content: '';
          display: inline-block;
          width: 1rem;
          height: 0.25rem;
          margin-right: 0.5rem;
          border-radius: 9999px;
        }
      `}</style>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Tech-themed divider */}
        <div className="flex items-center justify-center mb-10">
          <div style={{ height: "1px", background: "linear-gradient(to right, transparent, #22d3ee, transparent)", width: "100%" }}></div>
          <div className="px-4">
            <div className="text-cyan-400 mx-2" style={{ fontSize: "24px" }}>⦿</div>
          </div>
          <div style={{ height: "1px", background: "linear-gradient(to right, transparent, #22d3ee, transparent)", width: "100%" }}></div>
        </div>

        {/* Main footer content */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(12, minmax(0, 1fr))", gap: "2rem" }}>
          {/* Company info */}
          <div style={{ gridColumn: "span 4 / span 4", display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <div style={{ background: "#22d3ee", height: "2rem", width: "0.25rem", borderRadius: "9999px" }}></div>
              <h3 style={{ color: "white", fontWeight: "bold", fontSize: "1.25rem" }}>S9r Technologies</h3>
            </div>
            <p style={{ color: "#d1d5db" }}>Transforming ideas into digital reality with cutting-edge solutions.</p>
            
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", transition: "color 0.3s ease" }} className="hover-scale">
              <div style={{ color: "#22d3ee" }}>📍</div>
              <p>Jaipur, 302031, Rajasthan, India</p>
            </div>
            
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", transition: "color 0.3s ease" }} className="hover-scale">
              <div style={{ color: "#22d3ee" }}>📞</div>
              <p>+91 9672632315</p>
            </div>
            
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", transition: "color 0.3s ease" }} className="hover-scale">
              <div style={{ color: "#22d3ee" }}>✉️</div>
              <p>contact@s9rtechnologies.com</p>
            </div>
          </div>

          {/* Services */}
          <div style={{ gridColumn: "span 2 / span 2" }}>
            <h3 style={{ color: "white", fontWeight: "bold", fontSize: "1.125rem", marginBottom: "1rem", display: "flex", alignItems: "center" }}>
              <div style={{ height: "0.25rem", width: "1rem", background: "#a855f7", marginRight: "0.5rem", borderRadius: "9999px" }}></div>
              Services
            </h3>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <li>
                <CustomLink className="hover-slide" style={{ display: "flex", alignItems: "center", transition: "all 0.3s ease", color: "#9ca3af" }}>
                  <span style={{ opacity: 0, transition: "opacity 0.3s ease", marginRight: "0.25rem" }}>→</span>
                  <span style={{ color: "#d1d5db", transition: "color 0.3s ease" }} 
                        onMouseOver={(e) => { e.currentTarget.style.color = "#22d3ee"; e.currentTarget.previousSibling.style.opacity = 1; }}
                        onMouseOut={(e) => { e.currentTarget.style.color = "#d1d5db"; e.currentTarget.previousSibling.style.opacity = 0; }}>
                    Cloud Solutions
                  </span>
                </CustomLink>
              </li>
              <li>
                <CustomLink className="hover-slide" style={{ display: "flex", alignItems: "center", transition: "all 0.3s ease", color: "#9ca3af" }}>
                  <span style={{ opacity: 0, transition: "opacity 0.3s ease", marginRight: "0.25rem" }}>→</span>
                  <span style={{ color: "#d1d5db", transition: "color 0.3s ease" }} 
                        onMouseOver={(e) => { e.currentTarget.style.color = "#22d3ee"; e.currentTarget.previousSibling.style.opacity = 1; }}
                        onMouseOut={(e) => { e.currentTarget.style.color = "#d1d5db"; e.currentTarget.previousSibling.style.opacity = 0; }}>
                    App Development
                  </span>
                </CustomLink>
              </li>
              <li>
                <CustomLink className="hover-slide" style={{ display: "flex", alignItems: "center", transition: "all 0.3s ease", color: "#9ca3af" }}>
                  <span style={{ opacity: 0, transition: "opacity 0.3s ease", marginRight: "0.25rem" }}>→</span>
                  <span style={{ color: "#d1d5db", transition: "color 0.3s ease" }} 
                        onMouseOver={(e) => { e.currentTarget.style.color = "#22d3ee"; e.currentTarget.previousSibling.style.opacity = 1; }}
                        onMouseOut={(e) => { e.currentTarget.style.color = "#d1d5db"; e.currentTarget.previousSibling.style.opacity = 0; }}>
                    AI Integration
                  </span>
                </CustomLink>
              </li>
              <li>
                <CustomLink className="hover-slide" style={{ display: "flex", alignItems: "center", transition: "all 0.3s ease", color: "#9ca3af" }}>
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
          <div style={{ gridColumn: "span 2 / span 2" }}>
            <h3 style={{ color: "white", fontWeight: "bold", fontSize: "1.125rem", marginBottom: "1rem", display: "flex", alignItems: "center" }}>
              <div style={{ height: "0.25rem", width: "1rem", background: "#3b82f6", marginRight: "0.5rem", borderRadius: "9999px" }}></div>
              Company
            </h3>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <li>
                <CustomLink className="hover-slide" style={{ display: "flex", alignItems: "center", transition: "all 0.3s ease", color: "#9ca3af" }}>
                  <span style={{ opacity: 0, transition: "opacity 0.3s ease", marginRight: "0.25rem" }}>→</span>
                  <span style={{ color: "#d1d5db", transition: "color 0.3s ease" }} 
                        onMouseOver={(e) => { e.currentTarget.style.color = "#22d3ee"; e.currentTarget.previousSibling.style.opacity = 1; }}
                        onMouseOut={(e) => { e.currentTarget.style.color = "#d1d5db"; e.currentTarget.previousSibling.style.opacity = 0; }}>
                    About Us
                  </span>
                </CustomLink>
              </li>
              <li>
                <CustomLink className="hover-slide" style={{ display: "flex", alignItems: "center", transition: "all 0.3s ease", color: "#9ca3af" }}>
                  <span style={{ opacity: 0, transition: "opacity 0.3s ease", marginRight: "0.25rem" }}>→</span>
                  <span style={{ color: "#d1d5db", transition: "color 0.3s ease" }} 
                        onMouseOver={(e) => { e.currentTarget.style.color = "#22d3ee"; e.currentTarget.previousSibling.style.opacity = 1; }}
                        onMouseOut={(e) => { e.currentTarget.style.color = "#d1d5db"; e.currentTarget.previousSibling.style.opacity = 0; }}>
                    Careers
                  </span>
                </CustomLink>
              </li>
              <li>
                <CustomLink className="hover-slide" style={{ display: "flex", alignItems: "center", transition: "all 0.3s ease", color: "#9ca3af" }}>
                  <span style={{ opacity: 0, transition: "opacity 0.3s ease", marginRight: "0.25rem" }}>→</span>
                  <span style={{ color: "#d1d5db", transition: "color 0.3s ease" }} 
                        onMouseOver={(e) => { e.currentTarget.style.color = "#22d3ee"; e.currentTarget.previousSibling.style.opacity = 1; }}
                        onMouseOut={(e) => { e.currentTarget.style.color = "#d1d5db"; e.currentTarget.previousSibling.style.opacity = 0; }}>
                    Blog
                  </span>
                </CustomLink>
              </li>
              <li>
                <CustomLink className="hover-slide" style={{ display: "flex", alignItems: "center", transition: "all 0.3s ease", color: "#9ca3af" }}>
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
          <div style={{ gridColumn: "span 4 / span 4" }}>
            <h3 style={{ color: "white", fontWeight: "bold", fontSize: "1.125rem", marginBottom: "1rem", display: "flex", alignItems: "center" }}>
              <div style={{ height: "0.25rem", width: "1rem", background: "#22d3ee", marginRight: "0.5rem", borderRadius: "9999px" }}></div>
              Connect With Us
            </h3>
            <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1.5rem" }}>
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
            
            <h3 style={{ color: "white", fontWeight: "bold", fontSize: "1.125rem", marginBottom: "0.75rem", display: "flex", alignItems: "center" }}>
              <div style={{ height: "0.25rem", width: "1rem", background: "#ec4899", marginRight: "0.5rem", borderRadius: "9999px" }}></div>
              Stay Updated
            </h3>
            <div style={{ position: "relative" }}>
              <input 
                type="email" 
                placeholder="Your email" 
                style={{ 
                  backgroundColor: "rgba(31, 41, 55, 0.8)",
                  padding: "0.75rem",
                  borderRadius: "0.5rem",
                  outline: "none",
                  color: "white",
                  width: "100%",
                  border: "1px solid #374151",
                  paddingRight: "6rem",
                  transition: "all 0.3s ease"
                }}
                onFocus={(e) => e.target.style.borderColor = "#22d3ee"}
                onBlur={(e) => e.target.style.borderColor = "#374151"}
              />
              <button style={{ 
                position: "absolute",
                right: "0.25rem",
                top: "0.25rem",
                background: "linear-gradient(to right, #22d3ee, #3b82f6)",
                color: "white",
                padding: "0.5rem 1rem",
                borderRadius: "0.375rem",
                fontWeight: "500",
                fontSize: "0.875rem",
                transition: "all 0.3s ease"
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
            <p style={{ marginTop: "0.5rem", fontSize: "0.75rem", color: "#9ca3af" }}>Join our newsletter for tech insights & updates</p>
          </div>
        </div>

        {/* Bottom footer */}
        <div style={{ 
          marginTop: "3rem", 
          paddingTop: "1.5rem", 
          borderTop: "1px solid rgba(31, 41, 55, 0.5)", 
          display: "flex", 
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          '@media (min-width: 768px)': {
            flexDirection: "row",
            justifyContent: "space-between"
          }
        }}>
          <p style={{ display: "flex", alignItems: "center" }}>
            <span style={{ color: "#22d3ee", marginRight: "0.25rem" }}>&copy;</span> 2025 S9r Technologies. All rights reserved.
          </p>
          
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginTop: "1rem" }}>
            <CustomLink style={{ color: "#9ca3af", transition: "color 0.3s ease" }}
              onMouseOver={(e) => e.target.style.color = "white"}
              onMouseOut={(e) => e.target.style.color = "#9ca3af"}>
              Privacy
            </CustomLink>
            <CustomLink style={{ color: "#9ca3af", transition: "color 0.3s ease" }}
              onMouseOver={(e) => e.target.style.color = "white"}
              onMouseOut={(e) => e.target.style.color = "#9ca3af"}>
              Terms
            </CustomLink>
            <CustomLink style={{ color: "#9ca3af", transition: "color 0.3s ease" }}
              onMouseOver={(e) => e.target.style.color = "white"}
              onMouseOut={(e) => e.target.style.color = "#9ca3af"}>
              Sitemap
            </CustomLink>
            
            <div style={{ display: "flex", alignItems: "center", color: "#9ca3af" }}
                 onMouseOver={(e) => {
                   e.currentTarget.style.color = "#22d3ee";
                   e.currentTarget.firstChild.style.animation = "pulse 1s infinite";
                 }}
                 onMouseOut={(e) => {
                   e.currentTarget.style.color = "#9ca3af";
                   e.currentTarget.firstChild.style.animation = "none";
                 }}>
              <span style={{ color: "#22d3ee", marginRight: "0.5rem" }}>☕</span>
              <span style={{ transition: "color 0.3s ease" }}>Made with ❤️ in India</span>
            </div>
            
            <CustomLink
              onClick={scrollToTop}
              style={{ 
                color: "#22d3ee", 
                transition: "all 0.3s ease",
                fontSize: "1.25rem"
              }}
              className="hover-scale"
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