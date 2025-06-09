import React, { useState, useEffect, useRef } from "react";
import Navbar from '../../components/layout/Navbar/Navbar';
import Footer from '../../components/layout/Footer/Footer';
import { useNavigate } from "react-router-dom";

export const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const currentPos = window.scrollY + window.innerHeight / 2;
      let active = 0;

      sectionsRef.current.forEach((section, index) => {
        if (section && currentPos >= section.offsetTop) {
          active = index;
        }
      });

      setActiveSection(active);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const addSectionRef = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  const navigate = useNavigate();

  const handleContactusRedirect = () => {
    navigate("/Contactus");
  };
  const handleSupportRedirect = () => {
    navigate("/Support");
  };

  const getAnimationClass = (index) => {
    return index === activeSection
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-10";
  };

  return (
    <div className="font-sans overflow-x-hidden">
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrollY > 100 ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <Navbar />
      </div>

      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaHxlbnwwfHwwfHx8MA%3D%3D')",
              transform: `scale(${1 + scrollY * 0.0005}) translateY(${
                scrollY * 0.1
              }px)`,
              opacity: Math.max(0, 1 - scrollY * 0.002),
              transition: "transform 0.1s ease-out",
            }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-purple-900/90"
            style={{ opacity: Math.min(1, 0.7 + scrollY * 0.001) }}
          />
        </div>

        <div className="relative h-full flex items-center justify-center px-6">
          <div
            className="text-center max-w-4xl"
            style={{ transform: `translateY(${-scrollY * 0.3}px)` }}
          >
            <h1 className="text-3xl md:text-6xl font-bold mb-6 text-white tracking-tight">
              <span className="block transform transition-transform duration-500 hover:scale-105">
                Creative Excellence
              </span>
              <span className="block mt-2 text-2xl md:text-5xl text-blue-200">
                Your Vision, Our Expertise
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Turning innovative ideas into stunning digital experiences that
              stand out in today's competitive landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => {
                  handleSupportRedirect();
                }} className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-2 md:py-3 px-6 md:px-8 rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm md:text-base">
                Support
              </button>
              <button
                onClick={() => {
                  handleContactusRedirect();
                }}
                className="bg-transparent border-2 border-white text-white font-bold py-2 md:py-3 px-6 md:px-8 rounded-full hover:bg-white/10 transform transition-all duration-300 hover:scale-105 text-sm md:text-base"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          style={{ opacity: Math.max(0, 1 - scrollY * 0.01) }}
        >
          <div className="w-8 md:w-10 h-8 md:h-10 flex items-center justify-center rounded-full bg-white/30 backdrop-blur-md">
            <span className="text-white text-xl md:text-2xl">↓</span>
          </div>
        </div>
      </section>

      <section
        ref={addSectionRef}
        className="py-16 md:py-20 bg-gradient-to-br from-gray-900 to-blue-900"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div
            className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${getAnimationClass(
              0
            )}`}
          >
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              Our Expertise
            </h2>
            <div className="w-16 md:w-20 h-1 bg-blue-400 mx-auto mb-6"></div>
            <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
              We transform ideas into remarkable digital experiences through our
              comprehensive suite of services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {[
              {
                icon: "🎨",
                title: "Creative Design",
                desc: "Crafting visually stunning interfaces that captivate and engage your audience.",
                color: "from-blue-400 to-blue-600",
                image:
                  "https://img.freepik.com/free-photo/representations-user-experience-interface-design_23-2150104516.jpg?semt=ais_hybrid&w=740",
              },
              {
                icon: "💻",
                title: "Web Development",
                desc: "Building powerful, responsive websites with cutting-edge technology stacks.",
                color: "from-purple-400 to-purple-600",
                image:
                  "https://miro.medium.com/v2/resize:fit:1200/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg",
              },
              {
                icon: "📱",
                title: "Mobile Applications",
                desc: "Developing intuitive mobile experiences that users love to interact with.",
                color: "from-pink-400 to-pink-600",
                image:
                  "https://t3.ftcdn.net/jpg/05/00/79/02/360_F_500790266_gaZS8kRQeZsUbD1zKOJJ8bjI0uwNLghi.jpg",
              },
            ].map((service, index) => (
              <div
                key={index}
                className={`bg-white/5 backdrop-blur-lg rounded-xl p-4 md:p-8 transform transition-all duration-700 delay-${
                  index * 200
                } hover:scale-105 hover:shadow-xl ${getAnimationClass(0)}`}
              >
                <div className="mb-4 md:mb-6 rounded-lg overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-32 md:h-40 object-cover"
                  />
                </div>
                <div
                  className={`bg-gradient-to-br ${service.color} w-12 h-12 md:w-16 md:h-16 rounded-lg flex items-center justify-center mb-4 md:mb-6 shadow-lg`}
                >
                  <span className="text-xl md:text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-4">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-gray-300">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={addSectionRef} className="py-16 md:py-20 bg-indigo-300">
        <div className="container mx-auto px-4 md:px-6">
          <div
            className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${getAnimationClass(
              1
            )}`}
          >
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
              Featured Work
            </h2>
            <div className="w-16 md:w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
              Explore our latest projects and see how we've helped clients
              achieve their digital goals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                title: "Modern E-commerce",
                category: "Web Design",
                image: "https://i.ytimg.com/vi/3l8Lob4ysI0/maxresdefault.jpg",
              },
              {
                title: "Finance Dashboard",
                category: "UI/UX",
                image:
                  "https://www.geckoboard.com/uploads/Cashflow-dashboard-example.png",
              },
              {
                title: "Travel App",
                category: "Mobile",
                image:
                  "https://d32myzxfxyl12w.cloudfront.net/assets/images/article_images/823b1ed0f9fd80db3592760d92eb9036df3433e1.webp?1702569414",
              },
              {
                title: "Brand Identity",
                category: "Branding",
                image:
                  "https://bcassetcdn.com/public/blog/wp-content/uploads/2020/10/19163806/Header-Developing-a-Brand-Identity-for-Beginners-B.png",
              },
              {
                title: "News Platform",
                category: "Web Development",
                image:
                  "https://www.apptunix.com/blog/wp-content/uploads/sites/3/2021/07/cost.jpg",
              },
              {
                title: "Social Network",
                category: "Full Stack",
                image:
                  "https://visiblenetworklabs.com/wp-content/uploads/2023/01/Foundations-SNA.png",
              },
            ].map((project, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-lg shadow-lg transition-all duration-700 delay-${
                  index * 100
                } ${getAnimationClass(1)}`}
              >
                <div className="aspect-[4/3] bg-gray-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4 md:p-6">
                  <span className="text-xs md:text-sm text-blue-300 font-medium mb-1 md:mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-base md:text-xl font-bold text-white mb-1 md:mb-2">
                    {project.title}
                  </h3>
                  <button className="mt-2 md:mt-4 text-sm md:text-base text-white border-b-2 border-blue-400 inline-block self-start pb-1 hover:border-white transition-colors duration-300">
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={addSectionRef}
        className="py-16 md:py-20 bg-gradient-to-br from-blue-800 to-indigo-900"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div
            className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${getAnimationClass(
              2
            )}`}
          >
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              Meet Our Team
            </h2>
            <div className="w-16 md:w-20 h-1 bg-blue-400 mx-auto mb-6"></div>
            <p className="text-sm md:text-base text-blue-100 max-w-2xl mx-auto">
              Our talented professionals bring creativity, expertise, and
              passion to every project.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {[
              {
                name: "Alex Thompson",
                role: "Creative Director",
                image:
                  "https://img.freepik.com/free-photo/businessman-black-suit-with-tie-posing_114579-15877.jpg?semt=ais_hybrid&w=740",
              },
              {
                name: "Sarah Chen",
                role: "Lead Developer",
                image:
                  "https://media.istockphoto.com/id/995745018/photo/portrait-of-afro-girl-in-eyeglasses.jpg?s=612x612&w=0&k=20&c=REq3ZFh_hSTIz9Serg18vojyrYmid17s4neVfRmDi30=",
              },
              {
                name: "Marcus Lee",
                role: "UX Designer",
                image:
                  "https://img.freepik.com/premium-photo/portrait-asian-businessman-wearing-suit-blue-background_960396-63478.jpg",
              },
              {
                name: "Jessica Patel",
                role: "Project Manager",
                image:
                  "https://img.freepik.com/premium-photo/business-woman-blue-suit-white-background_564692-62769.jpg",
              },
            ].map((member, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-md rounded-xl overflow-hidden transform transition-all duration-700 delay-${
                  index * 150
                } hover:translate-y-[-10px] ${getAnimationClass(2)}`}
              >
                <div className="aspect-[3/4] bg-gray-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 md:p-6">
                  <h3 className="text-base md:text-xl font-bold text-white">
                    {member.name}
                  </h3>
                  <p className="text-xs md:text-base text-blue-200">
                    {member.role}
                  </p>
                  <div className="flex space-x-3 md:space-x-4 mt-2 md:mt-4">
                    <div
                      href="#"
                      className="text-blue-300 hover:text-white transition-colors text-sm md:text-base"
                    >
                      <span>🔗</span>
                    </div>
                    <div
                      href="#"
                      className="text-blue-300 hover:text-white transition-colors text-sm md:text-base"
                    >
                      <span>📧</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={addSectionRef} className="py-16 md:py-20 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div
            className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${getAnimationClass(
              3
            )}`}
          >
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
              Client Testimonials
            </h2>
            <div className="w-16 md:w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
              What our clients say about working with our team.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div
              className={`bg-white rounded-2xl shadow-xl p-6 md:p-10 transition-all duration-1000 ${getAnimationClass(
                3
              )}`}
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-10">
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden flex-shrink-0 shadow-lg">
                  <img
                    src="https://media.istockphoto.com/id/2063799507/photo/business-portrait-and-black-man-in-city-outdoor-for-career-or-job-of-businessman-face.jpg?s=612x612&w=0&k=20&c=DB5oXy7_aasPbpr7zfpfV92ZYsPIQfFWLyweKEz_UVs="
                    alt="Client"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <svg
                    className="h-6 w-6 md:h-8 md:w-8 text-blue-500 mb-3 md:mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-sm md:text-lg text-gray-700 mb-4 md:mb-6 italic">
                    "Working with S9r Technology team has been an absolute
                    pleasure. Their attention to detail and creative approach
                    exceeded our expectations. The final product perfectly
                    captured our brand's essence while meeting all our technical
                    requirements."
                  </p>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base md:text-lg">
                      Tanish
                    </h4>
                    <p className="text-xs md:text-base text-blue-600">
                      Marketing Director, TechVision Inc.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-6 md:mt-8 gap-2">
              {[0, 1, 2].map((i) => (
                <button
                  key={i}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
                    i === 0 ? "bg-blue-500" : "bg-gray-300"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        ref={addSectionRef}
        className="relative py-16 md:py-20 bg-gradient-to-br from-gray-900 to-blue-900 overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-1/4 left-1/4 w-24 md:w-40 h-24 md:h-40 rounded-full bg-blue-500/20 blur-3xl"
            style={{
              transform: `translate(${scrollY * 0.02}px, ${-scrollY * 0.01}px)`,
            }}
          ></div>
          <div
            className="absolute bottom-1/3 right-1/5 w-32 md:w-60 h-32 md:h-60 rounded-full bg-purple-500/20 blur-3xl"
            style={{
              transform: `translate(${-scrollY * 0.03}px, ${scrollY * 0.01}px)`,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative">
          <div
            className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${getAnimationClass(
              4
            )}`}
          >
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <div className="w-16 md:w-20 h-1 bg-blue-400 mx-auto mb-6"></div>
            <p className="text-sm md:text-base text-blue-100 max-w-2xl mx-auto">
              Ready to start your next project? Contact us today for a free
              consultation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <div
              className={`transition-all duration-1000 delay-200 ${getAnimationClass(
                4
              )}`}
            >
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8">
                <div className="mb-4 md:mb-6 rounded-lg overflow-hidden"></div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start">
                    <span className="text-blue-300 mr-3 md:mr-4 text-base md:text-lg">
                      📍
                    </span>
                    <div>
                      <h4 className="font-bold text-white text-sm md:text-base">
                        Address
                      </h4>
                      <p className="text-xs md:text-base text-blue-100">
                        178 , Ram Nagar Colony , Goner Road , Jaipur
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-300 mr-3 md:mr-4 text-base md:text-lg">
                      📞
                    </span>
                    <div>
                      <h4 className="font-bold text-white text-sm md:text-base">
                        Phone
                      </h4>
                      <p className="text-xs md:text-base text-blue-100">
                        9672632315
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-300 mr-3 md:mr-4 text-base md:text-lg">
                      ✉️
                    </span>
                    <div>
                      <h4 className="font-bold text-white text-sm md:text-base">
                        Email
                      </h4>
                      <p className="text-xs md:text-base text-blue-100">
                        s9rtechnology@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`transition-all duration-1000 delay-400 ${getAnimationClass(
                4
              )}`}
            >
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-xl">
                <div className="mb-4 md:mb-6 rounded-lg overflow-hidden"></div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">
                  Send a Message
                </h3>
                <form>
                  <div className="mb-3 md:mb-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg bg-gray-100 border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:bg-white text-sm md:text-base"
                    />
                  </div>
                  <div className="mb-3 md:mb-4">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg bg-gray-100 border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:bg-white text-sm md:text-base"
                    />
                  </div>
                  <div className="mb-4">
                    <textarea
                      rows="4"
                      placeholder="Your Message"
                      className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:bg-white"
                    ></textarea>
                  </div>
                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-sm md:text-base">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    <Footer/>
    </div>
  );
};

export default Portfolio;
