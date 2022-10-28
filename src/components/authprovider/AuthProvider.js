import React, { useState } from 'react';
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../../firebase.init';
import { useEffect } from 'react';

//Context
export const AuthContext = createContext();

// const auth = getAuth(app);
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, user){
    //         setUser(currentUser)
    //     }
    // })



    // Google LogIn
    const googleSignIn = (provider) => {
        signInWithPopup(auth, provider)
    }

    // Github LogIn
    const githubLogIn = (provider) => {
        signInWithPopup(auth, provider)
    }

    //Email and Password register

    const createAccount = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //Email and Password Login

    const loginAccount = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    //Auth Info
    const authInfo = {
        googleSignIn,
        githubLogIn,
        createAccount,
        loginAccount
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