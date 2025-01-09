import React, { useEffect, useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { SlLogout } from "react-icons/sl";
import { FaUserTie } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Banner from './assets/Banner.png'; 

export const Header = ({Redirect}) => {
  const [formData, setFormData] = useState({
    username: 'Guest',
  });

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.length > 0) {
      setFormData({ username: users[users.length - 1].username });
    }
  }, []);

  const navigate = useNavigate();

  const reDirect = () => {
    navigate('/');
  };

  return (
    <header
      className="flex items-center px-4 lg:px-6 py-4 shadow-md"
      style={{
        backgroundImage: `linear-gradient(to right, #6a11cb, #2575fc)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-between w-full">
        {/* Left Section */}
        <div className="flex flex-col lg:flex-row items-center gap-4 w-full lg:w-auto">
          <img
            src={Banner}
            alt="Logo"
            className="h-[80px] w-[140px] lg:h-[100px] lg:w-[180px] rounded-md"
          />

          <div className="text-center lg:text-left">
            <h1 className="text-white font-bold text-lg lg:text-xl">
              Welcome, <span className="text-yellow-300">{formData.username}</span>!
            </h1>
            <p className="text-gray-200 text-xs lg:text-sm">
              Explore amazing deals and offers tailored just for you.
            </p>
          </div>

          <div className="relative flex items-center bg-white bg-opacity-80 w-full lg:w-[350px] h-10 px-3 rounded-lg shadow-lg">
            <IoIosSearch className="text-xl text-gray-500" />
            <input
              className="bg-transparent w-full border-none outline-none text-sm placeholder-gray-500"
              type="text"
              placeholder="Search for Products, Brands, and More"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 lg:gap-4 mt-4 lg:mt-0">
          <button
            onClick={reDirect}
            className="flex items-center gap-2 px-3 py-2 bg-transparent border border-white rounded-lg text-white hover:bg-white hover:text-purple-700 transition-all text-sm lg:text-base"
          >
            <SlLogout className="text-xl lg:text-2xl" />
            <span>Log out</span>
          </button>
          <button onClick={Redirect} className="flex items-center gap-2 px-3 py-2 bg-transparent border border-white rounded-lg text-white hover:bg-white hover:text-purple-700 transition-all text-sm lg:text-base">
            <FaUserTie className="text-xl lg:text-2xl" />
            <span>Hire Developer</span> 
          </button>
        </div>
      </div>
    </header>
  );
};
