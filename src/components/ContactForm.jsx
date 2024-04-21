import { useState } from 'react';
import axios from 'axios';

export const ContactForm = () => {
  const [baseModel, setBaseModel] = useState({
    full_name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    setBaseModel({ ...baseModel, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(baseModel);

    axios.post('https://20be-105-113-33-128.ngrok-free.app/api/v1/users/contact-us', baseModel)
      .then((response) => {
        setResponseMessage('Form submitted successfully!');
        console.log(response.data); // Handle success response
        // Optionally, you can clear the base model after successful submission
        setBaseModel({
          full_name: '',
          email: '',
          subject: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('Error:', error); // Handle error response
      });
  };

  return (
    <div className=" bg-gray-200 pb-10" id='Contact'>
      <div className='text-center mb-10 '>
        <h1 className='text-5xl font-bold pt-5 text-black'>
          Contact <span className='text-[#846B59]'>Us</span>
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center lg:flex-row">
        <div className="card w-full max-w-sm shadow-2xl bg-base-100 mb-8 lg:mb-0 lg:mr-8 lg:w-1/2">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input type="text" name="full_Name" value={baseModel.full_Name} onChange={handleChange} placeholder="Enter your full name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" value={baseModel.email} onChange={handleChange} placeholder="Enter your email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Subject</span>
              </label>
              <input type="text" name="subject" value={baseModel.subject} onChange={handleChange} placeholder="Enter subject" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea name="message" value={baseModel.message} onChange={handleChange} placeholder="Enter your message" className="textarea textarea-bordered resize-none" rows="" required></textarea>
            </div>
            <div className="form-control mt-6">
              <button onClick={handleSubmit} className="btn bg-[#846B57] text-white">Send</button>
            </div>
            {responseMessage && <p className="text-green-500 mt-2">{responseMessage}</p>}
          </div>
        </div>
        <div className="contact-info">
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Call Us</h3>
            <p className="text-base">+123-456-7890</p>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Email Us</h3>
            <p className="text-base">info@example.com</p>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Details</h3>
            <p className="text-base">123 Main Street, City, Country</p>
          </div>
        </div>
      </div>
    </div>
  );
};
