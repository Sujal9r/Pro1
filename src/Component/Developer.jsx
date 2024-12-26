import React from 'react';

const developerTypes = [
  {
    type: 'Frontend Developer',
    description: 'Expert in building interactive UI using modern frameworks like React.',
    icon: '🖌️',
  },
  {
    type: 'Backend Developer',
    description: 'Specialized in server-side logic, databases, and API development.',
    icon: '💻',
  },
  {
    type: 'Full Stack Developer',
    description: 'Versatile in handling both frontend and backend development.',
    icon: '⚙️',
  },
  {
    type: 'Mobile Developer',
    description: 'Focused on creating mobile applications for iOS and Android platforms.',
    icon: '📱',
  },
];

export const Developer = () => {
  return (
    <div className="bg-gray-100 flex flex-col items-center p-12 hover:to-blue-400">
      <h1 className="text-3xl font-bold mb-8 "><span className='text-purple-500'>Developers</span> We Have</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {developerTypes.map((dev, index) => (
          <div
            key={index}
            className=" shadow-md rounded-lg p-6 flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:text-purple-700"
          >
            <div className="text-6xl mb-4">{dev.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{dev.type}</h2>
            <p className="text-gray-600 text-center mb-4">{dev.description}</p>
            <button className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-800">
              Hire Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
