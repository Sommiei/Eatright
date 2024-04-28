import React, { useContext,useState,useEffect } from "react";
import {auth} from "../../Firebase/Firebaseutils"
import { onAuthStateChanged } from "firebase/auth";
// import { initializeApp } from "firebase/app";

export const AuthContext = React.createContext({});

export function UseAuth(){
    return useContext(AuthContext);
}


export function AuthProvider ({ children }){
    const [filteredChatHistory, setFilteredChatHistory] = useState([]);
    const [getUser, setGetUser] =useState('')
    const [email, setemaill] = useState('')
    const [chatHistory, setChatHistory] = useState(() => {
        // Retrieve chat history from local storage or initialize an empty array
        const storedChatHistory = localStorage.getItem('chatHistory');
        return storedChatHistory ? JSON.parse(storedChatHistory) : [];
      });
    const [loading,setLoading] = useState(true)
    
    useEffect(()=>{
       
        },[])
    
    
      

        const value ={
            filteredChatHistory,
            setFilteredChatHistory,
            loading,
            setLoading,
            chatHistory,
            setChatHistory,
            getUser,
            setGetUser,
            email,
            setemaill

        }
        return(
            <AuthContext.Provider value = {value}>
                { children}
            </AuthContext.Provider>
        )
    }
