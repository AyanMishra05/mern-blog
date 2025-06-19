import { Button } from "flowbite-react";
import React from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase.js"; // Adjust the import path as necessary
import { useDispatch } from "react-redux";  
import { signInSuccess, signInFailure } from "../redux/user/userSlice.js"; // Adjust the import path as necessary   
import { useNavigate } from "react-router-dom"; // Adjust the import path as necessary

export default function OAuth() {
    const auth= getAuth(app);
    const dispatch = useDispatch();
    const navigate = useNavigate(); 
    const handleGoogleClick = async() => {
    const provider=new GoogleAuthProvider()
    provider.setCustomParameters({prompt: "select_account"});
    try{
        const resultsFromGoogle=await signInWithPopup(auth, provider) 
        const res=await fetch("/api/auth/google", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: resultsFromGoogle.user.displayName,
                email: resultsFromGoogle.user.email,
                googlePhotoUrl: resultsFromGoogle.user.photoURL,
            }),
        });
        const data =await res.json();
        if(res.ok) {
            dispatch(signInSuccess(data.user));
            navigate("/");
        }
        else{
            dispatch(signInFailure(data.message));
        }
    }catch(error){
        console.error(error);
        dispatch(signInFailure(error.message));
        // Handle error appropriately, e.g., show an alert or log the error
    
    }
    }
  return <Button type="button" outline onClick={handleGoogleClick}>
    <AiFillGoogleCircle className="w-6 h-6 mr-2"/>
    Sign in with Google
  </Button>;
}
