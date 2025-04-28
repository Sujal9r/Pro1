import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Validation
    if (!email || !password) {
      setError('Email and password are required');
      return;
    }
    
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((user) => user.email === email && user.password === password);
    
    if (user) {
      // Store user session
      if (rememberMe) {
        localStorage.setItem('currentUser', JSON.stringify({ email: user.email, username: user.username }));
      } else {
        sessionStorage.setItem('currentUser', JSON.stringify({ email: user.email, username: user.username }));
      }
      navigate('/');
    } else {
      setError('Invalid email or password');
    }
  };

  const handleSocialLogin = (provider) => {
    // This would typically integrate with OAuth providers
    console.log(`Login with ${provider}`);
    // Mock social login for demonstration
    alert(`${provider} login would be implemented here with OAuth`);
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-purple-400">
        <div className="flex w-full max-w-[900px] bg-white shadow-lg shadow-purple-500 border-purple-500 border-[2px] flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-6 md:p-10 order-2 md:order-1">
            <h1 className="text-3xl font-bold text-gray-800">Sign in</h1>
            <p className="text-gray-600">
              Don't have an account?{' '}
              <a href="/signup" className="text-purple-500 hover:text-purple-700">
                Create now
              </a>
            </p>
            <form className="mt-6" onSubmit={handleLogin}>
              {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

              <label className="block text-gray-700 text-sm font-medium">
                E-mail
                <input
                  type="email"
                  placeholder="Developer@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 w-full px-4 py-2 border border-purple-500 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </label>
              <label className="block mt-4 text-gray-700 text-sm font-medium">
                Password
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-2 w-full px-4 py-2 border border-purple-500 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                  <div
                    className="text-xl absolute right-3 top-4 cursor-pointer text-purple-800"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? <BsEye /> : <BsEyeSlash />}
                  </div>
                </div>
              </label>
              <div className="flex items-center justify-between mt-4 flex-wrap gap-2">
                <label className="flex items-center text-sm">
                  <input 
                    type="checkbox" 
                    className="mr-2"
                    checked={rememberMe}
                    onChange={() => setRememberMe(prev => !prev)}
                  />
                  Remember me
                </label>
                <a
                  href="/forgot-password"
                  className="text-sm text-purple-500 hover:underline"
                >
                  Forgot Password?
                </a>
              </div>
              <button
                type="submit"
                className="mt-6 w-full bg-purple-500 hover:bg-purple-800 text-white py-2 px-4 rounded-md transition-colors"
              >
                Sign in
              </button>
              <div className="mt-6 text-center text-gray-600">
                <p>or</p>
              </div>
              <div className="mt-4 flex flex-col space-y-2">
                <button 
                  type="button"
                  onClick={() => handleSocialLogin('Google')}
                  className="flex items-center justify-center border border-purple-500 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
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
                  className="flex items-center justify-center border border-purple-500 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
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

          <div className="w-full md:w-1/2 bg-purple-900 text-white p-6 md:p-10 order-1 md:order-2">
            <div className="flex justify-end">
              <a href="/support" className="text-sm underline">
                Support
              </a>
            </div>
            <div className="mt-10">
              <h2 className="text-2xl font-bold">S9r Technologies Pvt. Ltd.</h2>
              <p className="mt-4 text-sm">
                Empowering Innovation, Transforming Technology
              </p>
              <button className="mt-4 bg-white text-purple-900 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors">
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

export default Login;