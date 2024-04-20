import { createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signInWithPopup, updatePassword,} from "firebase/auth";
import { auth } from "./Firebaseutils";
import {GoogleAuthProvider,signInWithEmailAndPassword } from "firebase/auth";


export const doCreateUserWithEmailAndPassword = async (email, password) =>{
    return createUserWithEmailAndPassword(auth,email,password);
};

export const doSignInWithEmailAndPassword = async (email, password) =>{
    return signInWithEmailAndPassword(auth,email,password);
};

export const dosignInWithGoogle = async ()=>{
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider)

    // result.user
    return result

 };
 export const dosignOut =  () =>{
    return auth.signOut();
 };

//  export const doPasswordReset = (email) =>{
//  return sendPasswordResetEmail(auth, email);
//  };
//   export const doPasswordChange =()=>{
//     return updatePassword(auth.currentUser, password)
//   };
//   export const doSendEmailVerification =()=>{
//     return sendEmailVerification(auth.currentUser,{
//         url:`${window.location.origin}/home`,
//     })
//   }