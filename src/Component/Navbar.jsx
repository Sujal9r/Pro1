/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { SlLogout } from "react-icons/sl";
import { FaUserTie } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Banner from "./assets/Banner.png";

export const Header = ({ Redirect }) => {
  const [formData, setFormData] = useState({
    username: "Guest",
  });

  const [scrollPercentage, setScrollPercentage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.length > 0) {
      setFormData({ username: users[users.length - 1].username });
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const percentage = (scrollTop / (docHeight - winHeight)) * 100;
      setScrollPercentage(Math.min(percentage, 100)); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getGradientStyle = () => {
    const startColor = "#6a11cb"; 
    const midColor = "#2575fc"; 
    const endColor = "#34eb83"; 
    const stop1 = Math.min(scrollPercentage, 30); 
    const stop2 = Math.min(scrollPercentage, 70); 
  
    return `linear-gradient(to right, ${startColor} ${stop1}%, ${midColor} ${stop2}%, ${endColor} 100%)`;
  };
  

  const handleLoginRedirect = () => {
    navigate("/Login");
  };

  const navItems = [
    { label: "Home", path: "/", hoverColor: "purple" },
    { label: "Services", path: "/services", hoverColor: "purple", dropdown: true },
    { label: "Industries", path: "/industries", hoverColor: "purple", dropdown: true },
    { label: "Portfolio", path: "/portfolio", hoverColor: "purple" },
    { label: "Career", path: "/career", hoverColor: "purple" },
  ];

  const dropdownItems = [
    { label: "Web Development", description: "Modern web solutions" },
    { label: "App Development", description: "Scalable mobile apps" },
    { label: "Digital Marketing", description: "Boost your brand" },
  ];

  return (
    <header
      className={`flex items-center px-4 lg:px-6 py-4 shadow-md`}
      style={{
        background: getGradientStyle(),
        position: "sticky",
        top: 0,
        zIndex: 50,
        transition: "background 0.5s ease",
      }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-between w-full">
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
          <img
            src={Banner}
            alt="Logo"
            className="h-[60px] w-[120px] sm:h-[80px] sm:w-[140px] lg:h-[100px] lg:w-[180px] rounded-md"
          />
          <div className="text-center lg:text-left">
            <h1 className={`font-bold text-base sm:text-lg lg:text-xl text-white`}>
              Welcome, <span className="text-yellow-300">{formData.username}</span>!
            </h1>
          </div>
        </div>

        <div className="hidden sm:flex gap-3 lg:gap-5 items-center relative">
          {navItems.map((item, index) => (
            <div
              key={index}
              onClick={() => !item.dropdown && navigate(item.path)}
              className="cursor-pointer relative group text-white hover:text-purple-300 transition-colors"
            >
              <span className="flex items-center">
                {item.label}
                {item.dropdown && (
                  <span className="ml-1 transform transition-transform duration-300 group-hover:rotate-180">
                    ▼
                  </span>
                )}
              </span>
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-purple-300 transition-all group-hover:w-full"></span>

              {item.dropdown && (
                <div className="hidden group-hover:flex absolute top-auto transform translate-y-2 left-0 bg-white text-gray-800 rounded-lg shadow-lg p-6 w-[300px] sm:w-[400px]">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <img
                      src="https://via.placeholder.com/100"
                      alt="Dropdown Image"
                      className="h-20 w-20 sm:h-24 sm:w-24 rounded-lg shadow"
                    />
                    <div className="grid grid-cols-1 gap-2">
                      {dropdownItems.map((dropdownItem, i) => (
                        <div
                          key={i}
                          className="p-2 hover:bg-gray-100 rounded-lg transition"
                        >
                          <h4 className="font-bold text-sm text-blue-800">
                            {dropdownItem.label}
                          </h4>
                          <p className="text-xs text-gray-600">
                            {dropdownItem.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mt-4 sm:mt-0">
          <button
            onClick={Redirect}
            className="flex items-center gap-2 px-3 py-2 bg-transparent border border-white text-white rounded-lg hover:bg-purple-800 hover:text-white transition-all text-xs sm:text-sm lg:text-base"
          >
            <FaUserTie className="text-lg sm:text-xl lg:text-2xl" />
            <span>Hire Developer</span>
          </button>
          <button
            onClick={handleLoginRedirect}
            className="flex items-center gap-2 px-3 py-2 bg-transparent border border-white text-white rounded-lg hover:bg-purple-800 hover:text-white transition-all text-xs sm:text-sm lg:text-base"
          >
            <SlLogout className="text-lg sm:text-xl lg:text-2xl" />
            <span>Login</span>
          </button>
        </div>
      </div>
    </header>
  );
};
