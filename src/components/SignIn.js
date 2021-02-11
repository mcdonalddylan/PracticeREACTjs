import firebase from "firebase/app";

export const SignIn = (props) => {
    
    const signInAttempt = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        props.auth.signInWithPopup(provider);
    }

    return(
        <div>
            <button onClick={signInAttempt}
            className="signInBtn">Sign in with Google</button>
        </div>
    )
}