import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, 
  onAuthStateChanged,signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import firebaseInit from './../cofig/firebaseInit';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Initialize firebase 
firebaseInit();

const useFirebase = () => {

    // User state
    const [user, setUser] = useState({});

    //Google Auth Provider object
    const googleProvider = new GoogleAuthProvider();

    //navigation
    const navigate = useNavigate();

    // Auth Object
    let auth = getAuth();

    // login
    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

   
  

    // Email password register
    const signUpManually = (email, password, userName) => {
      createUserWithEmailAndPassword(auth, email, password)
      .then( () => {
        updateProfile(auth.currentUser, {
          displayName: userName
        })
      })
    }

   

    // Email password signIn
    const signInManually = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password)
    }

    // Sign Out
    const logout = () => {
      signOut(auth);
      if( localStorage.getItem("displayName") ) {
        localStorage.removeItem("displayName");
      };
    navigate('/login')
    }

    // Observe current user
    useEffect(()=>{
        onAuthStateChanged(auth, (userData) => {
            if (userData) {
              // User is signed in
              setUser(userData)
            } else {
              // User is signed out
              setUser({});
            }
          })
    }, [auth]);

    return  {loginWithGoogle, user, signUpManually, signInManually, logout};
};

export default useFirebase;
