import { useState, useEffect } from "react";
import Footer from "../../Footer/Footer";
import { Navbar } from "../Navbar";

export default function UiuxDesign() {
  // eslint-disable-next-line
  const [isMenuOpen, setIsMenuOpen] = useState(false);
   // eslint-disable-next-line
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const sections = ["hero", "services", "work", "process", "contact"];
      const sectionElements = sections.map((id) => document.getElementById(id));

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section && window.scrollY >= section.offsetTop - 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      title: "UX Research",
      description:
        "We dive deep into user needs and behaviors to create experiences that truly resonate.",
      icon: "📊",
    },
    {
      title: "UI Design",
      description:
        "Beautiful, intuitive interfaces that captivate users and elevate your brand.",
      icon: "🎨",
    },
    {
      title: "Interaction Design",
      description:
        "Micro-interactions and animations that delight users and enhance usability.",
      icon: "✨",
    },
    {
      title: "Design Systems",
      description:
        "Scalable, consistent design frameworks that grow with your product.",
      icon: "📐",
    },
  ];

  const projects = [
    {
      title: "Finance App Redesign",
      description:
        "A complete overhaul of a fintech platform that increased user engagement by 43%",
      image:
        "https://www.arshakir.com/uploads/p2/full-preview-finance-app-dashboard-ui-template.png",
      color: "from-indigo-600 to-purple-600",
    },
    {
      title: "E-commerce Experience",
      description:
        "Reimagined shopping journey that boosted conversion rates by 37%",
      image:
        "https://okcredit-blog-images-prod.storage.googleapis.com/2021/04/ecommerce3-1.jpg",
      color: "from-purple-600 to-pink-500",
    },
    {
      title: "Health Dashboard",
      description:
        "Intuitive health monitoring interface for patients and healthcare providers",
      image:
        "https://cdn.prod.website-files.com/650c1bee516c4e723b11b29a/65206264927e177f8bd65950_651f6a5b0bcc2eb5956182ea_Top%252050%2520Healthcare%2520Companies%2520and%2520Their%2520Impact%2520on%2520the%2520Industry.webp",
      color: "from-indigo-500 to-blue-600",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery",
      description:
        "We learn about your business, users, and goals through workshops and research.",
    },
    {
      step: "02",
      title: "Strategy",
      description:
        "We develop a roadmap and design strategy aligned with your business objectives.",
    },
    {
      step: "03",
      title: "Design",
      description:
        "Our team creates stunning visuals and intuitive interactions through iterative design.",
    },
    {
      step: "04",
      title: "Validation",
      description:
        "We test with real users to ensure the design meets their needs and expectations.",
    },
    {
      step: "05",
      title: "Implementation",
      description:
        "We collaborate with developers to bring the design to life with pixel-perfect execution.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-950 text-white overflow-hidden">
      <Navbar />
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-indigo-600 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-violet-600 rounded-full opacity-10 blur-3xl"></div>
        <div
          className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-purple-900/20 to-transparent"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        ></div>
      </div>

      <section
        id="hero"
        className="min-h-screen pt-20 flex items-center relative overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
            transform: `scale(${1 + scrollY * 0.0005})`,
          }}
        ></div>

        <div className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-8 items-center">
          <div
            className="space-y-6 transform translate-y-0"
            style={{
              opacity: Math.max(0, 1 - scrollY * 0.002),
              transform: `translateY(${scrollY * 0.2}px)`,
            }}
          >
            <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-purple-500/30 text-sm text-purple-300 backdrop-blur-sm ">
              UI/UX Design Agency
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Crafting{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Digital Experiences
              </span>{" "}
              That Inspire
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-lg">
              We transform complex challenges into intuitive, beautiful user
              interfaces that drive business growth and user satisfaction.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transform hover:-translate-y-1 transition-all"
              >
                Get Started
              </a>
              <a
                href="#work"
                className="px-6 py-3 bg-gray-800/50 border border-purple-500/30 rounded-lg font-medium hover:bg-gray-800/80 transform hover:-translate-y-1 transition-all backdrop-blur-sm"
              >
                View Our Work
              </a>
            </div>
          </div>

          <div
            className="relative"
            style={{
              transform: `translateY(${scrollY * -0.1}px) rotate(${
                scrollY * 0.01
              }deg)`,
            }}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-xl border border-purple-500/30 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 backdrop-blur-sm transform rotate-12 animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full border border-indigo-500/30 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 backdrop-blur-sm"></div>

              <div className="absolute inset-0 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-500/30 shadow-2xl shadow-purple-500/20 backdrop-blur-sm transform hover:rotate-0 hover:scale-105 transition-all duration-500 group">
                <div className="h-8 bg-gray-800 flex items-center px-4 border-b border-gray-700/50">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="w-full h-48 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg mb-4 flex items-center justify-center group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-500">
                    <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold leading-tight">
                      S9r{" "}
                      <span className=" h-[10vh] bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent flex">
                        Technology
                      </span>
                    </h1>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 w-3/4 bg-gray-700 rounded"></div>
                    <div className="h-4 w-1/2 bg-gray-700 rounded"></div>
                    <div className="h-4 w-5/6 bg-gray-700 rounded"></div>
                    <div className="h-4 w-2/3 bg-gray-700 rounded"></div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <div className="h-16 bg-gray-700/50 rounded"></div>
                    <div className="h-16 bg-gray-700/50 rounded"></div>
                    <div className="h-16 bg-gray-700/50 rounded"></div>
                    <div className="h-16 bg-gray-700/50 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a
            href="#services"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </section>

      <section id="services" className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                UI/UX Services
              </span>
            </h2>
            <p className="text-gray-300">
              We offer end-to-end design solutions that transform your ideas
              into exceptional digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10 transform hover:-translate-y-2 transition-all group"
              >
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-indigo-600/20 to-purple-600/20 flex items-center justify-center mb-4 group-hover:from-indigo-600/30 group-hover:to-purple-600/30 transition-all">
                  <span className="text-3xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-6 md:p-8 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-sm rounded-xl border border-purple-500/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Why Choose S9r Technology?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mt-1 w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>
                      Human-centered design approach that puts users first
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>
                      Collaborative process with transparent communication
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>Data-driven decisions backed by user research</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>
                      Pixel-perfect execution with attention to detail
                    </span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-600/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-600/20 rounded-full blur-2xl"></div>
                <div className="relative p-4 md:p-6 bg-gray-800/70 rounded-lg border border-purple-500/30 backdrop-blur-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center mr-4">
                      <span className="font-bold text-xl">S9r</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">
                        Get a Free UI/UX Consultation
                      </h4>
                      <p className="text-sm text-gray-400">
                        No strings attached
                      </p>
                    </div>
                  </div>
                  <form className="space-y-3">
                    <div>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 bg-gray-900/70 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-sm"
                      />
                    </div>
                    <button
                      type="button"
                      className="w-full px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all text-sm"
                    >
                      Schedule Consultation
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="py-24 relative">
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"
          style={{
            transform: `translateY(${(scrollY - 1000) * 0.1}px)`,
          }}
        ></div>

        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Featured Work
              </span>
            </h2>
            <p className="text-gray-300">
              See how we've helped clients achieve their business goals through
              exceptional user experiences.
            </p>
          </div>

          <div className="space-y-24">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`order-2 ${
                    index % 2 === 1 ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <div className="relative">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-30 blur-2xl transform -translate-y-4 translate-x-4`}
                    ></div>
                    <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden group transform hover:-translate-y-2 transition-all hover:shadow-xl hover:shadow-purple-500/10 hover:border-purple-500/30">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                        <div className="p-6">
                          <h4 className="text-lg font-semibold mb-2">
                            {project.title}
                          </h4>
                          <p className="text-gray-300 text-sm">
                            {project.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`space-y-4 order-1 ${
                    index % 2 === 1 ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <h3 className="text-2xl md:text-3xl font-bold">
                    {project.title}
                  </h3>
                  <p className="text-gray-300">{project.description}</p>
                  <div className="pt-4 flex flex-wrap gap-2">
                    {["UX Research", "UI Design", "Prototyping", "Testing"].map(
                      (tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-800/70 border border-purple-500/20 rounded-full text-xs text-gray-300"
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                  <div className="pt-4">
                    <div
                      href="#"
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      View Case Study
                      <svg
                        className="w-5 h-5 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div
              href="#"
              className="inline-flex items-center px-6 py-3 bg-gray-800/70 border border-purple-500/30 rounded-lg font-medium hover:bg-gray-800 transform hover:-translate-y-1 transition-all backdrop-blur-sm"
            >
              View All Projects
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section
        id="process"
        className="py-24 relative bg-gradient-to-br from-gray-900 via-indigo-950/50 to-gray-900"
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Design Process
              </span>
            </h2>
            <p className="text-gray-300">
              A streamlined approach that delivers results without unnecessary
              complexity.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="relative mb-6 last:mb-0">
                {index < processSteps.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-px bg-gradient-to-b from-purple-500 to-indigo-500 opacity-30"></div>
                )}

                <div className="flex">
                  <div className="flex-shrink-0 mr-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 flex-grow transform hover:-translate-x-2 transition-all hover:border-purple-500/40">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-sm rounded-xl border border-purple-500/20 p-6 md:p-8 max-w-4xl mx-auto">
            <div className="md:flex items-center">
              <div className="md:w-2/3 md:pr-6 mb-6 md:mb-0">
                <h3 className="text-xl font-semibold mb-3">
                  Ready to Transform Your User Experience?
                </h3>
                <p className="text-gray-300">
                  Let's collaborate to create intuitive, beautiful interfaces
                  that your users will love and that drive business results.
                </p>
              </div>
              <div className="md:w-1/3">
                <a
                  href="#contact"
                  className="block w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-medium text-center hover:shadow-lg hover:shadow-purple-500/25 transform hover:-translate-y-1 transition-all"
                >
                  Start Your Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/10 to-transparent"></div>

        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Clients Say
              </span>
            </h2>
            <p className="text-gray-300">
              Don't just take our word for it. Here's what our clients have to
              say about working with us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "S9r Technology transformed our outdated interface into a modern, intuitive experience that our users love. The impact on our business metrics was immediate and substantial.",
                name: "Sarah Johnson",
                title: "Product Director, FinTech Solutions",
              },
              {
                quote:
                  "Working with S9r was seamless from start to finish. Their design process is thorough and collaborative, and the results speak for themselves. Our conversion rate increased by 40%.",
                name: "Michael Chen",
                title: "CEO, E-commerce Platform",
              },
              {
                quote:
                  "The team at S9r doesn't just deliver beautiful designs; they create strategic solutions that address real business challenges. They've become an invaluable partner for our company.",
                name: "Jessica Rodriguez",
                title: "CMO, SaaS Company",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10 transform hover:-translate-y-2 transition-all"
              >
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 mr-1">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 italic mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 mr-3 flex items-center justify-center font-bold text-sm">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 relative overflow-hidden rounded-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-90"></div>
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: 'url("/api/placeholder/1400/400")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                mixBlendMode: "overlay",
                opacity: 0.2,
              }}
            ></div>
            <div className="relative p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Elevate Your Digital Experience?
              </h3>
              <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
                Join the hundreds of businesses that have transformed their
                digital products with our expert UI/UX design services.
              </p>
              <a
                href="#contact"
                className="px-8 py-4 bg-white text-purple-800 rounded-lg font-medium hover:shadow-lg hover:shadow-white/25 transform hover:-translate-y-1 transition-all inline-block"
              >
                Let's Create Something Amazing
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get In{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <p className="text-gray-300">
              Ready to start your next project? Contact us today for a free
              consultation.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 max-w-5xl mx-auto">
            <div className="md:col-span-2 space-y-6">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-lg bg-indigo-600/20 flex items-center justify-center mr-4 text-indigo-400">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Email Us</h4>
                    <p className="text-sm text-purple-400">
                      s9rtechnology@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-lg bg-indigo-600/20 flex items-center justify-center mr-4 text-indigo-400">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Call Us</h4>
                    <p className="text-sm text-purple-400">96726-32315</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-lg bg-indigo-600/20 flex items-center justify-center mr-4 text-indigo-400">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Visit Us</h4>
                    <p className="text-sm text-purple-400">
                      178 , ram nagar , Goner Road , Jaipur{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-3 bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-900/70 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-gray-900/70 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-sm"
                      placeholder="Your email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-900/70 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-sm"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">
                    Message
                  </label>
                  <textarea
                    className="w-full px-4 py-3 bg-gray-900/70 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-sm min-h-[120px]"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <div>
                  <button
                    type="button"
                    className="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Arrow jo Top pr leke jaye */}
      <a
        href="#hero"
        className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-purple-500/25 transform hover:-translate-y-1 transition-all"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </a>
    </div>
  );
}
