import React, { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import Footer from '../Footer/Footer';

export const Career = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen font-sans">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 h-screen" 
        style={{ 
          backgroundImage: "url('https://itsm.tools/wp-content/uploads/2020/07/successful-employees.png')", 
          backgroundAttachment: "fixed"
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
      </div>
      
      <div className="relative z-10">
        <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
          <Navbar />
        </div>
        
        <div className="container mx-auto px-4 pt-40 pb-24 text-white min-h-screen flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Build Your Future With Us</h1>
            <p className="text-xl mb-8">Join our team of innovators and make an impact in a collaborative environment where your ideas matter.</p>
            <button className="bg-blue-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg flex items-center">
              View Open Positions
              <span className="ml-2">→</span>
            </button>
          </div>
        </div>
        
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Why Join Our Team</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <span className="text-blue-600 text-2xl font-bold">🎓</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Continuous Learning</h3>
                <p className="text-gray-600">We invest in your growth with mentorship programs and learning opportunities tailored to your career goals.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="bg-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <span className="text-green-600 text-2xl font-bold">👥</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Collaborative Culture</h3>
                <p className="text-gray-600">Work alongside passionate professionals in an inclusive environment that values diverse perspectives.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="bg-purple-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <span className="text-purple-600 text-2xl font-bold">🏆</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Meaningful Impact</h3>
                <p className="text-gray-600">Contribute to projects that matter and see the direct impact of your work on our success.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="py-16 bg-gray-50 relative">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img 
                  src="https://www.datamation.lk/?w=890&h=574&src=resources/110/big.jpg" 
                  alt="Our company culture" 
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Culture</h2>
                <p className="text-gray-600 mb-4">
                  We believe that great work happens when people feel empowered, valued, and inspired. Our collaborative environment fosters innovation and personal growth.
                </p>
                <p className="text-gray-600 mb-6">
                  From team building activities to flexible work arrangements, we're committed to creating a workplace where you can thrive professionally and personally.
                </p>
                <button className="text-blue-600 font-semibold hover:text-blue-800 flex items-center">
                  Learn about our values
                  <span className="ml-1">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Current Openings</h2>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {title: "Senior Software Engineer", department: "Engineering", location: "San Francisco, CA"},
                {title: "UX/UI Designer", department: "Design", location: "Remote"},
                {title: "Product Manager", department: "Product", location: "New York, NY"},
                {title: "Marketing Specialist", department: "Marketing", location: "Chicago, IL"}
              ].map((job, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
                      <p className="text-gray-600 mb-3">{job.department} · {job.location}</p>
                    </div>
                    <span className="text-blue-600 text-xl">💼</span>
                  </div>
                  <button className="text-blue-600 font-semibold hover:text-blue-800 flex items-center mt-2">
                    Learn more
                    <span className="ml-1">→</span>
                  </button>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg">
                View All Openings
              </button>
            </div>
          </div>
        </div>
        
        <div className="py-16 bg-white relative">
          <div className="container mx-auto px-4">
            <div className="flex flex-col-reverse md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Benefits & Perks</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <div>
                      <h3 className="font-bold text-gray-800">Competitive Compensation</h3>
                      <p className="text-gray-600">Salary packages that recognize your skills and experience</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <div>
                      <h3 className="font-bold text-gray-800">Health & Wellness</h3>
                      <p className="text-gray-600">Comprehensive medical, dental, and vision plans</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <div>
                      <h3 className="font-bold text-gray-800">Work-Life Balance</h3>
                      <p className="text-gray-600">Flexible schedules and remote work options</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <div>
                      <h3 className="font-bold text-gray-800">Growth Opportunities</h3>
                      <p className="text-gray-600">Career development and advancement paths</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img 
                  src="https://www.hrmagazine.co.uk/media/xkjlz4td/article-images-2f158011-2fsocialmedia_distraction.jpg?width=1002&height=564&v=1d94200d70e1d80" 
                  alt="Company benefits" 
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Take the Next Step?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">Join our team and be part of building something extraordinary. We're looking for talented individuals who share our passion and vision.</p>
            <button className="bg-white text-blue-900 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg">
              Apply Now
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Career;