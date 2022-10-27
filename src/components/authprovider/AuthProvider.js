import React, { useState } from 'react';
import { createContext } from "react";
import { getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
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



    //Auth Info
    const authInfo = {
        googleSignIn,
        githubLogIn
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