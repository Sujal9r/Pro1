import React, { useState } from 'react';
import { Header } from '../Navbar';
import { Footer } from '../Footer';

export const Hire = () => {
  const developers = [
    {
      title: 'Full Stack Developer',
      description: 'Expert in building complete web applications with frontend and backend integration.',
      skills: ['HTML', 'JavaScript', 'Node.js', 'React', 'MongoDB'],
      experience: '5+ years',
      hourlyRate: '$40/hr',
      image: 'https://cdn.lucidpic.com/cdn-cgi/image/w=600,format=auto,metadata=none/66c43abe18502.png',
    },
    {
        title: 'Mobile Developer',
        description: 'Develops mobile applications for Android and iOS platforms.',
        skills: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
        experience: '4+ years',
        hourlyRate: '$42/hr',
        image: 'https://i.insider.com/5d683aa72e22af14b76710f8?width=800&format=jpeg&auto=webp',
      },
    {
      title: 'Frontend Developer',
      description: 'Specializes in creating responsive and user-friendly interfaces.',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
      experience: '3+ years',
      hourlyRate: '$35/hr',
      image: 'https://cdn.lucidpic.com/cdn-cgi/image/w=600,format=auto,metadata=none/66e2e5fbe0cca.png',
    },
    {
      title: 'Backend Developer',
      description: 'Focuses on server-side logic, database management, and API development.',
      skills: ['Node.js', 'Express.js', 'SQL', 'MongoDB', 'REST APIs'],
      experience: '4+ years',
      hourlyRate: '$38/hr',
      image: 'https://idsb.tmgrup.com.tr/ly/uploads/images/2023/11/14/301015.jpg',
    },
    {
      title: 'MERN Stack Developer',
      description: 'Builds robust web applications using the MERN stack (MongoDB, Express, React, Node).',
      skills: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      experience: '6+ years',
      hourlyRate: '$45/hr',
      image: 'https://assets.vogue.com/photos/5f1706c03a186c2bfadbd82c/master/w_2560%2Cc_limit/00_story.jpg',
    },
    {
      title: 'Mobile Developer',
      description: 'Develops mobile applications for Android and iOS platforms.',
      skills: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
      experience: '4+ years',
      hourlyRate: '$42/hr',
      image: 'https://i.insider.com/5d683aa72e22af14b76710f8?width=800&format=jpeg&auto=webp',
    },
  ];

  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactInfo({
      ...contactInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your message has been submitted!');
  };

  return (
    <>
      <Header />
      <div className="font-sans px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Hire <span className='text-purple-500'>Developers</span></h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {developers.map((dev, index) => (
            <div
              key={index}
              className="transform hover:scale-105 transition duration-300 rounded-lg shadow-lg p-6 text-center border-sky-700 border-[2px] shadow-purple-500"
            >
              <img
                src={dev.image}
                alt={dev.title}
                className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-purple-500"
              />
              <h2 className="text-2xl font-semibold mb-2">{dev.title}</h2>
              <p className="text-sm mb-4">{dev.description}</p>
              <h3 className="text-lg font-medium mb-2">Key Skills</h3>
              <ul className="text-sm list-disc list-inside mb-4">
                {dev.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
              <p className="text-sm font-semibold mb-2">Experience: {dev.experience}</p>
              <p className="text-sm font-semibold mb-4">Hourly Rate: {dev.hourlyRate}</p>
              <button className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-sky-900 transition">
                Hire
              </button>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold text-center mb-8">Contact Us for<span className='text-purple-500 text-3xl'> Hiring</span></h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 border border-purple-500 rounded-lg shadow-md bg-white">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={contactInfo.name}
              onChange={handleInputChange}
              className="w-full p-3 border border-purple-500 rounded-lg shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={contactInfo.email}
              onChange={handleInputChange}
              className="w-full p-3 border border-purple-500 rounded-lg shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={contactInfo.message}
              onChange={handleInputChange}
              className="w-full p-3 border border-sky-500 rounded-lg shadow-sm"
              required
            />
          </div>
          <button type="submit" className="bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};
