import React, { useEffect, useState, useRef } from "react";
import { SlLogout } from "react-icons/sl";
import { FaUserTie } from "react-icons/fa";
import { BiLogIn } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import logo from '../../../assets/Logo/Logo.png'; 

const Navbar = ({ Redirect }) => {
  const [formData, setFormData] = useState({
    username: "Guest",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoverItem, setHoverItem] = useState(null);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const hoverTimeoutRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser =
      JSON.parse(localStorage.getItem("currentUser")) ||
      JSON.parse(sessionStorage.getItem("currentUser"));

    if (currentUser) {
      setFormData({ username: currentUser.username || "User" });
      setIsLoggedIn(true);
      setShowLoginPopup(false);
    } else {
      setFormData({ username: "Guest" });
      setIsLoggedIn(false);
      setShowLoginPopup(true);
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrollPosition(scrollTop);

      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const percentage = (scrollTop / (docHeight - winHeight)) * 100;
      setScrollPercentage(Math.min(percentage, 100));
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    sessionStorage.removeItem("currentUser");

    setIsLoggedIn(false);
    setFormData({ username: "Guest" });
    setShowLoginPopup(true);

    navigate("/login");
  };

  const getGradientStyle = () => {
    if (scrollPosition < 20) {
      return "transparent";
    }

    const startColor = "#6a11cb";
    const midColor = "#2575fc";
    const endColor = "#560591";
    const stop1 = Math.min(scrollPercentage, 30);
    const stop2 = Math.min(scrollPercentage, 70);
    return `linear-gradient(to right, ${startColor} ${stop1}%, ${midColor} ${stop2}%, ${endColor} 100%)`;
  };

  const handleLoginRedirect = () => {
    navigate("/Login");
    setIsMenuOpen(false);
  };

  const handleSigninRedirect = () => {
    navigate("/signup");
    setIsMenuOpen(false);
  };

  const handleEcommerceRedirect = () => {
    navigate("/Ecommerce");
    setIsMenuOpen(false);
  };

  const handleEducationRedirect = () => {
    navigate("/education");
    setIsMenuOpen(false);
  };

  const handleFinanceRedirect = () => {
    navigate("/Finance");
    setIsMenuOpen(false);
  };

  const handleHealthcareRedirect = () => {
    navigate("/Healthcare");
    setIsMenuOpen(false);
  };

  const handleMouseEnter = (label) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setHoverItem(label);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoverItem(null);
    }, 300);
  };

  const navItems = [
    { label: "Home", path: "/", hoverColor: "purple" },
    {
      label: "Services",
      path: "/services",
      hoverColor: "purple",
      dropdown: true,
    },
    {
      label: "Industries",
      path: "/industries",
      hoverColor: "purple",
      dropdown: true,
    },
    { label: "Portfolio", path: "/portfolio", hoverColor: "purple" },
    { label: "Career", path: "/career", hoverColor: "purple" },
  ];

  const dropdownItems = {
    Services: [
      {
        label: "Web Development",
        description: "Modern web solutions",
        icon: "💻",
        path: "/web-development",
      },
      {
        label: "App Development",
        description: "Scalable mobile apps",
        icon: "📱",
        path: "/app-development",
      },
      {
        label: "Digital Marketing",
        description: "Boost your brand",
        icon: "📈",
        path: "/digital-marketing",
      },
      {
        label: "UI/UX Design",
        description: "Beautiful user experiences",
        icon: "🎨",
        path: "/ui-ux-design",
      },
    ],
    Industries: [
      {
        label: "Healthcare",
        description: "Medical solutions",
        icon: "🏥",
        onClick: handleHealthcareRedirect,
        path: "/Healthcare",
      },
      {
        label: "Finance",
        description: "Banking & fintech",
        icon: "💰",
        onClick: handleFinanceRedirect,
        path: "/Finance",
      },
      {
        label: "Education",
        description: "EdTech platforms",
        icon: "🎓",
        onClick: handleEducationRedirect,
        path: "/education",
      },
      {
        label: "E-Commerce",
        description: "Online retail solutions",
        icon: "🛒",
        onClick: handleEcommerceRedirect,
        path: "/Ecommerce",
      },
    ],
  };

  const handleDropdownItemClick = (item) => {
    if (item.onClick) {
      item.onClick();
    } else if (item.path) {
      navigate(item.path);
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`flex items-center px-4 lg:px-6 py-2 fixed top-0 w-full z-50 transition-all duration-300 ${scrollPosition > 20 ? "shadow-md py-3" : "py-4"
        }`}
      style={{
        background: getGradientStyle(),
        backdropFilter: scrollPosition > 20 ? "blur(8px)" : "none",
        transition: "all 0.5s ease",
      }}
    >
      <div className="flex items-center justify-between w-full">
          <img
            src={logo}
            alt="Logo"
            className="p-[1vw] max-w-[110px]  md:max-w-[150px] "
          />

          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
        
        <div className="sm:hidden mx-auto">
          <h1
            className={`font-bold text-base ${scrollPosition < 20 ? "text-white" : "text-sky-200"
              } transition-colors duration-300`}
          >
            Welcome,{" "}
            <span className="text-yellow-300 animate-pulse">
              {formData.username}
            </span>
            !
          </h1>
        </div>
        <div className="hidden sm:block ml-4">
          <h1
            className={`font-bold text-base sm:text-lg lg:text-xl ${scrollPosition < 20 ? "text-sky-200" : "text-white"
              } transition-colors duration-300`}
          >
            Welcome,{" "}
            <span className="text-yellow-300 animate-pulse">
              {formData.username}
            </span>{" "}
            !
          </h1>
        </div>

        <div className="hidden sm:flex gap-3 lg:gap-5 items-center relative ml-auto mr-4">
          {navItems.map((item, index) => (
            <div
              key={index}
              onClick={() => !item.dropdown && navigate(item.path)}
              onMouseEnter={() =>
                handleMouseEnter(item.dropdown ? item.label : null)
              }
              onMouseLeave={handleMouseLeave}
              className="cursor-pointer relative group"
            >
              <span
                className={`flex items-center transition-colors duration-300 ${scrollPosition < 20 ? "text-sky-200" : "text-white"
                  } hover:text-sky-500`}
              >
                {item.label}
                {item.dropdown && (
                  <span className="ml-1 transform transition-transform duration-300 group-hover:rotate-180">
                    ▼
                  </span>
                )}
              </span>
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-yellow-300 transition-all group-hover:w-full"></span>

              {item.dropdown && hoverItem === item.label && (
                <div
                  className="absolute top-auto transform translate-y-2 bg-white bg-opacity-95 backdrop-blur-sm text-gray-800 rounded-lg shadow-lg p-6 w-[300px] sm:w-[400px] z-50"
                  style={{
                    left: item.label === "Industries" ? "50%" : "0",
                    transform:
                      item.label === "Industries"
                        ? "translateX(-50%) translateY(8px)"
                        : "translateY(8px)",
                  }}
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-purple-700">
                        {item.label}
                      </h3>
                      <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {dropdownItems[item.label].map((dropdownItem, i) => (
                        <div
                          key={i}
                          className=" hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 rounded-lg transition group/item border border-transparent hover:border-purple-100 cursor-pointer"
                          onClick={() => handleDropdownItemClick(dropdownItem)}
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-lg">{dropdownItem.icon}</span>
                            <h4 className="font-bold text-sm text-blue-800 group-hover/item:text-purple-700 transition-colors">
                              {dropdownItem.label}
                            </h4>
                          </div>
                          <p className="text-xs text-gray-600 mt-1 pl-7">
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

        <div
          className={`sm:hidden fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-purple-900 via-blue-800 to-teal-700 z-50 transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex flex-col gap-4 p-6 h-[95%]">
            <div className="flex justify-between items-center mb-8">
              <img
                src={logo}
                alt="Logo"
                className="h-[50px] w-auto max-w-[200px] object-contain rounded-md"
              />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-white text-xl bg-purple-800 p-2 rounded-full hover:bg-purple-700 transition-colors"
              >
                ✖
              </button>
            </div>

            <div className="flex flex-col gap-6">
              {navItems.map((item, index) => (
                <div key={index} className="border-b border-purple-700 pb-4">
                  <div
                    onClick={() => {
                      if (!item.dropdown) {
                        navigate(item.path);
                        setIsMenuOpen(false);
                      }
                    }}
                    className="cursor-pointer text-white text-lg font-medium flex justify-between items-center"
                  >
                    {item.label}
                    {item.dropdown && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setHoverItem(
                            hoverItem === item.label ? null : item.label
                          );
                        }}
                        className="bg-purple-700 p-1 rounded-full text-sm"
                      >
                        {hoverItem === item.label ? "-" : "+"}
                      </button>
                    )}
                  </div>

                  {item.dropdown && hoverItem === item.label && (
                    <div className="mt-3 ml-4 space-y-3">
                      {dropdownItems[item.label].map((dropdownItem, i) => (
                        <div
                          key={i}
                          className="p-2 bg-purple-800 bg-opacity-50 rounded-lg cursor-pointer"
                          onClick={() => handleDropdownItemClick(dropdownItem)}
                        >
                          <div className="flex items-center gap-2">
                            <span>{dropdownItem.icon}</span>
                            <h4 className="font-bold text-sm text-white">
                              {dropdownItem.label}
                            </h4>
                          </div>
                          <p className="text-xs text-purple-200 mt-1 ml-6">
                            {dropdownItem.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-auto flex flex-col gap-4">
              {isLoggedIn ? (
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-lg hover:from-red-700 hover:to-orange-600 transition-all"
                >
                  <SlLogout className="text-xl" />
                  <span>Logout</span>
                </button>
              ) : (
                <>
                  <button
                    onClick={handleSigninRedirect}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg hover:from-purple-700 hover:to-blue-600 transition-all"
                  >
                    <FaUserTie className="text-xl" />
                    <span>Sign Up</span>
                  </button>
                  <button
                    onClick={handleLoginRedirect}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-white bg-opacity-10 text-white rounded-lg hover:bg-opacity-20 transition-all"
                  >
                    <BiLogIn className="text-xl" />
                    <span>Login</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="sm:hidden flex items-center ml-auto">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative p-3 focus:outline-none group"
            aria-label="Toggle navigation menu"
          >
            <div className="flex flex-col justify-center items-center">
              <span
                className={`block w-6 h-0.5 rounded-full transition-all duration-300 ease-in-out ${scrollPosition < 20 ? "bg-gray-800" : "bg-white"
                  } ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
              ></span>
              <span
                className={`block w-8 h-0.5 rounded-full transition-all duration-300 ease-in-out mt-1.5 ${scrollPosition < 20 ? "bg-purple-600" : "bg-purple-300"
                  } ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
              ></span>
              <span
                className={`block w-4 h-0.5 rounded-full transition-all duration-300 ease-in-out mt-1.5 ml-auto ${scrollPosition < 20 ? "bg-blue-500" : "bg-blue-300"
                  } ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
              ></span>
            </div>

            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>

            <span
              className={`absolute inset-0 rounded-full ${isMenuOpen ? "" : "animate-ping"
                } bg-purple-500 opacity-0 group-hover:opacity-10 transition-all duration-300`}
            ></span>
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-4">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all text-sm lg:text-base ${scrollPosition < 20
                  ? "bg-gradient-to-r from-red-600 to-orange-500 text-white hover:shadow-lg"
                  : "bg-transparent border border-white text-white hover:bg-red-500"
                }`}
            >
              <SlLogout className="text-lg lg:text-xl" />
              <span>Logout</span>
            </button>
          ) : (
            <>
              <button
                onClick={handleSigninRedirect}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all text-sm lg:text-base ${scrollPosition < 20
                    ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:shadow-lg"
                    : "bg-transparent border border-white text-white hover:bg-white hover:text-purple-800"
                  }`}
              >
                <FaUserTie className="text-lg lg:text-xl" />
                <span>Sign up</span>
              </button>

              <div className="relative group">
                <button
                  onClick={handleLoginRedirect}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all text-sm lg:text-base ${scrollPosition < 20
                      ? "bg-white shadow-md text-purple-800 hover:shadow-lg animate-pulse group-hover:animate-none"
                      : "bg-transparent border border-white text-white hover:bg-white hover:text-purple-800"
                    }`}
                >
                  <BiLogIn className="text-lg lg:text-xl" />
                  <span>Login</span>
                </button>

                {!isLoggedIn && showLoginPopup && (
                  <div className="absolute top-full mt-4 right-0 w-48 bg-white text-purple-800 rounded-md shadow-lg p-3 text-sm animate-bounce z-50">
                    <div className="absolute -top-2 right-6 w-4 h-4 bg-white transform rotate-45"></div>
                    <p className="font-medium">
                      Sign in to access your account!
                    </p>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 via-blue-400 to-green-300"
        style={{ width: `${scrollPercentage}%`, transition: "width 0.2s ease" }}
      ></div>
    </header>
  );
};

export default Navbar;
