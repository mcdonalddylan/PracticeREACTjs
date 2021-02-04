import react from "react";
import firebase from "firebase/app";

export const SignIn = (props) => {
    
    const signInAttempt = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        props.auth.signInWithPopup(provider);
    }

    return(
        <div>
            <button onClick={signInAttempt}
            style={{padding: 20, backgroundColor: "cyan"}}>Sign in with Google</button>
        </div>
    )
}