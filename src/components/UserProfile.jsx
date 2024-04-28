import{ useState, useEffect } from 'react';
import { FiSettings } from 'react-icons/fi';
import axios from 'axios';
import { AuthContext } from '../Contexts/AuthContext';


const SettingsMenu = ({ isOpen, toggleTheme, theme, deleteAccount }) => {
  return (
    <div className={`${isOpen ? 'block' : 'hidden'} md:block fixed md:relative right-0 md:right-auto bottom-0 md:bottom-auto z-50  md:z-auto`}>
      <aside className={`settings-menu transform hover:scale-105 transition-transform font-poppins flex items-center rounded-lg font-semibold text-black text-sm bg-white shadow-lg cursor-pointer  md:static w-64 md:w-auto`}>
        {isOpen && (
          <ul className="menu-list p-4 md:p-10 flex flex-col justify-around gap-3 ">
            <li onClick={deleteAccount} className="cursor-pointer text-red-500">Delete Account</li>
          </ul>
        )}
      </aside>
    </div>
  );
};

export const Profile = () => {
  const [user, setUser] = useState({
    user_firstname: '', // Corrected typo in user_firstname
    user_lastname: '', // Corrected typo in user_lastname
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Retrieve token from cookies
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, "$1");
        console.log(token)
        // Make request to fetch user data
        const response = await axios.get(
          `https://api.eatright.com.ng/api/v1/users/login/get-current-user`,      
          {
            "headers": {
              "Authorization": `Bearer ${token}`,
            }

          }
           // Pass an empty body since we're only sending the token in the headers
          
        );
        const userData = response.data;
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleAvatarChange = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setUser({ ...user, avatar: reader.result });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const deleteAccount = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.delete('http://37.27.42.7:5000/api/v1/users/delete-user');
      if (response.status === 200) {
        console.log('Account deleted successfully');
        // Optionally, you can redirect the user or perform other actions after deleting the account
      } else {
        console.error('Unexpected response status:', response.status);
      }
    } catch (error) {
      console.error('Error deleting account:', error);
    }
  };

  return (
    <div className='flex '>
      <div className='max-w-screen-xl mx-auto h-full flex flex-col mt-52 md:flex-row items-center justify-center gap-10 px-4 md:px-0'>
        <div className="bg-white rounded-lg transform w-[300px] hover:scale-105 transition-transform shadow-lg flex flex-col  w-full md:w-auto">
          <div className="p-4 md:p-8 flex justify-center  ">
            <div className="flex items-center justify-center ">
              <img
                className="h-20 w-20 rounded-full mr-4 md:mr-10 ml-4 object-fit"
                src={user.avatar}
                alt="User Avatar"
              />
              <div>
                <h2 className="text-sm font-bold">{user.email} </h2>
                
                <p className="text-gray-600 text-sm">{user.first_name}</p>
              </div>
            </div>
          </div>
          <div className="  sm:p-4 md:p-8 flex justify-between items-center ">
            <label htmlFor="avatar" className="cursor-pointer">
              <input
                type="file"
                id="avatar"
                className="hidden"
                accept="image/*"
                onChange={handleAvatarChange}
              />
              <span className="text-blue-600">Change Avatar</span>
            </label>
            <FiSettings className="text-gray-600 cursor-pointer" size={24} onClick={toggleMenu} />
          </div>
        </div>
        <SettingsMenu isOpen={isMenuOpen} toggleTheme={toggleTheme} theme={theme} deleteAccount={deleteAccount} />
      </div>
    </div>
  );
};
