import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { doSignInWithEmailAndPassword, dosignInWithGoogle } from "../../Firebase/auth";
import { AuthContext } from "../../Contexts/AuthContext";
import { useContext } from "react";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons from React Icons

export const Login = () => {
  const { UserLoggedIn } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem("rememberedEmail");
    const storedPassword = localStorage.getItem("rememberedPassword");
    if (storedEmail && storedPassword) {
      setEmail(storedEmail);
      console.log('password')
      setPassword(storedPassword);
      setRememberMe(true);
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isLoading) {
      setIsLoading(true);
      try {
        const response = await doSignInWithEmailAndPassword(email, password);
        const user = response.user;
        setMessage("You have successfully logged in");

        if (rememberMe) {
          localStorage.setItem("rememberedEmail", email);
          localStorage.setItem("rememberedPassword", password);
        } else {
          localStorage.removeItem("rememberedEmail");
          localStorage.removeItem("rememberedPassword");
        }

        navigate("/");
      } catch (error) {
        console.error("Error signing in:", error);
        setErrorMessage(error?.message ?? "An error occurred. Please try again later.");
        setTimeout(() => {
          setErrorMessage("");
        }, 3000);
      }
      setIsLoading(false);
    }
  };

  const handleGoogleSubmit = (event) => {
    event.preventDefault();
    if (!isLoading) {
      setIsLoading(true);
      dosignInWithGoogle()
        .then(() => {})
        .catch((error) => {
          console.error('Error signing in with Google:', error);
          setErrorMessage(error.message ?? 'An error occurred. Please try again later.');
          setTimeout(() => {
            setErrorMessage("");
          }, 3000);
        })
        .finally(() => setIsLoading(false));
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="pt-5">
        <h2 className="text-3xl font-bold text-center">Login</h2>
      </div>
      <div className="max-w-md mx-auto mt-20 p-5 bg-[#F4F7FA] rounded-lg">
        <div className="pb-10">
          <div className="flex pt-2 mb-4 justify-center">
            <button
              className="flex items-end justify-end text-gray-700  border-gray-300 hover:bg-gray-100 py-2 px- rounded-lg"
              onClick={handleGoogleSubmit}
            >
                <img
                    src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                    alt="Google Logo"
                     className="h-6 w-6 mr-2"
                />
              Sign in with Google
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="johnmary@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="mb-4 relative">
              <label htmlFor="password" className="block text-gray-700">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-indigo-500 pr-10"
              />
              {/* Eye icon to toggle password visibility */}
              <button
                type="button"
                className="absolute inset-y-12 right-0 flex items-center  px-2 focus:outline-none"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="mr-2"
              />
              <label htmlFor="rememberMe" className="text-gray-700">Remember me</label>
            </div>
            <div className="flex justify-center items-center">
              <div className="pt-5">
                <button
                  type="submit"
                  className="bg-[#9DAF89] text-white py-2 px-36 rounded hover:bg-[#846B59] 
                                    focus:outline-none focus:bg-indigo-600 "
                  disabled={isLoading}
                >
                  {isLoading ? "Login in..." : "Login"}
                </button>
                <p>{message}</p>
              </div>
            </div>
          </form>
          {errorMessage && (
            <div className="mt-3 text-red-600">{errorMessage}</div>
          )}
        </div>
      </div>
    </>
  );
};
