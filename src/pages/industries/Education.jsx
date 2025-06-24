import { useState, useEffect } from "react";
import Navbar from '../../components/layout/Navbar/Navbar';
import Footer from '../../components/layout/Footer/Footer';
import { useNavigate } from "react-router-dom";
import ComButton from '../../components/common/ComButton';

export default function Education() {
  // eslint-disable-next-line
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("websites");

  const navigate = useNavigate();
  const handleDiscoverRedirect = () => {
    navigate("/Discover");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Jane Cooper",
      position: "Director of E-Learning, ABC University",
      content:
        "S9r Technology transformed our learning experience. Their platform is intuitive, robust, and our students love it.",
      avatar: "/api/placeholder/40/40",
    },
    {
      id: 2,
      name: "Michael Johnson",
      position: "Principal, XYZ High School",
      content:
        "The customization options and responsive design made our transition to digital education seamless. Highly recommended!",
      avatar: "/api/placeholder/40/40",
    },
    {
      id: 3,
      name: "Sarah Williams",
      position: "CEO, EdTech Ventures",
      content:
        "S9r's attention to detail and understanding of educational needs sets them apart from other providers we've worked with.",
      avatar: "/api/placeholder/40/40",
    },
  ];

  const features = [
    {
      title: "Interactive Learning",
      description:
        "Engage students with interactive content that adapts to their learning pace and style.",
    },
    {
      title: "Comprehensive Analytics",
      description:
        "Track student progress and identify areas for improvement with detailed reports.",
    },
    {
      title: "Scalable Architecture",
      description:
        "Our platforms grow with your institution, from small classrooms to university-wide deployments.",
    },
    {
      title: "Mobile-First Design",
      description:
        "Learn anywhere, anytime with fully responsive design optimized for all devices.",
    },
    {
      title: "Seamless Integration",
      description:
        "Connect with your existing tools and systems without disruption to your workflow.",
    },
    {
      title: "24/7 Support",
      description:
        "Our dedicated support team is always available to help you resolve any issues.",
    },
  ];
  
  const handleContactusRedirect = () => {
    navigate("/Contactus");
  };

    const handleScheduleCall = () => {
    window.open("https://calendly.com/sujalsukoimk5", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-sky-900 text-white py-10">
      <Navbar />
      <section className="relative py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="mb-6 transform translate-y-0 opacity-100 transition-all duration-1000">
            <h1 className="text-4xl md:text-5xl h-[8vh] font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-indigo-300 to-sky-300">
              Transforming Education Through Technology
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Custom educational platforms that inspire learning and drive
              success
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => {
                  handleDiscoverRedirect();
                }}
                className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                Explore Solutions
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-indigo-400 hover:bg-indigo-900 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                Request Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 lg:px-16 bg-indigo-900 bg-opacity-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-indigo-200 to-sky-200">
            Our Educational Solutions
          </h2>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === "websites"
                  ? "bg-purple-600 text-white"
                  : "bg-purple-900 bg-opacity-50 text-gray-300"
              }`}
              onClick={() => setActiveTab("websites")}
            >
              Learning Websites
            </button>
            <button
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === "lms"
                  ? "bg-purple-600 text-white"
                  : "bg-purple-900 bg-opacity-50 text-gray-300"
              }`}
              onClick={() => setActiveTab("lms")}
            >
              LMS Platforms
            </button>
            <button
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === "apps"
                  ? "bg-purple-600 text-white"
                  : "bg-purple-900 bg-opacity-50 text-gray-300"
              }`}
              onClick={() => setActiveTab("apps")}
            >
              Educational Apps
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              {activeTab === "websites" && (
                <div className="animate-fadeIn">
                  <h3 className="text-2xl font-bold mb-4 text-purple-200">
                    Custom Learning Websites
                  </h3>
                  <p className="text-gray-200 mb-6">
                    Create immersive learning environments with custom-designed
                    educational websites that engage students and simplify
                    administration.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-purple-500 mr-3 mt-1">
                        ✓
                      </span>
                      <span>Responsive designs optimized for all devices</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-purple-500 mr-3 mt-1">
                        ✓
                      </span>
                      <span>
                        Interactive learning modules with progress tracking
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-purple-500 mr-3 mt-1">
                        ✓
                      </span>
                      <span>Seamless integration with existing systems</span>
                    </li>
                  </ul>
                </div>
              )}

              {activeTab === "lms" && (
                <div className="animate-fadeIn">
                  <h3 className="text-2xl font-bold mb-4 text-indigo-200">
                    Learning Management Systems
                  </h3>
                  <p className="text-gray-200 mb-6">
                    Powerful, customizable LMS platforms that streamline course
                    creation, student management, and performance analytics.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-indigo-500 mr-3 mt-1">
                        ✓
                      </span>
                      <span>Comprehensive course management tools</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-indigo-500 mr-3 mt-1">
                        ✓
                      </span>
                      <span>Advanced assessment and grading capabilities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-indigo-500 mr-3 mt-1">
                        ✓
                      </span>
                      <span>Detailed analytics and reporting dashboard</span>
                    </li>
                  </ul>
                </div>
              )}

              {activeTab === "apps" && (
                <div className="animate-fadeIn">
                  <h3 className="text-2xl font-bold mb-4 text-sky-200">
                    Mobile Learning Applications
                  </h3>
                  <p className="text-gray-200 mb-6">
                    Engage learners on the go with intuitive, feature-rich
                    mobile applications designed for modern educational needs.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-sky-500 mr-3 mt-1">
                        ✓
                      </span>
                      <span>Native iOS and Android applications</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-sky-500 mr-3 mt-1">
                        ✓
                      </span>
                      <span>Offline learning capabilities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-sky-500 mr-3 mt-1">
                        ✓
                      </span>
                      <span>Push notifications and engagement features</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-full max-w-md">
                {activeTab === "websites" && (
                  <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl shadow-2xl p-4 transform transition-all duration-500 animate-float">
                    <div className="bg-gray-800 rounded-lg overflow-hidden">
                      <div className="h-6 bg-gray-900 flex items-center px-4">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="h-8 w-2/3 bg-purple-700 rounded mb-4"></div>
                        <div className="h-4 bg-purple-800 rounded mb-2"></div>
                        <div className="h-4 bg-purple-800 rounded mb-2"></div>
                        <div className="h-4 w-2/3 bg-purple-800 rounded mb-4"></div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="h-24 bg-indigo-700 rounded"></div>
                          <div className="h-24 bg-indigo-700 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "lms" && (
                  <div className="bg-gradient-to-br from-indigo-500 to-sky-600 rounded-xl shadow-2xl p-4 transform transition-all duration-500 animate-float">
                    <div className="bg-gray-800 rounded-lg overflow-hidden">
                      <div className="h-6 bg-gray-900 flex items-center justify-between px-4">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="w-1/4 bg-gray-900 p-2">
                          <div className="h-6 bg-indigo-700 rounded mb-2"></div>
                          <div className="h-6 bg-indigo-700 rounded mb-2"></div>
                          <div className="h-6 bg-indigo-700 rounded mb-2"></div>
                        </div>
                        <div className="w-3/4 p-4">
                          <div className="h-8 bg-indigo-700 rounded mb-4"></div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="h-20 bg-sky-700 rounded"></div>
                            <div className="h-20 bg-sky-700 rounded"></div>
                            <div className="h-20 bg-sky-700 rounded"></div>
                            <div className="h-20 bg-sky-700 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "apps" && (
                  <div className="bg-gradient-to-br from-sky-500 to-purple-600 rounded-xl shadow-2xl p-4 transform transition-all duration-500 animate-float">
                    <div className="bg-gray-800 rounded-2xl overflow-hidden w-64 mx-auto">
                      <div className="h-6 bg-black flex items-center justify-center">
                        <div className="w-24 h-4 bg-gray-900 rounded-full"></div>
                      </div>
                      <div className="p-4">
                        <div className="h-8 bg-sky-700 rounded-full mb-4"></div>
                        <div className="h-32 bg-sky-800 rounded-xl mb-4"></div>
                        <div className="flex space-x-2 mb-4">
                          <div className="h-4 w-4 bg-purple-600 rounded-full"></div>
                          <div className="h-4 w-4 bg-sky-600 rounded-full"></div>
                          <div className="h-4 w-4 bg-indigo-600 rounded-full"></div>
                        </div>
                        <div className="h-12 bg-sky-700 rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-indigo-900 to-purple-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-indigo-200 to-sky-200">
            Features That Set Us Apart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-800 to-indigo-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-12 w-12 bg-indigo-600 rounded-xl mb-4 flex items-center justify-center">
                  <div className="h-6 w-6 bg-sky-400 rounded-md"></div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-sky-900 to-indigo-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-indigo-200 to-sky-200">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gradient-to-br from-purple-800 to-indigo-900 p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-indigo-300 text-sm">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 italic">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-indigo-900 to-purple-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-indigo-200 to-sky-200">
            Ready to Transform Your Educational Experience?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of educational institutions that trust S9r Technology
            for their digital learning needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <ComButton
              customStyle={" px-10 py-4  bg-gradient-to-br from-purple-900"}
              title={"Schedule a call"}
              onClick={handleScheduleCall}
            >
              Schedule call
            </ComButton>
            <button onClick={() => {
                handleContactusRedirect();
              }} className="px-8 py-4 bg-transparent border-2 border-indigo-400 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:bg-indigo-900">
              Contact us
            </button>
          </div>
        </div>
      </section>
      <Footer />

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
