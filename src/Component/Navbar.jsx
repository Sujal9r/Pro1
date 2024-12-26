import React, { useEffect, useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { SlLogout } from "react-icons/sl";
import { FaUserTie } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Banner from './assets/Banner.png'; 

export const Header = () => {
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
      className="h-[120px] flex items-center px-6 shadow-md"
      style={{
        backgroundImage: `linear-gradient(to right, #6a11cb, #2575fc)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex flex-wrap items-center justify-between w-full">
        <div className="flex flex-wrap justify-center items-center gap-6">
          <div className="relative flex items-center">
            <img
              src={Banner}
              alt="Logo"
              className="h-[100px] w-[180px] rounded-md" 
            />
          </div>

          <div className="relative ml-4">
            <div className="text-center">
              <h1 className="text-white font-bold text-xl animate-fadeIn">
                Welcome, <span className="text-yellow-300">{formData.username}</span>!
              </h1>
              <p className="text-gray-200 text-sm">
                Explore amazing deals and offers tailored just for you.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white bg-opacity-80 w-[500px] h-12 px-4 rounded-lg shadow-lg">
            <IoIosSearch className="text-2xl text-gray-500" />
            <input
              className="bg-transparent w-full border-none outline-none text-sm placeholder-gray-500"
              type="text"
              placeholder="Search for Products, Brands, and More"
            />
          </div>
        </div>

        <div className="flex items-center gap-4 text-white ml-auto">
          <button
            onClick={reDirect}
            className="flex items-center gap-2 px-4 py-2 bg-transparent border border-white rounded-lg hover:bg-white hover:text-purple-700 transition-all"
          >
            <SlLogout className="text-2xl font-bold" />
            <span>Log out</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-transparent border border-white rounded-lg hover:bg-white hover:text-purple-700 transition-all">
            <FaUserTie className="text-2xl" />
            <span>Hire Developer</span>
          </button>
        </div>
      </div>
    </header>
  );
};
