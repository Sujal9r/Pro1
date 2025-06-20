import { useState, useEffect } from "react";
import Navbar from '../../components/layout/Navbar/Navbar';
import Footer from '../../components/layout/Footer/Footer';
import ComButton from '../../components/common/ComButton';

export default function WebDevelopment() {
  // eslint-disable-next-line
  const [activeService, setActiveService] = useState(null);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".animate-on-scroll");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isInViewport = rect.top <= window.innerHeight * 0.8;
        if (isInViewport) {
          setIsVisible((prev) => ({ ...prev, [section.id]: true }));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      id: 1,
      title: "AI Integration",
      description:
        "Implement cutting-edge artificial intelligence solutions tailored to your business needs.",
      icon: "✨",
      details:
        "Our AI Integration service helps businesses harness the power of artificial intelligence to automate processes, gain insights, and create new opportunities. We design custom AI solutions that integrate seamlessly with your existing systems.",
    },
    {
      id: 2,
      title: "Cloud Architecture",
      description:
        "Build scalable, secure, and efficient cloud infrastructure for your applications.",
      icon: "☁️",
      details:
        "We design and implement cloud architectures that provide flexibility, scalability, and cost-efficiency. Our team has expertise across major cloud platforms to ensure your infrastructure meets your performance and security requirements.",
    },
    {
      id: 3,
      title: "Cybersecurity",
      description:
        "Protect your digital assets with our comprehensive security solutions.",
      icon: "🔒",
      details:
        "Our cybersecurity services provide protection at every level. From penetration testing to security audits, we identify vulnerabilities before they become problems and implement robust security measures to keep your data safe.",
    },
    {
      id: 4,
      title: "Digital Transformation",
      description:
        "Revolutionize your business processes with end-to-end digital solutions.",
      icon: "🚀",
      details:
        "We guide organizations through the complex journey of digital transformation. Our approach focuses on people, processes, and technology to create meaningful change that drives business value and competitive advantage.",
    },
    {
      id: 5,
      title: "Web Development",
      description:
        "Create stunning, responsive websites with modern technologies.",
      icon: "💻",
      details:
        "From corporate websites to complex web applications, our development team delivers exceptional digital experiences. We focus on performance, accessibility, and user experience to ensure your web presence stands out.",
    },
    {
      id: 6,
      title: "Data Analytics",
      description:
        "Transform your data into actionable insights for business growth.",
      icon: "📊",
      details:
        "Our data analytics services help you make sense of your data. We build custom dashboards, implement BI solutions, and develop data pipelines that extract valuable insights to support your business decisions.",
    },
  ];

  const [pulse, setPulse] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setPulse((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleScheduleCall = () => {
  window.open('https://calendly.com/sujalsukoimk5','_blank')
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white">
      <Navbar />
      <section className="pt-40 pb-32 px-4 max-w-6xl mx-auto">
        <div className="relative">
          <div
            className={`absolute inset-0 bg-purple-500 rounded-full blur-3xl opacity-20 ${
              pulse ? "scale-105" : "scale-100"
            } transition-all duration-1000`}
          ></div>
          <div className="relative">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent mb-6 text-center  h-[26vh]">
              Innovative Services for the Digital Age
            </h1>
            <p className="text-xl md:text-2xl text-purple-200 text-center max-w-3xl mx-auto mb-10">
              S9r Technology delivers cutting-edge solutions that transform
              businesses and create exceptional digital experiences.
            </p>
            <div className="flex justify-center gap-6 flex-wrap">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-indigo-500/50">
                Get Started
              </button>
              <button className="bg-transparent border-2 border-purple-400 hover:bg-purple-800/30 text-purple-200 font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services-grid"
        className={`py-20 px-4 max-w-6xl mx-auto animate-on-scroll ${
          isVisible["services-grid"]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        } transition-all duration-1000`}
      >
        <h2 className="text-4xl font-bold text-center mb-16 relative">
          <span className="bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent">
            Our Services
          </span>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-4"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative overflow-hidden group bg-gradient-to-br from-indigo-800/40 to-purple-800/40 backdrop-blur-sm p-6 rounded-xl border border-indigo-700/50 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-3 text-purple-200">
                  {service.title}
                </h3>
                <p className="text-indigo-200/80 mb-6">{service.description}</p>
                <div className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-4 transition-all duration-300">
                  <p className="text-purple-300/70">{service.details}</p>
                </div>
                <button className="mt-4 text-sm font-medium text-purple-300 hover:text-white flex items-center transition-all duration-300">
                  Learn more
                  <span className="transform group-hover:translate-x-2 transition-transform duration-300 ml-2">
                    →
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="features"
        className={`py-20 px-4 max-w-6xl mx-auto animate-on-scroll ${
          isVisible["features"]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        } transition-all duration-1000`}
      >
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent">
              Why Choose S9r Technology?
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-600 flex items-center justify-center">
                  <span className="text-lg">⚡</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-purple-200 mb-2">
                    Cutting-edge Technology
                  </h3>
                  <p className="text-indigo-200/80">
                    We stay ahead of the curve with the latest technological
                    advancements to provide innovative solutions.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center">
                  <span className="text-lg">🔍</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-purple-200 mb-2">
                    Expert Consultation
                  </h3>
                  <p className="text-indigo-200/80">
                    Our team of experts provides tailored consultation to
                    address your specific business needs.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-600 flex items-center justify-center">
                  <span className="text-lg">🤝</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-purple-200 mb-2">
                    Collaborative Approach
                  </h3>
                  <p className="text-indigo-200/80">
                    We work closely with you as partners to ensure your vision
                    becomes reality.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center">
                  <span className="text-lg">🛡️</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-purple-200 mb-2">
                    Security First
                  </h3>
                  <p className="text-indigo-200/80">
                    We prioritize the security of your data and systems at every
                    step of our process.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 to-indigo-600/30 rounded-2xl blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-indigo-800/50 to-purple-800/50 backdrop-blur-md p-1 rounded-2xl border border-purple-500/30">
              <div className="bg-indigo-900/80 rounded-xl p-6 overflow-hidden">
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="bg-gradient-to-br from-purple-700/30 to-indigo-700/30 p-4 rounded-lg border border-purple-500/20 flex flex-col items-center justify-center aspect-square"
                    >
                      <div
                        className={`text-3xl mb-2 animate-bounce ${
                          i % 2 === 0 ? "text-purple-400" : "text-indigo-400"
                        }`}
                      >
                        {["📱", "💡", "⚙️", "📊"][i - 1]}
                      </div>
                      <div className="text-center text-sm font-medium text-purple-200">
                        {
                          [
                            "Mobile Solutions",
                            "Smart Ideas",
                            "Tech Integration",
                            "Data Insights",
                          ][i - 1]
                        }
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 h-24 rounded-lg bg-gradient-to-r from-indigo-700/30 to-purple-700/30 border border-purple-500/20 p-4 flex items-center justify-center">
                  <div className="w-full bg-indigo-900/60 h-4 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-500 to-indigo-400 w-2/4 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="process"
        className={`py-20 px-4 max-w-6xl mx-auto animate-on-scroll ${
          isVisible["process"]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        } transition-all duration-1000`}
      >
        <h2 className="text-4xl font-bold text-center mb-16 relative">
          <span className="bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent">
            Our Process
          </span>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-4"></div>
        </h2>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-indigo-500 hidden md:block transform -translate-x-1/2"></div>

          <div className="space-y-20">
            {[
              {
                title: "Discovery",
                description:
                  "We begin by understanding your business goals, challenges, and technical requirements through in-depth consultation.",
              },
              {
                title: "Strategy",
                description:
                  "Our team develops a comprehensive strategy and roadmap tailored to your specific needs and objectives.",
              },
              {
                title: "Development",
                description:
                  "We bring your vision to life using cutting-edge technologies and industry best practices.",
              },
              {
                title: "Implementation",
                description:
                  "We seamlessly integrate solutions into your existing systems with minimal disruption.",
              },
              {
                title: "Support",
                description:
                  "Our relationship continues with ongoing support, maintenance, and optimization of your solutions.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-8`}
              >
                <div className="md:w-1/2 relative">
                  <div
                    className={`pl-16 md:pl-0 ${
                      index % 2 === 0
                        ? "md:pr-16 text-left"
                        : "md:pl-16 text-left md:text-right"
                    }`}
                  >
                    <h3 className="text-2xl font-semibold mb-3 text-purple-200">
                      {step.title}
                    </h3>
                    <p className="text-indigo-200/80">{step.description}</p>
                  </div>
                </div>
                <div className="md:w-1/2 bg-gradient-to-br from-indigo-800/40 to-purple-800/40 backdrop-blur-sm p-6 rounded-xl border border-indigo-700/50 aspect-video flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-indigo-600/20 animate-pulse rounded-lg"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-5xl">
                      {["🔍", "📝", "👨‍💻", "🚀", "🛠️"][index]}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="cta"
        className={`py-20 px-4 animate-on-scroll ${
          isVisible["cta"]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        } transition-all duration-1000`}
      >
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-indigo-700/70 to-purple-700/70 backdrop-blur-lg p-12 rounded-2xl text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500/30 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-indigo-500/30 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
              Connect with our team today to discover how S9r Technology can
              help you achieve your digital transformation goals.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <ComButton
                customStyle={" px-10 py-4  bg-gradient-to-br from-purple-900"}
                title={"Schedule a call"}
                onClick={handleScheduleCall}
              >
                Schedule call
              </ComButton>
              <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
