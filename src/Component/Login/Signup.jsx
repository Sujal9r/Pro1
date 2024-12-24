import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, email, password } = formData;

    if (!username || !email || !password) {
      setError('All fields are required!');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some((user) => user.email === email);

    if (userExists) {
      setError('User already exists! Please use a different email.');
      return;
    }

    users.push(formData);
    localStorage.setItem('users', JSON.stringify(users));


    navigate('/');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-sky-500">
      <div className="w-[400px] bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800">Sign Up</h2>
        <form onSubmit={handleSubmit} className="mt-4">
          {error && <p className="text-red-500 text-sm">{error}</p>}

          <label className="block text-gray-700 text-sm font-medium">
            Username
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </label>

          <label className="block mt-4 text-gray-700 text-sm font-medium">
            E-mail
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </label>

          <label className="block mt-4 text-gray-700 text-sm font-medium">
            Password
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </label>

          <button
            type="submit"
            className="mt-6 w-full bg-sky-500 hover:bg-sky-600 text-white py-2 px-4 rounded-md"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-600">
          Already have an account?{' '}
          <a href="/" className="text-sky-500">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
