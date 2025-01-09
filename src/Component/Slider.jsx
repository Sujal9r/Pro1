import React, { useState, useEffect, useRef } from "react";
import "tailwindcss/tailwind.css";

const Slider = () => {
  const slidesData = [
    {
      imgSrc:
        "https://www.proglobalbusinesssolutions.com/wp-content/uploads/2019/03/Photography-Web-Banner.jpg",
      title: "Capture And Apply Solution",
    },
    {
      imgSrc:
        "https://www.internetcreation.net/wp-content/uploads/2015/10/banner-web-design.png",
      title: "Web Designing",
    },
    {
      imgSrc:
        "https://bloggingheros.com/wp-content/uploads/2020/03/website-design-1.jpg",
      title: "Coordination Power",
    },
    {
      imgSrc:
        "https://oceanbirdacademy.co.zw/wp-content/uploads/2024/04/webdesign_banner.jpg",
      title: "Turn Thinking into Reality",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = useRef(null);
  const slideCount = slidesData.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slideCount);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slideCount) % slideCount);
  };

  const startAutoSlide = () => {
    slideInterval.current = setInterval(nextSlide, 3000);
  };

  const stopAutoSlide = () => {
    clearInterval(slideInterval.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, );

  return (
    <div
      className="relative w-full mx-auto bg-sky-200 p-10 shadow-lg rounded-md overflow-hidden"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slidesData.map((slide, index) => (
          <div
            key={index}
            className="flex-none w-full flex flex-col items-center p-8"
          >
            <img
              src={slide.imgSrc}
              alt={slide.title}
              className="w-full h-[200px] md:h-[400px] object-cover rounded-md space-x-5"
            />
            <h2 className="mt-4 text-lg md:text-2xl font-bold text-gray-800">
              {slide.title}
            </h2>
          </div>
        ))}
      </div>

      <button
        onClick={() => {
          stopAutoSlide();
          prevSlide();
          startAutoSlide();
        }}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-purple-500 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <button
        onClick={() => {
          stopAutoSlide();
          nextSlide();
          startAutoSlide();
        }}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-purple-500 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slidesData.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 md:w-4 md:h-4 cursor-pointer ${
              index === currentIndex
                ? "bg-purple-600 scale-110"
                : "bg-sky-400"
            } rounded-full transition-all duration-300`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
