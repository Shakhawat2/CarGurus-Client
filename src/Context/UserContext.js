import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/Firebase.config';


export const AuthContext = createContext();

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const UserContext = ({ children }) => {
    // user
    const [user, setUser] = useState(null);
    // loader 
    const [loading, setLoading] = useState(true);
    // set Product
    const [product, setProduct] = useState(null);

    // set category
    const [categories, setCategories] = useState(null);
    // set categories details 
    const [categoriesDetails, setCategoriesDetails] = useState({})

    //01. Create Account with Email and Password
    const createAccountWithEmail = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // * reset password

    const resetPassword = (email) =>{
        setLoading(true);
        return sendPasswordResetEmail(auth, email)

    }

    // 02. Sign in With Email and Password 
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // 03. Log out
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    //04. Sign In with Google
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // 05. Update Profile
    const profileUpdate = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }
    //06. On Auth State Change 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        });

        return () => unSubscribe();
    }, [])



    const AuthInfo = {
        createAccountWithEmail,
        logIn,
        logOut,
        profileUpdate,
        signInWithGoogle,
        user,
        loading,
        resetPassword,
        product,
        setProduct,
        categories,
        setCategories,
        categoriesDetails,
        setCategoriesDetails
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;