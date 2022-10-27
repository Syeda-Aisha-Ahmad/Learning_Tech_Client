import React from 'react';
import { createContext } from "react";
import { getAuth, signInWithPopup } from "firebase/auth";
import app from '../../firebase.init';

//Context
export const AuthContext = createContext();

// const auth = getAuth(app);
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    // const [user, setUser] = useState({});

    const googleSignIn = (provider) => {
        signInWithPopup(auth, provider)
    }



    //Auth Info
    const authInfo = {
        googleSignIn
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