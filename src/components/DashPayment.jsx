import  { useState } from 'react';
import { PaystackButton } from 'react-paystack';
import { Link } from 'react-router-dom'; // Import Redirect from React Router

export const Payment = () => {
  const publicKey = "pk_test_490ed0a8d36cc1acfa3806b5e0c25a531b897cd6";
  const amount = 1000000;
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false); // State to track payment success

  const resetForm = () => {
    setEmail('');
    setName('');
    setPhone('');
  };

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: 'Pay Now',
    onSuccess: ({ reference }) => {
      alert(
        `Your purchase was successful! Transaction reference: ${reference}`
      );
      resetForm();
      setPaymentSuccess(true); // Set paymentSuccess state to true
    },
    onClose: () => alert("Wait! You, don't go!!!!"),
  };

  // Redirect to /Dashboard if paymentSuccess is true
  if (paymentSuccess) {
    return (
      <div className='h-screen flex flex-col items-center justify-center'>
        <p>Your payment was successful!</p>
        <Link to="/Dashboard" className="text-blue-500 mt-4">Go to Dashboard</Link>
      </div>
    );
  }

  return (
    <div className="App_dashboard py-16 mx-12">
      <div className="container_dashboard flex flex-col md:flex-row justify-center items-center">
        {/* <div className="item">
          <div className="overlay-effect"></div>
          <img
            className="item-image"
            src="eat-chatbot.jpg"
            alt="product"
          />
          <div className="item-details">
            <p className="item-details__title"></p>
            <p className="item-details__amount"></p>
          </div>
        </div> */}
        <div className="checkout mt-8 md:mt-0 ">
          <div className="checkout-form bg-white p-8 rounded-lg shadow-md">
            <h1 className='text-gray-800 text-xl mb-4'>Make Your Payment</h1>
            <div className="checkout-field">
              <label className="text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input-field"
              />
            </div>
            <div className="checkout-field">
              <label className="text-gray-700">Email</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
              />
            </div>
            <div className="checkout-field">
              <label className="text-gray-700">Phone</label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="input-field"
              />
            </div>
            <PaystackButton className="paystack-button mt-4" {...componentProps} />
          </div>
        </div>
      </div>
  </div>
  );
};
