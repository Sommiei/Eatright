import React, { useState } from 'react';
import axios from 'axios';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

export const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to your backend endpoint for resetting password
      const response = await axios.post('YOUR_BACKEND_RESET_PASSWORD_ENDPOINT', {
        email: email,
        password: password,
      });
      // Handle success response
      console.log(response.data); // Assuming your backend returns a success message
      // Clear form fields after successful submission
      setEmail('');
      setPassword('');
      setErrorMessage('');
      setSuccessMessage('Password reset successful.');
      // Navigate to "/successful" after 3 seconds
      setTimeout(() => {
        navigate('/successful');
        // Navigate to "/DashBoard" after another 3 seconds
        setTimeout(() => {
          navigate.push('/DashBoard');
        }, 3000);
      }, 3000);
    } catch (error) {
      // Handle error response
      console.error('Error resetting password:', error);
      setErrorMessage('An error occurred while resetting the password. Please try again.');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='pt-5'>
      <h2 className="text-3xl font-bold text-center">Forgot Password</h2>
      <div className="max-w-md mx-auto mt-20 p-5 bg-[#F4F7FA] rounded-lg">
        <div className='pb-10'>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder='johnmary@gmail.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-[#846B59] "
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">New Password</label>
              <div className="relative">
                <input
                  placeholder='password'
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-[#846B59] "
                />
                <span
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                </span>
              </div>
            </div>
            {errorMessage && <div className="mt-3 text-red-600">{errorMessage}</div>}
            {successMessage && <div className="mt-3 text-green-600">{successMessage}</div>}
            <div className='flex justify-center items-center mt-5'>
              <button
                type="submit"
                className="bg-[#9DAF89] text-white py-2 px-36 rounded hover:bg-[#846B59] 
                           focus:outline-none focus:bg-[#846B59] "
              >
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
