import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import { Navbar } from '../Navbar/Navbar';

const Support = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [issue, setIssue] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setName('');
    setEmail('');
    setIssue('');
    setMessage('');
  };

  return (
    <div className=" bg-gradient-to-b from-purple-800 via-indigo-700 to-sky-500 w-full">
        <Navbar/>
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16 mt-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Support Center</h1>
          <p className="text-xl text-sky-100">We're here to help you with any questions or issues</p>
        </div>

        {/* Main Content */}
        <div className="bg-white/95 rounded-xl shadow-2xl p-6 md:p-10 backdrop-blur-md mb-10">
          {submitted ? (
            <div className="text-center py-12">
              <div className="mb-6 text-6xl text-green-500">✓</div>
              <h2 className="text-3xl font-bold text-indigo-700 mb-4">Thank You!</h2>
              <p className="text-gray-700 text-lg mb-8">Your support request has been submitted successfully.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-lg rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all shadow-lg transform hover:scale-105"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <>
              {/* Support ki Categories */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <div className="bg-purple-100 p-6 rounded-xl shadow-md text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <div className="text-4xl mb-4">📘</div>
                  <h3 className="text-xl font-semibold text-purple-800 mb-2">Documentation</h3>
                  <p className="text-purple-600">Browse our detailed guides and tutorials</p>
                </div>
                <div className="bg-indigo-100 p-6 rounded-xl shadow-md text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <div className="text-4xl mb-4">💬</div>
                  <h3 className="text-xl font-semibold text-indigo-800 mb-2">Live Chat</h3>
                  <p className="text-indigo-600">Chat with our support team in real-time</p>
                </div>
                <div className="bg-sky-100 p-6 rounded-xl shadow-md text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <div className="text-4xl mb-4">📞</div>
                  <h3 className="text-xl font-semibold text-sky-800 mb-2">Call Us</h3>
                  <p className="text-sky-600">Speak directly with a support specialist</p>
                </div>
              </div>

              {/* Contact ka Form */}
              <div className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-inner">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 border-b pb-4">Contact Support</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium" htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium" htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium" htmlFor="issue">Issue Type</label>
                    <select
                      id="issue"
                      value={issue}
                      onChange={(e) => setIssue(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all appearance-none bg-white"
                      required
                    >
                      <option value="">Select an issue</option>
                      <option value="technical">Technical Problem</option>
                      <option value="billing">Billing Question</option>
                      <option value="account">Account Management</option>
                      <option value="feature">Feature Request</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium" htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                      required
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-500 text-white text-lg font-medium rounded-lg hover:opacity-90 transition-all shadow-lg transform hover:scale-105"
                    >
                      Submit Request
                    </button>
                  </div>
                </form>
              </div>
            </>
          )}
        </div>

        {/* FAQ wala Section */}
        <div className="bg-white/95 rounded-xl shadow-2xl p-6 md:p-10 backdrop-blur-md mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 border-b pb-4">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">How do I reset my password?</h3>
              <p className="text-gray-700">Visit the login page and click on "Forgot Password". Follow the instructions sent to your email to reset your password.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-purple-700 mb-3">When will I be charged for my subscription?</h3>
              <p className="text-gray-700">Your subscription is billed on the same day each month, starting from the date you initially subscribed.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-sky-700 mb-3">How can I upgrade my plan?</h3>
              <p className="text-gray-700">Log into your account, go to "Account Settings" and select "Subscription". From there you can view and change your current plan.</p>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="bg-white/95 rounded-xl shadow-2xl p-6 md:p-10 backdrop-blur-md mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 border-b pb-4">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Knowledge Base</h3>
              <p className="text-gray-700 mb-4">Access our extensive library of tutorials and how-to guides.</p>
              <div href="" className="text-blue-600 hover:underline font-medium">Browse Articles →</div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="text-xl font-semibold text-green-700 mb-3">Video Tutorials</h3>
              <p className="text-gray-700 mb-4">Watch step-by-step video guides for common tasks and features.</p>
              <div href="" className="text-green-600 hover:underline font-medium">Watch Now →</div>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
              <h3 className="text-xl font-semibold text-amber-700 mb-3">Community Forum</h3>
              <p className="text-gray-700 mb-4">Connect with other users and share tips and solutions.</p>
              <div href="" className="text-amber-600 hover:underline font-medium">Join Discussion →</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-indigo-900/80 rounded-xl shadow-xl p-8 backdrop-blur-md text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Need Immediate Assistance?</h3>
          <p className="text-xl text-white mb-6">Call us at 96726-32315<span className="font-bold"> SUPPORT</span></p>
          <div className="space-x-2 space-y-2">
            <p className="text-sky-100 text-lg">Available Monday - Friday, 10AM - 7PM EST</p>
            <div className="flex justify-center gap-6 mt-6">
              <div href="" className="text-white hover:text-sky-300 transition-colors">
                <span className="text-2xl">📱</span>
              </div>
              <div href="" className="text-white hover:text-sky-300 transition-colors">
                <span className="text-2xl">📧</span>
              </div>
              <div href="" className="text-white hover:text-sky-300 transition-colors">
                <span className="text-2xl">💬</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Support;