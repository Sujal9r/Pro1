import React from 'react';
import { useNavigate } from 'react-router-dom';
import ComButton from '../../components/common/ComButton';

const developerTypes = [
	{
		type: 'Frontend Developer',
		description:
			'Expert in building interactive UI using modern frameworks like React.',
		icon: '🖌️',
	},
	{
		type: 'Backend Developer',
		description:
			'Specialized in server-side logic, databases, and API development.',
		icon: '💻',
	},
	{
		type: 'Full Stack Developer',
		description: 'Versatile in handling both frontend and backend development.',
		icon: '⚙️',
	},
	{
		type: 'Native Developer',
		description:
			'Focused on creating mobile applications for iOS and Android platforms.',
		icon: '📱',
	},
	{
		type: 'MERN Stack Developer',
		description: 'Specialist in the MERN stack (MongoDB, Express, React, Node).',
		icon: '🌐',
	},
	{
		type: 'Game Developer',
		description:
			'Creates engaging video games using engines like Unity or Unreal.',
		icon: '🎮',
	},
	{
		type: 'AI/ML Developer',
		description:
			'Builds and trains machine learning models for AI applications.',
		icon: '🤖',
	},
	{
		type: 'E-commerce Developer',
		description: 'Builds and maintains e-commerce platforms.',
		icon: '🛒',
	},
];

const Developer = () => {
	const navigate = useNavigate();

	const reDirect = (type) => {
		sessionStorage.setItem('developerType', type);
		navigate(`/hiring`);
		window.scrollTo(0, 0);
	};

	return (
		<div className="bg-gray-100 flex flex-col items-center p-6 sm:p-10 md:p-12 min-h-screen">
			<h1 className="text-3xl font-bold mb-8 text-center">
				<span className="text-purple-500">Developers</span> We Have
			</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
				{developerTypes.map((dev, index) => (
					<div
						key={index}
						className="shadow-md rounded-lg p-6 flex flex-col items-center bg-white h-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:text-purple-700"
					>
						<div className="text-6xl mb-4">{dev.icon}</div>
						<h2 className="text-xl font-semibold mb-2 text-center">
							{dev.type}
						</h2>
						<p className="text-gray-600 text-center mb-6 flex-1">
							{dev.description}
						</p>
						<div className="w-full flex justify-center mt-auto">
							<ComButton
								customStyle="w-full px-7 py-2 bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 animate-gradient-slow"
								onClick={() => reDirect(dev.type)}
								title={'Hire now'}
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Developer;
