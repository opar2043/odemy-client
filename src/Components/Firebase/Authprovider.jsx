import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
export const AuthContex = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create User with pass
  function createUser(email, pass) {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  }

  // Google Provider
  const googleProvider = new GoogleAuthProvider();
  function googleSignIn() {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }

  // Log in user
  function logInUser(email, pass) {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  }

  // log out user
  function logoutUser() {
    setLoading(true);
    return signOut(auth);
  }

  // Update User profile

  function userProfileUpdate(name, photo) {
    setLoading(true);
    const user = auth.currentUser;
    return updateProfile(user, {
      displayName: name,
      photoURL: photo,
    });
  }



  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null); 
      setLoading(false); 
    });
    return () => {
      unSub();
    };
  }, []);
  

  const obj = {
    createUser,
    logInUser,
    user,
    setUser,
    loading,
    setLoading,
    userProfileUpdate,
    logoutUser,
    googleSignIn,
  };

  return <AuthContex.Provider value={obj}>{children}</AuthContex.Provider>;
};

export default AuthProvider;