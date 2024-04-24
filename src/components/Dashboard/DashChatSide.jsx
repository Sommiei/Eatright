import  { useState, useEffect } from 'react';
import axios from 'axios';
import { FiXCircle } from 'react-icons/fi';

export const DashChatSide = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [chatInput, setChatInput] = useState('');
  const [chatCount, setChatCount] = useState(0);

  useEffect(() => {
    if (chatCount === 5) {
      window.location.href = '/payment'; // Redirect when chatCount reaches 5
    }
  }, [chatCount]); // Trigger effect whenever chatCount changes

  useEffect(() => {
    const handlePaymentSuccess = () => {
      // Check if the URL contains a success indicator (e.g., '/payment?success=true')
      if (window.location.href.includes('success=true')) {
        // Redirect to the dashboard after successful payment
        window.location.href = '/dashboard';
      }
    };

    // Call handlePaymentSuccess when component mounts
    handlePaymentSuccess();

    // Listen for changes in the URL (in case of successful payment)
    window.addEventListener('popstate', handlePaymentSuccess);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('popstate', handlePaymentSuccess);
    };
  }, []); // Run only once when the component mounts

  const sendMessage = async () => {
    if (!chatInput.trim()) return;

    const userMessage = {
      user: true,
      message: chatInput,
    };

    setChatHistory(prevChatHistory => [...prevChatHistory, userMessage]);

    try {
      const response = await axios.post('https://38e2-129-205-113-190.ngrok-free.app/api/v1/users/user_prompt', {
        text: chatInput,
      });

      const botMessage = {
        user: false,
        message: response.data.message,
      };

      setChatHistory(prevChatHistory => [...prevChatHistory, botMessage]);
    } catch (error) {
      console.error('Error fetching bot response:', error);
    }

    setChatInput('');

    // Increment chat count after sending message
    setChatCount(prevCount => prevCount + 1);
  };

  const handleStopInput = () => {
    setChatInput('');
  };

  return (
    <div className=" pl-10 pt-12 pb-10 pr-10  text-md font-bold w-full flex flex-col h-screen">
      <div id="chat-history" className="overflow-auto flex-1">
        {Array.isArray(chatHistory) && chatHistory.length > 0 ? (
          chatHistory.map((chat, index) => (
            <div
              key={index}
              className={`flex ${chat.user ? 'justify-end' : 'justify-start'} mb-2`}
            >
              <div
                className={`max-w-[80%] ${chat.user ? 'bg-[#846B59] text-white shadow-lg rounded-br-none rounded-lg' : 'bg-white text-black shadow-lg rounded-bl-none rounded-lg'} p-2`}
                style={{ wordWrap: 'break-word' }}
              >
                {chat.message}
              </div>
            </div>
          ))
        ) : (
          <div className="text-gray-400 ">No chat history available</div>
        )}
      </div>
      <div className="flex items-center mt-4">
        <input
          type="text"
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          className="flex-1 border border-gray-300 rounded-md px-4 py-2 mr-2 text-sm"
          placeholder="Type your message..."
        />
        {chatInput && (
          <button onClick={handleStopInput} className="text-gray-400 hover:text-gray-600">
            <FiXCircle />
          </button>
        )}
        <button onClick={sendMessage} className="bg-[#846B59] hover:bg-[#bda493] text-white font-bold py-2 px-4 rounded">
          Send
        </button>
      </div>
    </div>
  );
};
