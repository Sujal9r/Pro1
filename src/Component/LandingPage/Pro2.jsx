import React from 'react';

export const Pro2 = () => {
  const data = [
    {
      icon: '💡',
      title : 'Innovative Solutions',
      description:
        'We bring fresh ideas and creative solutions to every project, ensuring your web solutions stand out in the digital space.',
    },
    {
      icon: '✨',
      title: 'Attention to Detail',
      description:
        'Precision and perfection define us. We focus on every detail to deliver flawless and polished solutions.',
    },
    {
      icon: '🤖',
      title: 'AI-Powered Development',
      description:
        'Harness the power of artificial intelligence to automate, optimize, and innovate your digital presence.',
    },
    {
      icon: '🏢',
      title: 'Enterprise-Grade Solutions',
      description:
        'We deliver scalable, secure, and robust solutions tailored for enterprises to meet their unique challenges.',
    },
    {
      icon: '🔥',
      title: 'Driven by Passion',
      description:
        'Our passion for technology drives us to create impactful and meaningful solutions for our clients.',
    },
    {
      icon: '⚡',
      title: 'Lightning-Fast Performance',
      description:
        'We prioritize speed and performance to ensure your web applications run seamlessly and efficiently.',
    },
    {
      icon: '🏆',
      title: 'Achieving Excellence',
      description:
        'Our commitment to quality and results ensures your projects achieve unparalleled success and recognition.',
    },
  ];

  return (
    <div  className=" bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 animate-gradient-slow py-12">
           <div className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="h-[9vh] text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4 animate-pulse-slow">
           Why Choose us
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-purple-100 leading-relaxed">
             We provide you with significant benefits to help you with your digital development.
          </p>
        </div>
      <div className="flex flex-wrap justify-center gap-8 px-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-purple-700 to-yellow-300 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 p-6 w-[300px] text-center group"
          >
            <div className="text-4xl bg-blue-100 w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-4 group-hover:bg-indigo-800 transition-colors duration-300">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-white">
              {item.title}
            </h3>
            <p className="text-gray-800 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};
