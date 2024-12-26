import React, { useState, useEffect, useRef } from "react";
import "tailwindcss/tailwind.css";

const Slider = () => {
  const slidesData = [
    {
      imgSrc: "https://www.proglobalbusinesssolutions.com/wp-content/uploads/2019/03/Photography-Web-Banner.jpg",
      title: "Capture And Apply Solution",
    },
    {
      imgSrc: "https://www.internetcreation.net/wp-content/uploads/2015/10/banner-web-design.png",
      title: "Web Designing",
    },
    {
      imgSrc: "https://bloggingheros.com/wp-content/uploads/2020/03/website-design-1.jpg",
      title: "Cordination Power",
    },
    {
      imgSrc: "https://oceanbirdacademy.co.zw/wp-content/uploads/2024/04/webdesign_banner.jpg",
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
  },);

  return (
    <div
      className="relative w-full mx-auto bg-sky-200 p-4 shadow-lg overflow-hidden "
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
            className="flex-none w-full flex flex-col items-center p-2"
          >
            <img
              src={slide.imgSrc}
              alt={slide.title}
              className="w-full h-[200px] md:h-[400px] object-cover rounded-md mb-4"
            />
            <h2 className="text-lg md:text-2xl font-bold text-gray-800">
              {slide.title}
            </h2>
            <p className="text-sm md:text-base text-gray-600 text-center">
              {slide.description}
            </p>
          </div>
        ))}
      </div>

      <button
        onClick={() => {
          stopAutoSlide();
          prevSlide();
          startAutoSlide();
        }}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg shadow-lg focus:outline-none"
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
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg shadow-lg focus:outline-none"
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
            className={`h-2 w-8 cursor-pointer ${
              index === currentIndex
                ? "bg-blue-500 scale-110"
                : "bg-gray-300"
            } rounded-full transition-all duration-300`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
