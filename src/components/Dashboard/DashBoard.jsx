import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DashFirstSide } from './DashFirstSide';
import { DashChatSide } from './DashChatSide';
import { DashHistory } from './DashHistory';
import { Profile } from '../UserProfile';
import axios from 'axios';

export const DashBoard = () => {
  const navigate = useNavigate();
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(true);
  const [showUserProfile, setShowUserProfile] = useState(false);
  const [component, setComponent] = useState('');

  useEffect(() => {
    const checkUserLoggedIn = () => {
      // Check if the token exists in cookies
      return document.cookie.includes('token');
    };
    const userIsLoggedIn = checkUserLoggedIn();
    setUserLoggedIn(userIsLoggedIn);
  }, []);

  // useEffect(() => {
  //   const logoutTimer = setTimeout(() => {
  //     if (!userLoggedIn) {
  //       navigate('/SignIn');
  //     }
  //   }, );

  //   return () => clearTimeout(logoutTimer);
  // }, [userLoggedIn, navigate]);

  useEffect(() => {
    const fetchChatHistory = async () => {
      try {
        const response = await axios.get('API_ENDPOINT');
        setChatHistory(response.data);
      } catch (error) {
        console.error('Error fetching chat history:', error);
      }
    };

    fetchChatHistory();
  }, []);

  const toggleHistory = () => {
    setShowHistory(!showHistory);
  };

  const navigateToProfile = () => {
    setShowUserProfile(true);
  };

  return (
    <>
      <div className="flex justify-between ">
        <DashFirstSide setComponent={setComponent} setShowUserProfile={setShowUserProfile} />
        {component ? (
          <div className=''>
            {component}
          </div>
        ) : (
          <>
            <DashChatSide chatHistory={chatHistory} />
            {showHistory && <DashHistory chatHistory={chatHistory} />}
          </>
        )}
        <button className="toggle-button" onClick={toggleHistory}>
          {showHistory ? <i className="fas fa-angle-double-left"></i> : <i className="fas fa-angle-double-right"></i>}
        </button>
      </div>
    </>
  );
};
