import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';


export const FirebaseContext = createContext();

const AuthProvider = ({children}) => {
    return (
        <FirebaseContext.Provider value={useFirebase()}>
            {children}
        </FirebaseContext.Provider>
    );
};

export default AuthProvider;