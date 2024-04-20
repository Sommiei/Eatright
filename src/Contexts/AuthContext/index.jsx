import React, { useContext,useState,useEffect } from "react";
import {auth} from "../../Firebase/Firebaseutils"
import { onAuthStateChanged } from "firebase/auth";
// import { initializeApp } from "firebase/app";

export const AuthContext = React.createContext({});

export function UseAuth(){
    return useContext(AuthContext);
}


export function AuthProvider ({ children }){
    const [CurrentUser, setcurrentUser] = useState(null);
    const [UserLoggedIn, setUserLoggedIn] = useState(false);
    const [loading,setLoading] = useState(true)
    
    useEffect(()=>{
        const UnSubscribe = onAuthStateChanged(auth,initializeUser)
        return UnSubscribe;
        },[])
    
    
        async function initializeUser(user){
            if (user){
                setcurrentUser({...user}) 
            }
            else{
                setcurrentUser(null)
                setUserLoggedIn(true)
            }
            setLoading(false);

        }

        const value ={
            CurrentUser, 
            UserLoggedIn, 
            loading

        }
        return(
            <AuthContext.Provider value = {value}>
                { children}
            </AuthContext.Provider>
        )
    }
