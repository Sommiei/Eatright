// import React, { useState } from 'react';
// import axios from 'axios';

// export const Login = () => {
//     const [name, setName] = useState('');
//     const [Password, setPassword] = useState('');
//     const [message, setMessage] = useState('');
//     const [loading, setLoading] = useState(false);

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         setLoading(true);
        
//         axios.post('http://49.13.2.10:4000/todos/', { name, Password })
//             .then(response => {
//                 setMessage('Success! Your form has been submitted.');
//                 setLoading(false);
//             })
//             .catch(error => {
//                 console.error('Error submitting form:', error);
//                 setMessage('An error occurred. Please try again later.');
//                 setLoading(false);
//             });
//     };

//     return (
//         <>
//         <div className='pt-5'><h2 className="text-3xl font-bold  text-center">Login</h2></div>
//         <div className="max-w-md mx-auto mt-20 p-5 bg-[#F4F7FA] rounded-lg">
//             <div className='pb-10'>
//             <form onSubmit={handleSubmit}>
//                 <div className="mb-4">
//                     <label htmlFor="name" className="block text-gray-700">Name</label>
//                     <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         placeholder='johnmary@gmail.com'
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         required
//                         className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-indigo-500"
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label htmlFor="text" className="block text-gray-700">
    
//                     <span className=' flex space-x-44'>
//                         <p className='items-start'>Password </p>
//                         <a href=""className='items-end text-[#846B59]'>Forgot Password?</a>
//                     </span>
//                     </label>
//                     <input
//                         type="password"
//                         id="pwd"
//                         name="text"
//                         value={Password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                         className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-indigo-500"
//                     />
//                 </div>
//                     <div className='flex justify-start items-center '>
//                     <input type="checkbox"
//                     id='Remember'
//                     name='Remember'
//                     value='Remember'
//                     /> 
//                     <label htmlFor="text" className="block text-gray-700">Remember</label>
//                     </div>
//                     <div className='flex justify-center items-center'>
                    
//                     <div className='pt-5'>
//                 <button
//                     type="Login"
//                     className="bg-[#9DAF89] text-white py-2 px-36 rounded hover:bg-[#846B59] 
//                     focus:outline-none focus:bg-indigo-600 "
//                     disabled={loading}
//                 >
//                     {loading ? 'Submitting...' : 'Submit'}
//                 </button>
//                 </div>
//                 </div>
//             </form>
//             {message && <div className="mt-3 text-green-600">{message}</div>}
            
//         </div>
//         </div>





//         <div className="card shrink h-full max-h-screen  w-full max-w-sm shadow-2xl bg-base-100">
//             <form className="card-body">
//               <div className="form-control">
//                 <label className="label border-b-[2px] border-grey mb-5">
//                   <span className="label-text border-b[3px] border-[#03AEFD] ">For sale</span>
//                   <span className="label-text border-b[3px] border-[#03AEFD]">For rent</span>
//                 </label>
//                 <input type="text"placeholder="New York, San Francisco, etc" className="input input-bordered bg-[#D4D4D4]" required />
//               </div>
//               <div className="form-control">
//                   <label className="label">
//                     <span className="label-text"></span>
//                   </label>
                  

//                   <div className="form-control">
//                     <label className="label">
//                       <span className="label-text"></span>
//                     </label>
                    
//                   </div>
//                   <div className="flex justify-left items-start mt-5 gap-3">
//                     <img src="icon-setting.png" alt="" />
//                     <h4 className="text-sm text-[#03AEFD] font-bold">Advance Search</h4>
//                   </div>
//                  </div>
//               <div className="form-control mt-10 flex justify-center items-center">
//                 <button className="bg-[#03AEFD] w-[300px] h-[50px] rounded-3xl justify-center items-center flex gap-2">
//                 <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
//                   <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
//                 </svg>
//                 <h4 className="text-sm font-bold text-white">Search</h4>
//                 </button>
//               </div>
//             </form>
//           </div>
        
//         </>
//     );
    
// };
