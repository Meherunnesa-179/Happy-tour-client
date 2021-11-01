import React, { useState , useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider , onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";


initializeAuthentication();

const useFirebase = () => {
    const [user , setUser] = useState({});
    const [isLoading , setIsLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();


    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth , (user)=> {
           console.log(user);
             if(user){
                  
                 setUser(user)
             } else{
                 setUser({})
             }
             setIsLoading(false)
        })
         return ()=> unsubscribe()
   },[])    
const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider)
}

const logOut=()=> {
   signOut(auth).then(() => {
       setUser({})
     }).catch((error) => {
       // An error happened.
     });
}

    return {
        signInWithGoogle,
        user,
        setUser,
        isLoading,
        setIsLoading,
        logOut
    }
};

export default useFirebase;