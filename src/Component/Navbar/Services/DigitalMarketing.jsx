import { useState, useEffect } from "react";
import { Navbar } from "../Navbar";
import Footer from "../../Footer/Footer";
import { useNavigate } from "react-router-dom";
import { ComButton } from "../../Common/ComButton";

export default function DigitalMarketing() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  const navigate = useNavigate();
  const handlePortfolioRedirect = () => {
    navigate("/portfolio");
  };

  const handleDiscoverRedirect = () => {
    navigate("/Discover");
  };

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, []);

  const features = [
    {
      title: "Responsive Design",
      description:
        "Websites that look stunning on every device from mobile to desktop",
      icon: "🖥️",
    },
    {
      title: "Animated UI/UX",
      description:
        "Smooth, eye-catching animations that enhance user experience",
      icon: "✨",
    },
    {
      title: "Secure Payment Gateway",
      description:
        "Multiple payment options with top-tier security for your customers",
      icon: "🔒",
    },
    {
      title: "Inventory Management",
      description:
        "Real-time tracking and automated stock management solutions",
      icon: "📦",
    },
  ];

    const handleScheduleCall = () => {
  window.open('https://calendly.com/sujalsukoimk5','_blank')
};

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Fashion Forward",
      text: "S9r transformed our online presence! Our sales increased by 140% in just three months.",
      image: "/api/placeholder/64/64",
    },
    {
      name: "Mark Zhang",
      company: "TechGadgets",
      text: "The most responsive and creative team we've worked with. Our e-commerce store is now our biggest sales channel.",
      image: "/api/placeholder/64/64",
    },
    {
      name: "Priya Patel",
      company: "Artisan Crafts",
      text: "We needed a solution that highlighted our product details. S9r delivered beyond our expectations.",
      image: "/api/placeholder/64/64",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-purple-900 via-indigo-900 to-sky-900 text-white min-h-screen">
      <Navbar />
      <section
        className={`pt-20 pb-32 px-4 md:px-12 transition-all duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto mt-[100px]">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-indigo-300 to-sky-300">
            Transform Your Business with Custom E-commerce Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-sky-100 max-w-3xl">
            S9r Technology builds powerful, beautiful online stores that convert
            visitors into customers.
          </p>

          <div className="flex flex-col md:flex-row gap-6">
            <button
              onClick={() => {
                handleDiscoverRedirect();
              }}
              className="bg-indigo-600 hover:bg-indigo-700 transform hover:scale-105 transition-all text-white font-bold py-3 px-8 rounded-lg text-lg shadow-lg"
            >
              Get Started
            </button>
            <button
              onClick={() => {
                handlePortfolioRedirect();
              }}
              className="bg-transparent border-2 border-sky-400 hover:bg-sky-900 transform hover:scale-105 transition-all text-sky-300 font-bold py-3 px-8 rounded-lg text-lg"
            >
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-indigo-900 bg-opacity-30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-sky-200">
            Powerful E-commerce Features
          </h2>

          <div className="relative h-64 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className={` flex absolute top-0 w-[70vw] justify-center transition-all duration-700 transform ${
                  index === activeFeature
                    ? "opacity-100 translate-x-0"
                    : index < activeFeature
                    ? "opacity-0 -translate-x-full"
                    : "opacity-0 translate-x-full"
                }`}
              >
                <div className="bg-gradient-to-r from-purple-800 to-indigo-800 p-8 rounded-2xl shadow-2xl">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-bold mb-2 text-sky-200">
                    {feature.title}
                  </h3>
                  <p className="text-purple-100">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveFeature(index)}
                className={`w-3 h-3 rounded-full ${
                  index === activeFeature ? "bg-sky-400" : "bg-indigo-600"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-indigo-900 bg-opacity-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-20 text-sky-200">
            Our E-commerce Development Process
          </h2>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-indigo-600"></div>

            {[
              {
                title: "Discovery & Planning",
                description:
                  "We analyze your business needs and create a comprehensive development plan.",
                icon: "🔍",
              },
              {
                title: "Design & Prototyping",
                description:
                  "Our designers create stunning mockups and interactive prototypes for your approval.",
                icon: "🎨",
              },
              {
                title: "Development",
                description:
                  "Our expert developers bring the designs to life with clean, efficient code.",
                icon: "💻",
              },
              {
                title: "Testing & Quality Assurance",
                description:
                  "Rigorous testing across devices and browsers ensures everything works perfectly.",
                icon: "🧪",
              },
              {
                title: "Launch & Support",
                description:
                  "We launch your store and provide ongoing support to ensure continued success.",
                icon: "🚀",
              },
            ].map((step, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center mb-12 md:mb-20 relative ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div
                  className={`w-full md:w-1/2 px-6 md:px-12 ${
                    scrollPosition > 800 + index * 100
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  } transition-all duration-1000`}
                >
                  <div className="bg-gradient-to-r from-purple-800 to-indigo-800 p-6 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-bold mb-3 text-sky-200">
                      {step.title}
                    </h3>
                    <p className="text-purple-100">{step.description}</p>
                  </div>
                </div>

                <div className="flex items-center justify-center w-12 h-12 bg-indigo-600 rounded-full border-4 border-purple-900 text-white text-xl z-10 my-4 md:my-0">
                  {step.icon}
                </div>

                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-sky-200">
            What Our Clients Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-indigo-800 to-purple-900 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-sky-400"
                  />
                  <div>
                    <h4 className="font-bold text-sky-200">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-purple-200">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="italic text-purple-100">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-purple-800 via-indigo-800 to-sky-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Online Business?
          </h2>
          <p className="text-xl mb-12 text-sky-100">
            Let's build an e-commerce solution that drives sales and delights
            your customers.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-lg transform hover:scale-105 transition-all">
              Request a Quote
            </button>
            <ComButton
              customStyle={" px-10 py-4  bg-gradient-to-br from-purple-900"}
              title={"Schedule a call"}
              onClick={handleScheduleCall}
            >
              Schedule call
            </ComButton>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
