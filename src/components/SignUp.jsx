import { useState } from 'react';
import axios from 'axios';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

export const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [acceptTerms, setAcceptTerms] = useState(false); // State for checkbox
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsRegistering(true);

        try {
            // Basic client-side validation
            if (!firstName || !lastName || !email || !password || !confirmPassword) {
                throw new Error('Please fill in all fields.');
            }

            if (password !== confirmPassword) {
                throw new Error('Passwords do not match.');
            }

            // Make the API call to register the user
            const response = await axios.post('http://37.27.42.7:5000/api/v1/users/register', {
                first_name: firstName,
                last_name: lastName,
                email: email,
                password: password,
            });

            // Handle successful registration
            console.log('User registered successfully:', response.data);

            // Navigate to SignIn page after successful registration
            navigate('/SignIn');

        } catch (error) {
            console.error('Error submitting form:', error);
            setErrorMessage(error.message ?? 'An error occurred. Please try again later.');
        }

        setIsRegistering(false);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleTermsCheckboxChange = () => {
        setAcceptTerms(!acceptTerms); // Toggle checkbox state
    };

    return (
        <>
            <div className='pt-5'><h2 className="text-3xl font-bold text-center sticky top-0 z-50 ">Sign Up</h2></div>
            <div className="max-w-md mx-auto mt-5 p-5 bg-[#F4F7FA] rounded-lg">
                <div className='pb-10'>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="firstName" className="block text-gray-700">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                placeholder='John'
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-indigo-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="lastName" className="block text-gray-700">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                placeholder='Doe'
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-indigo-500"
                            />
                        </div>
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
                        <div className="mb-4">
                            <label htmlFor="confirmPassword" className="block text-gray-700">Confirm Password</label>
                            <div className="relative">
                                <input
                                    placeholder='confirm password'
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                    className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-indigo-500"
                                />
                                <span
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                                    onClick={toggleConfirmPasswordVisibility}
                                >
                                    {showConfirmPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                                </span>
                            </div>
                        </div>
                        <div className="mb-4 flex justify-between items-center">
                            <div>
                                <input
                                    type="checkbox"
                                    id="acceptTerms"
                                    name="acceptTerms"
                                    checked={acceptTerms}
                                    onChange={handleTermsCheckboxChange}
                                    className="mr-2"
                                />
                                <label htmlFor="acceptTerms" className='text-gray-700'>I accept the </label>
                                <Link to="/terms" className='text-[#846B59] underline'>Terms and Conditions</Link>
                            </div>
                            <Link to="/SignIn" className='text-[#846B59] underline'>Login</Link>
                        </div>
                        <div className='flex justify-center items-center mt-3'>
                            <button
                                type="submit"
                                className="bg-[#9DAF89] text-white py-2 px-36 rounded hover:bg-[#846B59] 
                                focus:outline-none focus:bg-[#9DAF89]"
                                disabled={isRegistering}
                            >
                                {isRegistering ? 'Signing up...' : 'Sign Up'}
                            </button>
                        </div>
                    </form>
                    {errorMessage && <div className="mt-3 text-red-600">{errorMessage}</div>}
                </div>
            </div>
        </>
    );
};
