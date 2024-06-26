import  { useState } from 'react';
import axios from 'axios';

export const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, "$1");
      console.log(token);
      
      // Make a POST request to the backend endpoint for resetting password
      const response = await axios.post(
        `https://api.eatright.com.ng/api/v1/users/password-recovery/${email}`,
         // Send email as part of the request body
        {
          "headers": {
            "Authorization": `Bearer ${token}`,
            'Content-Type': 'application/json', // Set content type
          },
        }
      );
      
      // Handle success response
      console.log(response.data); // Assuming your backend returns a success message
      // Clear form fields after successful submission
      setEmail('');
      setSuccessMessage(response.data.message); // Display success message from the server
    } catch (error) {
      // Handle error response
      console.error('Error submitting request:', error);
      setErrorMessage('An error occurred. Please try again later.');
    }
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
            {errorMessage && <div className="mt-3 text-red-600">{errorMessage}</div>}
            {successMessage && <div className="mt-3 text-green-600">{successMessage}</div>}
            <div className='flex justify-center items-center mt-5'>
              <button
                type="submit"
                className="bg-[#9DAF89] text-white py-2 px-36 rounded hover:bg-[#846B59] 
                           focus:outline-none focus:bg-[#846B59] "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

