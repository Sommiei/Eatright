import  { useRef, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const VerificationPending = () => {
  const inputRefs = useRef([]);
  const [verificationCode, setVerificationCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Use useNavigate hook

  // Simulate backend logic to send a verification code to the user's email
  const sendVerificationCode = async () => {
    try {
      // Make an API call to send the verification code
      const response = await axios.post('/api/send-verification-code', { email: 'user@example.com' });
      setVerificationCode(response.data.code.toString());
      console.log('Verification code sent:', response.data.code);
    } catch (error) {
      console.error('Error sending verification code:', error);
      setErrorMessage('Error sending verification code. Please try again.');
    }
  };

  // Verifies the entered verification code with the backend
  const verifyVerificationCode = async () => {
    try {
      // Concatenate the values from all input fields to form the entered code
      const enteredCode = inputRefs.current.map((ref) => ref.value).join('');
      // Make an API call to verify the code
      const response = await axios.post('/api/verify-code', { code: enteredCode });
      console.log('Verification response:', response.data);
      // Redirect the user to the next step upon successful verification
      // Handle redirection or other actions based on the response from the backend
      navigate('/Dashboard');
    } catch (error) {
      console.error('Error verifying verification code:', error);
      setErrorMessage('Error verifying verification code. Please try again.');
    }
  };

  // Focuses on the next input field when a number is entered
  const focusNextInput = (index) => {
    if (index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    } else {
      // Start verification when the last input field is filled
      verifyVerificationCode();
    }
  };

  // Handles changes in the input fields
  const handleChange = (event, index) => {
    const { value } = event.target;
    // Allow only one digit in each input field
    if (value.length > 1) {
      event.target.value = value.slice(0, 1);
    }
    // Move focus to the next input field
    focusNextInput(index);
  };

  return (
    <div>
      <h2 className='text-2xl text-center pt-20 font-bold'>Enter your verification number</h2>
      <div className='bg-base-100 flex flex-col items-center h-screen'>
        {errorMessage && <div className='text-red-600'>{errorMessage}</div>}
        
        <div className='space-x-5 mt-5'>
          {Array.from({ length: 4 }).map((_, index) => (
            <input
              key={index}
              type="text"
              pattern="[0-9]*" // Allow only numeric input
              ref={(ref) => (inputRefs.current[index] = ref)}
              onChange={(e) => handleChange(e, index)}
              maxLength={1} // Limit input to one character
              className='border bg-base-200 h-[60px] w-[50px] rounded-md text-center'
              inputMode="numeric" // Set input mode to numeric
            />
          ))}
        </div>
        
        {/* Button to send a verification code */}
        <button onClick={sendVerificationCode} className='mt-10 bg-[#846B59] text-white py-2 px-6 rounded hover:bg-[#bd9a81] focus:outline-none'>Send Verification Code</button>
        {/* Input fields for entering the verification code */}
      </div>
    </div>
  );
};
