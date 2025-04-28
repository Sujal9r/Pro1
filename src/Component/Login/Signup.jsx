import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, email, password, confirmPassword } = formData;

    // Validation
    if (!username || !email || !password || !confirmPassword) {
      setError('All fields are required!');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    // Check if user exists
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some((user) => user.email === email);

    if (userExists) {
      setError('User already exists! Please use a different email.');
      return;
    }

    // Save user data excluding confirmPassword
    const userData = {
      username,
      email,
      password
    };
    
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));

    // Redirect to login page after successful signup
    navigate('/login');
  };

  const handleSocialLogin = (provider) => {
    // This would typically integrate with OAuth providers
    console.log(`Login with ${provider}`);
    // Mock social login for demonstration
    alert(`${provider} login would be implemented here with OAuth`);
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-sky-400">
        <div className="flex w-full max-w-[900px] bg-white shadow-lg shadow-sky-500 border-sky-500 border-[2px] flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-6 md:p-10 order-2 md:order-1">
            <h1 className="text-3xl font-bold text-gray-800">Create Account</h1>
            <p className="text-gray-600">
              Already have an account?{' '}
              <a href="/login" className="text-sky-500 hover:text-sky-700">
                Sign in
              </a>
            </p>
            <form className="mt-6" onSubmit={handleSubmit}>
              {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

              <label className="block text-gray-700 text-sm font-medium">
                Username
                <input
                  type="text"
                  name="username"
                  placeholder="JohnDoe"
                  value={formData.username}
                  onChange={handleChange}
                  className="mt-2 w-full px-4 py-2 border border-sky-500 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </label>

              <label className="block mt-4 text-gray-700 text-sm font-medium">
                E-mail
                <input
                  type="email"
                  name="email"
                  placeholder="john.doe@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 w-full px-4 py-2 border border-sky-500 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </label>

              <label className="block mt-4 text-gray-700 text-sm font-medium">
                Password
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    className="mt-2 w-full px-4 py-2 border border-sky-500 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                  <div
                    className="text-xl absolute right-3 top-4 cursor-pointer text-sky-800"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? <BsEye /> : <BsEyeSlash />}
                  </div>
                </div>
              </label>

              <label className="block mt-4 text-gray-700 text-sm font-medium">
                Confirm Password
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="mt-2 w-full px-4 py-2 border border-sky-500 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                  <div
                    className="text-xl absolute right-3 top-4 cursor-pointer text-sky-800"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                  >
                    {showConfirmPassword ? <BsEye /> : <BsEyeSlash />}
                  </div>
                </div>
              </label>

              <div className="flex items-center mt-4">
                <input 
                  type="checkbox" 
                  id="terms" 
                  className="mr-2" 
                />
                <label htmlFor="terms" className="text-sm text-gray-700">
                  I agree to the Terms and Privacy Policy
                </label>
              </div>

              <button
                type="submit"
                className="mt-6 w-full bg-sky-500 hover:bg-sky-700 text-white py-2 px-4 rounded-md transition-colors"
              >
                Create Account
              </button>
              
              <div className="mt-6 text-center text-gray-600">
                <p>or</p>
              </div>
              
              <div className="mt-4 flex flex-col space-y-2">
                <button 
                  type="button"
                  onClick={() => handleSocialLogin('Google')}
                  className="flex items-center justify-center border border-sky-500 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <img
                    src="https://static.cdnlogo.com/logos/g/38/google-icon.svg"
                    alt="Google"
                    className="w-5 h-5 mr-2"
                  />
                  Continue with Google
                </button>
                <button 
                  type="button"
                  onClick={() => handleSocialLogin('Facebook')}
                  className="flex items-center justify-center border border-sky-500 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Facebook_Logo_2023.png/768px-Facebook_Logo_2023.png"
                    alt="Facebook"
                    className="w-5 h-5 mr-2"
                  />
                  Continue with Facebook
                </button>
              </div>
            </form>
          </div>

          <div className="w-full md:w-1/2 bg-sky-900 text-white p-6 md:p-10 order-1 md:order-2">
            <div className="flex justify-end">
              <a href="/support" className="text-sm underline">
                Support
              </a>
            </div>
            <div className="mt-10">
              <h2 className="text-2xl font-bold">S9r Technologies Pvt. Ltd.</h2>
              <p className="mt-4 text-sm">
                Join our community of innovators and tech enthusiasts
              </p>
              <button className="mt-4 bg-white text-sky-900 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors">
                Learn more
              </button>
              <div className="mt-8 text-gray-300">
                <p>CEO</p>
                <h3 className="text-4xl font-bold">Suzal Sharma</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;