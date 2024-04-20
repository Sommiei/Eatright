import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { doCreateUserWithEmailAndPassword, dosignInWithGoogle} from '../../../Firebase/auth';

export const Register = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!isRegistering) {
            setIsRegistering(true);
            try {
                if (password !== confirmPassword) {
                    throw new Error("Passwords do not match");
                }

                await doCreateUserWithEmailAndPassword(email, password);
                // Navigate to the appropriate page after successful registration
                navigate('/'); // For example, navigate to the home page
            } catch (error) {
                console.error('Error submitting form:', error);
                setErrorMessage(error.message ?? 'An error occurred. Please try again later.');
            }
            setIsRegistering(false);
        }
    };

    const handleGoogleSubmit = (event) => {
        event.preventDefault();
          // Call Firebase function for Google sign-in
          dosignInWithGoogle()
            .then(() => {
              // Handle successful sign-in, e.g., redirect user or show a success message
            })
            .catch((error) => {
              console.error('Error signing in with Google:', error);
              setErrorMessage(error.message ?? 'An error occurred. Please try again later.');
            })
        
      };

    return (
        <>
            <div className='pt-5'><h2 className="text-3xl font-bold text-center">Register</h2></div>
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
                            <input
                                placeholder='password'
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-indigo-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="confirmPassword" className="block text-gray-700">Confirm Password</label>
                            <input
                                placeholder='confirm password'
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-indigo-500"
                            />
                        </div>
                        <div className='flex justify-start items-center'>
                            <input type="checkbox" id='Remember' name='Remember' value='Remember' />
                            <label htmlFor="Remember" className="block text-gray-700">Remember</label>
                        </div>
                        <div className='flex flex-row space-x-10 items-center  '>
                        <div className="flex pt-2">
                            <button
                                className="flex items-end justify-end text-gray-700  border-gray-300 hover:bg-gray-100 py-2 px- rounded-lg w-"
                                onClick={handleGoogleSubmit}
                            >
                                <img
                                    src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                                    alt="Google Logo"
                                    className="h-6 w-6 mr-2"
                                />
                                Google
                            </button>
                        </div>
                        <div className='flex pl-60'>
                        <a href="/login">Login</a>

                        </div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <div className='pt-5'>
                                <button
                                    type="submit"
                                    className="bg-[#9DAF89] text-white py-2 px-36 rounded hover:bg-[#846B59] 
                                    focus:outline-none focus:bg-indigo-600"
                                    disabled={isRegistering}
                                >
                                    {isRegistering ? 'Signing up...' : 'SignUp'}
                                </button>
                            </div>
                        </div>
                    </form>
                    {errorMessage && <div className="mt-3 text-red-600">{errorMessage}</div>}
                </div>
            </div>
        </>
    );
};
