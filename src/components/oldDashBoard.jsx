// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { BiChat, BiUser, BiDollar, BiLogOut, BiRegistered, BiNotification, BiChevronLeft, BiChevronRight, BiHome } from 'react-icons/bi'; // Importing icons

// // Placeholder function to simulate user authentication
// const checkUserLoggedIn = () => {
//   // Implement your logic to check if the user is logged in
//   // For demonstration purposes, we'll return true if the user is considered logged in
//   return false; // Replace this with your actual authentication logic
// };

// // Placeholder function to simulate an API call
// const callAPI = async (input) => {
//   // Simulate a delay to mimic API response time
//   await new Promise(resolve => setTimeout(resolve, 1000));
//   // Simulate a response from the API based on the user's input
//   return "This is a response from the API for: " + input;
// };

// export const OldDashBoard = () => {
//   const [userLoggedIn, setUserLoggedIn] = useState(false);
//   const [chatbotActive, setChatbotActive] = useState(false);
//   const [chatInput, setChatInput] = useState('');
//   const [chatHistory, setChatHistory] = useState([]);
//   const [editMessageIndex, setEditMessageIndex] = useState(null);
//   const [searchText, setSearchText] = useState('');
//   const [filteredChatHistory, setFilteredChatHistory] = useState([]);
//   const [dashboardVisible, setDashboardVisible] = useState(true); // State for toggling dashboard visibility
//   const [activeItem, setActiveItem] = useState(-1); // State for tracking active item index
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Check if the user is logged in
//     const userIsLoggedIn = checkUserLoggedIn(); // Implement your logic here
//     setUserLoggedIn(userIsLoggedIn);
//   }, []);

//   useEffect(() => {
//     // Filter chat history based on search text
//     const filteredHistory = chatHistory.filter(chat =>
//       chat.message.toLowerCase().includes(searchText.toLowerCase())
//     );
//     setFilteredChatHistory(filteredHistory);
//   }, [searchText, chatHistory]);

//   // Function to start chatbot interaction
//   const startChatbotInteraction = () => {
//     setChatbotActive(true);
//     // Start timer for 5 minutes
//     setTimeout(() => {
//       // Redirect to signup/login if user is not logged in after 5 minutes
//       if (!userLoggedIn) {
//         navigate('/signup-or-login'); // Redirect to signup or login page
//       }
//     }, 5 * 60 * 1000); // 5 minutes in milliseconds
//   };

//   // Function to handle sending a message to the bot and receiving response
//   const sendMessage = async () => {
//     if (!chatInput.trim()) return; // Ignore empty messages

//     // Add user message to chat history immediately
//     setChatHistory([...chatHistory, { user: true, message: chatInput }]);
    
//     // Call the API to get a response
//     const response = await callAPI(chatInput);

//     // Add API response to chat history
//     setChatHistory([...chatHistory, { user: false, message: response }]);

//     // Clear the input field after sending message
//     setChatInput('');
//   };

//   // Handle pressing Enter key to send message
//   const handleKeyPress = (event) => {
//     if (event.key === 'Enter') {
//       sendMessage();
//     }
//   };

//   // Function to handle editing a message
//   const editMessage = (index) => {
//     setChatInput(chatHistory[index].message);
//     setEditMessageIndex(index);
//   };

//   // Function to handle deleting a message
//   const deleteMessage = (index) => {
//     const updatedChatHistory = [...chatHistory];
//     updatedChatHistory.splice(index, 1);
//     setChatHistory(updatedChatHistory);
//   };

//   useEffect(() => {
//     // Scroll to the bottom of chat history when it updates
//     const chatHistoryDiv = document.getElementById('chat-history');
//     chatHistoryDiv.scrollTop = chatHistoryDiv.scrollHeight;
//   }, [chatHistory]);

//   // Data for the first div: Each item contains text and corresponding icon
//   const firstDivItems = [
//     { text: 'Chat', icon: <BiChat />, navigate: '/chat' },
//     { text: 'User Profile', icon: <BiUser />, navigate: '/UserProfile' },
//     { text: 'Payment', icon: <BiDollar />, navigate: '/payment' },
//     { text: 'Notification', icon: <BiNotification />, navigate: '/notification' },
//     { text: 'Logout', icon: <BiLogOut />, navigate: '/logout' },
//   ];

//   return (
//     <div className="flex">
//       {/* Toggle Dashboard Button */}
//       <button onClick={() => setDashboardVisible(!dashboardVisible)}>
//         {dashboardVisible ? <BiChevronLeft /> : <BiChevronRight />}
//       </button>

//       {/* Dashboard */}
//       {dashboardVisible && (
//         <div className="w-72 bg-white shadow shadow-black h-screen flex flex-col justify-between">
//           <div>
//             {firstDivItems.map((item, index) => (
//               <div 
//                 key={index} 
//                 className={`flex items-center pt-5 cursor-pointer hover:bg-white ${activeItem === index ? 'bg-gray-300' : ''}`} 
//                 onClick={() => {
//                   setActiveItem(index);
//                   navigate(item.navigate);
//                 }}
//               >
//                 <div className='bg-[#846B57] w-[40px] h-[40px] flex text-white rounded-full justify-center items-center'>{item.icon}</div>
//                 <span className="ml-2 font-bold">{item.text}</span>
//               </div>
//             ))}
//           </div>
//           <div></div>
//         </div>
//       )}

//       {/* Second Div */}
//       <div className="p-7 text-md font-bold w-screen">
//         {/* Chat History */}
//         <div id="chat-history" className="overflow-auto h-3/4">
//           {filteredChatHistory.map((chat, index) => (
//             <div
//               key={index}
//               className={`${
//                 chat.user ? 'text-right text-white bg-blue-500' : 'text-left text-black bg-gray-200'
//               } p-2 m-1 rounded-md relative`}
//             >
//               {chat.message}
//               {/* Edit and Delete buttons for user messages */}
//               {chat.user && (
//                 <div className="absolute top-0 right-0">
//                   <button className="text-xs mr-1" onClick={() => editMessage(index)}>Edit</button>
//                   <button className="text-xs" onClick={() => deleteMessage(index)}>Delete</button>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Chat Input */}
//         <div className="flex items-center mt-4">
//           <input
//             type="text"
//             value={chatInput}
//             onChange={(e) => setChatInput(e.target.value)}
//             onKeyPress={handleKeyPress}
//             className="flex-1 border border-gray-300 rounded-md px-[auto] py-2 mr-2"
//             placeholder="Type your message..."
//           />
//           <button
//             onClick={sendMessage}
//             className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
//           >
//             {editMessageIndex !== null ? 'Save' : 'Send'}
//           </button>
//         </div>
//       </div>

//       {/* Third Div */}
//       <div className="w-64 bg-white h-screen overflow-auto shadow shadow-black">
//         {/* Search and Filter */}
//         <div className="p-4">
//           <input
//             type="text"
//             value={searchText}
//             onChange={(e) => setSearchText(e.target.value)}
//             className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
//             placeholder="Search chat history..."
//           />
//           {/* Render Past Chat History */}
//           <div>
//             <h3 className="text-lg font-bold mb-2">Past Chat History</h3>
//             <ul>
//               {chatHistory.map((chat, index) => (
//                 <li key={index}>{chat.message}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
