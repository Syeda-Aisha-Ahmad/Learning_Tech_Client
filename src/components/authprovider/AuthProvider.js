import React, { useState } from 'react';
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase.init';
import { useEffect } from 'react';

//Context
export const AuthContext = createContext();

// const auth = getAuth(app);
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, userProfile => {
            return setUser(userProfile);
        })
        return unsubscribe;
    }, [])



    // Google LogIn
    const googleSignIn = (provider) => {
        signInWithPopup(auth, provider);
    }

    // Github LogIn
    const githubLogIn = (provider) => {
        signInWithPopup(auth, provider);
    }

    //Email and Password register
    const createAccount = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //Email and Password Login
    const loginAccount = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    //Update user's profile
    const profileNamePhoto = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    //logout
    const logOut = () => {
        return signOut(auth);
    }

    //Auth Info
    const authInfo = {
        googleSignIn,
        githubLogIn,
        createAccount,
        loginAccount,
        profileNamePhoto,
        user,
        logOut
    };
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;