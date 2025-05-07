import React, { useState, useEffect } from 'react'
import { Header } from '../Navbar'
import Footer from '../Footer/Footer'

export default function ContactUs() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = () => {
    if (validateForm()) {
      // Simulate form submission
      setTimeout(() => {
        setSubmitted(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
      }, 800)
    }
  }

  return (
    <div className={`bg-gradient-to-br from-purple-900 via-indigo-800 to-purple-700 min-h-screen text-white overflow-hidden ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
    <div className='mt-[100px]'>
        <Header/>
    </div>
 
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 md:py-16 flex flex-col items-center">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} transition-all duration-1000`}>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-indigo-100 to-purple-200">
              Get in Touch
            </span>
          </h1>
          <p className={`text-lg text-indigo-200 max-w-2xl mx-auto transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} transition-all duration-1000 delay-200`}>
            We're here to answer your questions and explore how we can help your business grow with cutting-edge technology solutions.
          </p>
        </div>

        {/* Contact Form and Info Section */}
        <div className="w-full flex flex-col md:flex-row md:space-x-8 items-center md:items-start">
          {/* Contact Form */}
          <div className={`w-full md:w-2/3 mb-12 md:mb-0 transform ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'} transition-all duration-1000 delay-300`}>
            {submitted ? (
              <div className="bg-black bg-opacity-20 backdrop-blur-md rounded-3xl p-8 text-center animate-fade-in">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                <p className="mb-6">Thank you for reaching out. We'll get back to you as soon as possible.</p>
                <button 
                  onClick={() => setSubmitted(false)} 
                  className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full font-medium hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-opacity-50 transition-all duration-300"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <div className="bg-black bg-opacity-20 backdrop-blur-md rounded-3xl p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-6 text-center md:text-left">Contact Form</h2>
                <div className="mb-6">
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full p-3 bg-indigo-900 bg-opacity-50 rounded-lg border ${errors.name ? 'border-red-500' : 'border-indigo-600'} focus:outline-none focus:ring-2 focus:ring-purple-500`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="mt-1 text-red-400 text-sm">{errors.name}</p>}
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full p-3 bg-indigo-900 bg-opacity-50 rounded-lg border ${errors.email ? 'border-red-500' : 'border-indigo-600'} focus:outline-none focus:ring-2 focus:ring-purple-500`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="mt-1 text-red-400 text-sm">{errors.email}</p>}
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-3 bg-indigo-900 bg-opacity-50 rounded-lg border border-indigo-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="How can we help you?"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className={`w-full p-3 bg-indigo-900 bg-opacity-50 rounded-lg border ${errors.message ? 'border-red-500' : 'border-indigo-600'} focus:outline-none focus:ring-2 focus:ring-purple-500`}
                    placeholder="Write your message here..."
                  ></textarea>
                  {errors.message && <p className="mt-1 text-red-400 text-sm">{errors.message}</p>}
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full py-3 px-6 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full font-medium hover:from-indigo-600 hover:to-purple-700 transition-colors duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <span>Send Message</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div className={`w-full md:w-1/3 transform ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'} transition-all duration-1000 delay-500`}>
            <div className="bg-black bg-opacity-20 backdrop-blur-md rounded-3xl p-6 md:p-8 mb-6">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Visit Us</h3>
                    <p className="mt-1 text-indigo-200">178 , Ram Nagar Colony , Goner Road , Jaipur</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Call Us</h3>
                    <p className="mt-1 text-indigo-200">+91 96726-32315</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Email Us</h3>
                    <p className="mt-1 text-indigo-200">S9rtech@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-black bg-opacity-20 backdrop-blur-md rounded-3xl p-6 md:p-8">
              <h3 className="text-xl font-bold mb-4">Business Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday :</span>
                  <span>10:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Monday - Friday :</span>
                  <span>10:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Monday - Friday :</span>
                  <span>10:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Monday - Friday :</span>
                  <span>10:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Monday - Friday :</span>
                  <span>10:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>Closed</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className={`absolute rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 opacity-20 blur-3xl ${isLoaded ? 'opacity-20' : 'opacity-0'} transition-opacity duration-1000`}
            style={{
              width: `${Math.random() * 30 + 15}%`,
              height: `${Math.random() * 30 + 15}%`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          ></div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
      <Footer/>
    </div>
  )
}