import React, { createContext } from 'react';
import useContent from '../Hooks/useContent';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

//    const allContexts = useFirebase();
   const {places , setPlaces} = useContent();
   console.log(places)
   const data =  {places , setPlaces}
 
    return (
           <AuthContext.Provider value={data}>
               { children }
           </AuthContext.Provider>
);
};

export default AuthProvider;
