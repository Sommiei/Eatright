import React, { useState } from 'react';
import axios from 'axios';

export const Post = () => {
    const [Fname, setFName] = useState('');
    const [Lname, setLName] = useState('');
    const [Dob, setDob] = useState('');
    const [Email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        
        axios.post('http://49.13.2.10:4000/todos/', { name, description })
            .then(response => {
                setMessage('Success! Your form has been submitted.');
                setLoading(false);
            })
            .catch(error => {
                console.error('Error submitting form:', error);
                setMessage('An error occurred. Please try again later.');
                setLoading(false);
            });
    };

    return (
        <div className="max-w-md mx-auto mt-5 p-5 bg-gray-200 rounded-lg">
            <h2 className="text-xl font-bold mb-5">Submit your Name and Description</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-indigo-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="text" className="block text-gray-700">Descr:</label>
                    <input
                        type="text"
                        id="text"
                        name="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-indigo-500"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                    disabled={loading}
                >
                    {loading ? 'Submitting...' : 'Submit'}
                </button>
            </form>
            {message && <div className="mt-3 text-green-600">{message}</div>}
        </div>
    );
};
