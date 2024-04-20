import React, { useState } from 'react';
import axios from 'axios';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

export const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validate password format
        if (!isValidPassword(newPassword)) {
            setErrorMessage('Password must be 8 characters long and contain at least one uppercase letter, one number, and one special symbol.');
            return;
        }

        // Check if new password matches confirm password
        if (newPassword !== confirmPassword) {
            setErrorMessage('Passwords do not match. Please enter matching passwords.');
            return;
        }

        try {
            // Make API call to reset password
            const response = await axios.post(
                'https://eac2-105-120-132-174.ngrok-free.app/api/v1/users/reset_password',
                {
                    newPassword: newPassword
                }
            );

            // Handle success response
            console.log('Password reset successful:', response.data);
            setErrorMessage('');
            // Redirect user or display success message
        } catch (error) {
            // Handle error response
            console.error('Error resetting password:', error);
            setErrorMessage('An error occurred while resetting password. Please try again.');
        }
    };

    // Function to validate password format
    const isValidPassword = (password) => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <div className='pt-5'><h2 className="text-3xl font-bold text-center">Reset Password</h2></div>
            <div className="max-w-md mx-auto mt-20 p-5 bg-[#F4F7FA] rounded-lg">
                <div className='pb-10'>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="newPassword" className="block text-gray-700">New Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="newPassword"
                                    name="newPassword"
                                    placeholder='New password'
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    required
                                    className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-indigo-500"
                                />
                                <span
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                                </span>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="confirmPassword" className="block text-gray-700">Confirm Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    placeholder='Confirm new password'
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                    className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-indigo-500"
                                />
                                <span
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                                </span>
                            </div>
                        </div>
                        {errorMessage && <div className="mt-3 text-red-600">{errorMessage}</div>}
                        <div className='flex justify-center items-center mt-5'>
                            <button
                                type="submit"
                                className="bg-[#9DAF89] text-white py-2 px-36 rounded hover:bg-[#846B59] 
                                focus:outline-none focus:bg-[#846B59]"
                            >
                                Reset Password
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
