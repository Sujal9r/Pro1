import { useState, useEffect } from "react";
import Navbar from '../../components/layout/Navbar/Navbar';
import Footer from '../../components/layout/Footer/Footer';
import { useNavigate } from "react-router-dom";
import ComButton from '../../components/common/ComButton';

export default function FinancePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  const navigate = useNavigate();
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
      title: "Secure Transactions",
      description:
        "Bank-grade security protocols that protect every financial transaction",
      icon: "🔒",
    },
    {
      title: "Financial Analytics",
      description:
        "Real-time insights and reporting to track performance and growth",
      icon: "📊",
    },
    {
      title: "Multiple Payment Methods",
      description:
        "Support for all major payment gateways and financial instruments",
      icon: "💳",
    },
    {
      title: "Automated Reconciliation",
      description:
        "Smart systems that automatically balance accounts and identify discrepancies",
      icon: "🔄",
    },
  ];

  const testimonials = [
    {
      name: "Michael Chen",
      company: "NextGen Capital",
      text: "S9r's financial platform revolutionized our client onboarding process and increased transaction volume by 87%.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKk1V1KmnFNNxctMJ2oNGTXKCrxT8PhOZUtw&s",
    },
    {
      name: "Pookie Kid",
      company: "Global Investment Partners",
      text: "The security and analytics capabilities built by S9r gave our investors the confidence they needed in our digital platform.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi8BnEjvjFaqZGB6KPpTWA0b6ltUvgunIBdQ&s",
    },
    {
      name: "James Wilson",
      company: "Monarch Financial Services",
      text: "We needed a solution that could scale with our rapid growth. S9r delivered a robust platform that never misses a beat.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTybX4RJpXyLJFWEYHYjIspjl0F34hQ0f6H0w&s",
    },
  ];

  const financialStats = [
    {
      value: "$5B+",
      label: "Transactions Processed",
    },
    {
      value: "99.99%",
      label: "Uptime Guarantee",
    },
    {
      value: "150+",
      label: "Financial Institutions",
    },
    {
      value: "30+",
      label: "Countries Served",
    },
  ];

  const handleContactusRedirect = () => {
    navigate("/Contactus");
  };
  const handleScheduleCall = () => {
    window.open("https://calendly.com/sujalsukoimk5", "_blank");
  };

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
            Cutting-Edge Financial Technology Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-sky-100 max-w-3xl">
            S9r Technology builds secure, scalable financial platforms that
            power modern businesses and institutions.
          </p>

          <div className="flex flex-col md:flex-row gap-6">
            <button
              onClick={() => {
                handleDiscoverRedirect();
              }}
              className="bg-indigo-600 hover:bg-indigo-700 transform hover:scale-105 transition-all text-white font-bold py-3 px-8 rounded-lg text-lg shadow-lg"
            >
              Explore Solutions
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

      <section className="py-16 bg-indigo-800 bg-opacity-40 backdrop-blur-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {financialStats.map((stat, index) => (
              <div
                key={index}
                className="text-center transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold text-sky-300 mb-2">
                  {stat.value}
                </div>
                <p className="text-purple-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-indigo-900 bg-opacity-30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-sky-200">
            Enterprise-Grade Financial Features
          </h2>

          <div className="relative h-64 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full transition-all duration-700 transform ${
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

      <section className="py-20 px-4 bg-indigo-900 bg-opacity-40">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div
              className={`${
                scrollPosition > 800
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              } transition-all duration-1000`}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-sky-200">
                Bank-Grade Security for Your Financial Data
              </h2>

              <div className="space-y-6">
                {[
                  {
                    title: "End-to-End Encryption",
                    description:
                      "All data is encrypted in transit and at rest using AES-256 encryption",
                  },
                  {
                    title: "Multi-Factor Authentication",
                    description:
                      "Advanced identity verification to prevent unauthorized access",
                  },
                  {
                    title: "Fraud Detection Systems",
                    description:
                      "AI-powered monitoring to detect and prevent suspicious activities",
                  },
                  {
                    title: "Regulatory Compliance",
                    description:
                      "Solutions built to meet GDPR, PCI DSS, SOC 2, and other global standards",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-purple-900 bg-opacity-50 p-4 rounded-lg"
                  >
                    <h3 className="text-xl font-bold mb-2 text-sky-300">
                      {item.title}
                    </h3>
                    <p className="text-purple-100">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`bg-indigo-800 rounded-2xl p-6 shadow-2xl relative ${
                scrollPosition > 800
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              } transition-all duration-1000 delay-300`}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-sky-500 to-indigo-600 opacity-10 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="bg-indigo-700 p-3 rounded-lg inline-block mb-6">
                  <div className="text-4xl">🛡️</div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-sky-200">
                  Security Certifications
                </h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {["ISO 27001", "PCI DSS", "GDPR", "SOC 2"].map(
                    (cert, idx) => (
                      <div
                        key={idx}
                        className="bg-indigo-700 bg-opacity-50 p-3 rounded-lg text-center"
                      >
                        <p className="font-bold text-white">{cert}</p>
                      </div>
                    )
                  )}
                </div>
                <p className="text-purple-100 mb-6">
                  Our financial solutions adhere to the highest industry
                  security standards to protect your business and customer data.
                </p>
                <button className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-6 rounded-lg transition-colors">
                  Security Whitepaper
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-sky-200">
            Trusted by Financial Leaders
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

      <section className="py-16 px-4 bg-indigo-900 bg-opacity-30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12 text-sky-200">
            Integration Partners
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Stripe",
              "PayPal",
              "Visa",
              "Mastercard",
              "American Express",
              "Plaid",
              "Square",
              "Wise",
            ].map((partner, index) => (
              <div
                key={index}
                className="bg-indigo-800 bg-opacity-40 h-20 rounded-lg flex items-center justify-center transform hover:scale-105 transition-all duration-300"
              >
                <p className="font-bold text-purple-100">{partner}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-purple-800 via-indigo-800 to-sky-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Financial Operations?
          </h2>
          <p className="text-xl mb-12 text-sky-100">
            Let's build a secure, scalable financial platform tailored to your
            business needs.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-lg transform hover:scale-105 transition-all">
              Book a Demo
            </button>
            <button
              onClick={handleContactusRedirect}
              className="bg-transparent border-2 border-white hover:bg-white hover:text-indigo-800 text-white font-bold py-3 px-8 rounded-lg text-lg transform hover:scale-105 transition-all"
            >
              Contact us
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
