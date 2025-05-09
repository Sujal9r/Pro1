import React, { useState, useEffect } from "react";
import { Navbar } from '../Navbar/Navbar';
import  Footer  from '../Footer/Footer';

const Developer = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  const filteredUsers = users.filter((user) =>
    `${user.name.firstname} ${user.name.lastname}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="w-full bg-gradient-to-r from-purple-400 via-purple-500 to-red-500 flex flex-col items-center">
      <div className="w-full">
        <Navbar />
        <div className="flex justify-center p-5 mt-[100px]">
          <input 
            type="text"
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-3xl p-4 border-2 border-purple -400 rounded-xl shadow-lg text-lg bg-white focus:outline-none focus:ring-4 focus:ring-sky-300"
          />
        </div>
      </div>
 
      {filteredUsers.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-5">
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              className="bg-white p-10 rounded-3xl shadow-2xl border-4 border-sky-500 transform hover:scale-105 transition-all duration-300"
            >
              <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
                {user.name.firstname} {user.name.lastname}
              </h2>
              <p className="text-gray-700 mb-2 text-lg"><strong>Email:</strong> {user.email}</p>
              <p className="text-gray-700 text-lg"><strong>Username:</strong> {user.username}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center mt-10">
          <p className="text-white text-2xl font-bold">No users found</p>
          <img
            src="https://img.freepik.com/premium-vector/no-data-found-illustration-sites-banner-design-vector-illustration_620585-1690.jpg?semt=ais_hybrid"
            alt="No Data Found"
            className="mb-4 animate-pulse rounded-3xl"
          />
        </div>
      )}  
      <div className="w-full"><Footer /></div>
    </div>
  );
};

export default Developer;
