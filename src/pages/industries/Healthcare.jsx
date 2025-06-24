import { useState, useEffect } from "react";
import Navbar from '../../components/layout/Navbar/Navbar';
import Footer from '../../components/layout/Footer/Footer';
import { useNavigate } from "react-router-dom";
import ComButton from '../../components/common/ComButton';

export default function Healthcare() {
  // eslint-disable-next-line
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("emr");

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
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      position: "Medical Director, Northside Hospital",
      content:
        "S9r Technology transformed our patient care experience. Their platform is intuitive, secure, and our staff adopted it immediately.",
      avatar: "/api/placeholder/40/40",
    },
    {
      id: 2,
      name: "Michael Stevens",
      position: "CEO, MedFirst Clinic Network",
      content:
        "The customization options and HIPAA compliance made our transition to digital healthcare seamless. Highly recommended!",
      avatar: "/api/placeholder/40/40",
    },
    {
      id: 3,
      name: "Dr. Emily Chen",
      position: "Chief of Radiology, Central Medical Center",
      content:
        "S9r's attention to detail and understanding of healthcare workflows sets them apart from other providers we've worked with.",
      avatar: "/api/placeholder/40/40",
    },
  ];

  const features = [
    {
      title: "HIPAA Compliant",
      description:
        "Our platforms are built with security at the core, ensuring all patient data is protected according to strict healthcare standards.",
    },
    {
      title: "Seamless Integration",
      description:
        "Connect with existing healthcare systems, lab equipment, and third-party services with minimal disruption.",
    },
    {
      title: "Patient Engagement",
      description:
        "Improve patient outcomes with user-friendly portals, automated reminders, and personalized health information.",
    },
    {
      title: "Mobile-First Design",
      description:
        "Access critical patient information anywhere with fully responsive design optimized for all devices.",
    },
    {
      title: "Advanced Analytics",
      description:
        "Make data-driven decisions with powerful reporting tools and predictive analytics.",
    },
    {
      title: "24/7 Support",
      description:
        "Our dedicated healthcare support team is always available to help you resolve any issues.",
    },
  ];

    const handleScheduleCall = () => {
  window.open('https://calendly.com/sujalsukoimk5','_blank')
};

  const handleContactusRedirect = () => {
    navigate("/Contactus");
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-sky-900 text-white py-10">
      <Navbar />
      <section className="relative py-20 px-4 md:px-8 lg:px-16 overflow-hidden ">
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="mb-6 transform translate-y-0 opacity-100 transition-all duration-1000">
            <h1 className="text-4xl md:text-5xl h-[8vh] font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-indigo-300 to-sky-300">
              Revolutionizing Healthcare Technology
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Custom healthcare platforms that enhance patient care and
              streamline operations
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
            Our Healthcare Solutions
          </h2>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === "emr"
                  ? "bg-purple-600 text-white"
                  : "bg-purple-900 bg-opacity-50 text-gray-300"
              }`}
              onClick={() => setActiveTab("emr")}
            >
              EMR Systems
            </button>
            <button
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === "telehealth"
                  ? "bg-purple-600 text-white"
                  : "bg-purple-900 bg-opacity-50 text-gray-300"
              }`}
              onClick={() => setActiveTab("telehealth")}
            >
              Telehealth Platforms
            </button>
            <button
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === "apps"
                  ? "bg-purple-600 text-white"
                  : "bg-purple-900 bg-opacity-50 text-gray-300"
              }`}
              onClick={() => setActiveTab("apps")}
            >
              Healthcare Apps
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              {activeTab === "emr" && (
                <div className="animate-fadeIn">
                  <h3 className="text-2xl font-bold mb-4 text-purple-200">
                    Electronic Medical Records
                  </h3>
                  <p className="text-gray-200 mb-6">
                    Streamline your practice with intuitive, secure electronic
                    medical record systems designed specifically for healthcare
                    providers.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-purple-500 mr-3 mt-1">
                        ✓
                      </span>
                      <span>Intuitive clinical documentation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-purple-500 mr-3 mt-1">
                        ✓
                      </span>
                      <span>Secure patient data management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-purple-500 mr-3 mt-1">
                        ✓
                      </span>
                      <span>Seamless billing integration</span>
                    </li>
                  </ul>
                </div>
              )}

              {activeTab === "telehealth" && (
                <div className="animate-fadeIn">
                  <h3 className="text-2xl font-bold mb-4 text-indigo-200">
                    Telehealth Solutions
                  </h3>
                  <p className="text-gray-200 mb-6">
                    Connect with patients remotely through secure, high-quality
                    video consultations and remote monitoring tools.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-indigo-500 mr-3 mt-1">
                        ✓
                      </span>
                      <span>HD video consultations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-indigo-500 mr-3 mt-1">
                        ✓
                      </span>
                      <span>Remote patient monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-indigo-500 mr-3 mt-1">
                        ✓
                      </span>
                      <span>Integrated with your existing EMR</span>
                    </li>
                  </ul>
                </div>
              )}

              {activeTab === "apps" && (
                <div className="animate-fadeIn">
                  <h3 className="text-2xl font-bold mb-4 text-sky-200">
                    Healthcare Mobile Applications
                  </h3>
                  <p className="text-gray-200 mb-6">
                    Engage patients and improve outcomes with intuitive,
                    feature-rich mobile applications designed for modern
                    healthcare needs.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-sky-500 mr-3 mt-1">
                        ✓
                      </span>
                      <span>Patient engagement tools</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-sky-500 mr-3 mt-1">
                        ✓
                      </span>
                      <span>Medication reminders and tracking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-sky-500 mr-3 mt-1">
                        ✓
                      </span>
                      <span>Secure messaging and notifications</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-full max-w-md">
                {activeTab === "emr" && (
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
                        <div className="flex mb-4">
                          <div className="h-16 w-16 bg-purple-600 rounded-full mr-4"></div>
                          <div className="flex-1">
                            <div className="h-4 bg-purple-800 rounded mb-2"></div>
                            <div className="h-4 bg-purple-800 rounded mb-2"></div>
                            <div className="h-4 w-2/3 bg-purple-800 rounded"></div>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="h-24 bg-indigo-700 rounded"></div>
                          <div className="h-24 bg-indigo-700 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "telehealth" && (
                  <div className="bg-gradient-to-br from-indigo-500 to-sky-600 rounded-xl shadow-2xl p-4 transform transition-all duration-500 animate-float">
                    <div className="bg-gray-800 rounded-lg overflow-hidden">
                      <div className="h-6 bg-gray-900 flex items-center justify-between px-4">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                      <div className="p-4 bg-indigo-900">
                        <div className="bg-indigo-800 rounded-lg p-2 mb-3">
                          <div className="h-6 w-1/3 bg-indigo-700 rounded mb-2"></div>
                          <div className="flex justify-between items-center">
                            <div className="h-10 w-10 bg-indigo-600 rounded-full"></div>
                            <div className="h-10 w-10 bg-indigo-600 rounded-full"></div>
                          </div>
                        </div>
                        <div className="bg-indigo-800 rounded-lg p-2">
                          <div className="flex justify-center mb-2">
                            <div className="h-24 w-24 bg-indigo-600 rounded-lg"></div>
                          </div>
                          <div className="flex justify-center space-x-4">
                            <div className="h-8 w-8 bg-red-500 rounded-full"></div>
                            <div className="h-8 w-8 bg-green-500 rounded-full"></div>
                            <div className="h-8 w-8 bg-blue-500 rounded-full"></div>
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
                        <div className="grid grid-cols-2 gap-2 mb-4">
                          <div className="h-20 bg-sky-800 rounded-xl flex items-center justify-center">
                            <div className="h-10 w-10 bg-sky-600 rounded-full"></div>
                          </div>
                          <div className="h-20 bg-sky-800 rounded-xl flex items-center justify-center">
                            <div className="h-10 w-10 bg-sky-600 rounded-full"></div>
                          </div>
                          <div className="h-20 bg-sky-800 rounded-xl flex items-center justify-center">
                            <div className="h-10 w-10 bg-sky-600 rounded-full"></div>
                          </div>
                          <div className="h-20 bg-sky-800 rounded-xl flex items-center justify-center">
                            <div className="h-10 w-10 bg-sky-600 rounded-full"></div>
                          </div>
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
          <h2 className="h-[8vh] text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-indigo-200 to-sky-200">
            Healthcare Technology That Makes a Difference
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
          <h2 className="h-[7vh] text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-indigo-200 to-sky-200">
            Trusted by Healthcare Leaders
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
            Ready to Transform Your Healthcare Practice?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of healthcare providers that trust S9r Technology for
            their digital healthcare solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <ComButton
              customStyle={" px-10 py-4  bg-gradient-to-br from-purple-900"}
              title={"Schedule a call"}
              onClick={handleScheduleCall}
            >
              Schedule call
            </ComButton>
            <button onClick={handleContactusRedirect} className="px-8 py-4 bg-transparent border-2 border-indigo-400 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:bg-indigo-900">
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
