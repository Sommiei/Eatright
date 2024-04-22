import React, { useState } from 'react';
import axios from 'axios';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

export const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        if (!email || !password) {
            setErrorMessage('Please fill in both email and password.');
            return;
        }
    
        try {
            const data = {
                email: email,
                password: password
            };
    
            const response = await axios.post(
                'https://38e2-129-205-113-190.ngrok-free.app/api/v1/users/login',
                data
            );
    
            const token = response.data.access_token;
    
            // Saving token in cookies
            document.cookie = `token=${token}; path=/`; // Set the token as a cookie
    
            // Redirect the user to the dashboard or any other authenticated page
            window.location.href = '/dashboard';
        } catch (error) {
            console.error('Error logging in:', error);
            setErrorMessage('Invalid email or password. Please try again.');
        }
    };
    

    const handleRememberChange = () => {
        setRemember(!remember);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <div className='pt-5'><h2 className="text-3xl font-bold text-center">Login</h2></div>
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
                                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-indigo-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700">Password</label>
                            <div className="relative">
                                <input
                                    placeholder='password'
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-indigo-500"
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
                        <div className='flex justify-start items-center gap-1'>
                            <input
                                type="checkbox"
                                id='remember'
                                name='remember'
                                checked={remember}
                                onChange={handleRememberChange}
                                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#846B59]"
                            />
                            <label htmlFor="remember" className="block text-gray-700">Remember me</label>
                        </div>
                        <div className='flex justify-between mt-4'>
                            <div className="text-center">
                                <a href="/SignUp" className="text-[#846B59] hover:underline">Register</a>
                            </div>
                            <div className="text-center">
                                <a href="/ForgotPassword" className="text-[#846B59] hover:underline">Forgot Password?</a>
                            </div>
                        </div>
                        <div className='flex justify-center items-center mt-5'>
                            <button
                                type="submit"
                                className="bg-[#9DAF89] text-white py-2 px-36 rounded hover:bg-[#846B59] 
                                focus:outline-none focus:bg-[#846B59]"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
                
            </div>
        </>
    );
};

