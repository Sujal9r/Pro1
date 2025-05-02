import React, { useState } from "react";

const FlipCard = ({ frontImage, backContent, category }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="group h-80 perspective-1000 cursor-pointer w-full"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div 
        className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-70"></div>
          <img
            src={frontImage}
            alt={category}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <h3 className="text-lg font-bold tracking-wide">{category}</h3>
          </div>
          <div className="absolute top-0 right-0 p-3">
            <span className="inline-block px-3 py-1 bg-purple-600 bg-opacity-80 text-white text-xs font-semibold rounded-full transform transition-transform duration-300 group-hover:rotate-12">
              Tap to flip
            </span>
          </div>
        </div>
        
        {/* Back */}
        <div className="absolute w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-2xl rotate-y-180 bg-gradient-to-r from-purple-700 to-indigo-900 p-6 flex flex-col justify-center">
          <div className="text-white space-y-2">
            {backContent}
          </div>
          <div className="absolute bottom-3 right-3">
            <span className="text-xs text-purple-200">Tap to flip back</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Flipcard = () => {
  const cardData = [
    {
      category: "E-Commerce",
      image: "https://frappe.io/files/ecommerce%20for%20erpnext183619.webp",
      description: "Custom online stores with seamless payment integration and intuitive product management."
    },
    {
      category: "Portfolio",
      image: "https://wpvip.edutopia.org/wp-content/uploads/2022/10/robinson-169hero-portfolio-shutterstock.jpg?w=2880&quality=85",
      description: "Showcase your work with elegance. Perfect for artists, photographers, and professionals."
    },
    {
      category: "Education",
      image: "https://cdn.elearningindustry.com/wp-content/uploads/2022/02/shutterstock_1112381495.jpg",
      description: "Learning platforms with course management, student tracking, and interactive content."
    },
    {
      category: "Hospitality",
      image: "https://media.licdn.com/dms/image/v2/D4E12AQGAv2b1yWaSwg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1672084999667?e=2147483647&v=beta&t=yUq6yCNwnpHLMzhBrvPYp2Uhk7U8Z2VCOmi_SQZ-b04",
      description: "Hotel and resort websites with booking systems and virtual tours."
    },
    {
      category: "Fashion",
      image: "https://hips.hearstapps.com/hmg-prod/images/summer-trends-1647373704.png",
      description: "Trendy designs for clothing brands with lookbooks and seasonal collections."
    },
    {
      category: "Real Estate",
      image: "https://cdn.corporatefinanceinstitute.com/assets/real-estate.jpeg",
      description: "Property listings with search filters, maps integration, and virtual tours."
    },
    {
      category: "Healthcare",
      image: "https://cdn.prod.website-files.com/650c1bee516c4e723b11b29a/65206264927e177f8bd65950_651f6a5b0bcc2eb5956182ea_Top%252050%2520Healthcare%2520Companies%2520and%2520Their%2520Impact%2520on%2520the%2520Industry.webp",
      description: "Medical websites with appointment scheduling and secure patient portals."
    },
    {
      category: "Entertainment",
      image: "https://5.imimg.com/data5/SELLER/Default/2020/10/OX/FX/UB/98833934/entertainment-programs.jpg",
      description: "Engaging platforms for events, streaming, and content discovery."
    }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 animate-gradient-slow"></div>
      
      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.2)_1px,_transparent_1px)] bg-[size:20px_20px]"></div>
      </div>

      <div className="relative py-16 px-4 sm:px-6 lg:px-8">
        {/* Header section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4 animate-pulse-slow">
            Websites We Create
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-purple-100 leading-relaxed">
            S9r Technology specializes in building stunning, responsive websites that captivate your audience across all devices.
          </p>
        </div>

        {/* Grid card layout with fixed dimensions */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {cardData.map((card, index) => (
              <div 
                key={index} 
                className="transform transition-all duration-300 hover:shadow-xl"
              >
                <FlipCard 
                  frontImage={card.image} 
                  backContent={<p>{card.description}</p>}
                  category={card.category}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Get Your Custom Website
          </button>
        </div>
      </div>

      {/* Custom CSS for animations and 3D effects */}
      <style jsx>{`        
        @keyframes gradient-slow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .perspective-1000 {
          perspective: 1000px;
        }
        
        .backface-hidden {
          backface-visibility: hidden;
        }
        
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        
        .animate-gradient-slow {
          background-size: 200% 200%;
          animation: gradient-slow 15s ease infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </div>
  );
};

export default Flipcard;