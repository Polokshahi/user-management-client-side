import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.int";

export const AuthContext = createContext(); // export this

const AuthProvider = ({ children }) => {
  
  const [user, setUser] = useState(null); // user state
  const [loading, setLoading] = useState(true); // loading state


  const signUp = (email, password) => {
  
    setLoading(true); // set loading to false after sign up
    return createUserWithEmailAndPassword(auth, email, password)
     
   

   

  }


  // sign in function

  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
    
  }






  // OnAuthStateChanged Observer

  useEffect(() => {
    const unsubscriber = onAuthStateChanged(auth, (currentUser) => {
      console.log( currentUser);
      setUser(currentUser);
      setLoading(false); // set loading to false when user state changes
    })

    return unsubscriber;

  })





  // valueShare

  const valueShare = {
    user,
    setUser,
    signUp,
    signIn,
    loading
  }



  return (
    <AuthContext.Provider 
    value={valueShare}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
