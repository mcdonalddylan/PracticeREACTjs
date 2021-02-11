import './App.css';

import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth'; //user authentication
import "firebase/database"; //database setup

//firebase react hooks
import {useAuthState} from "react-firebase-hooks/auth";
import { ChatRoom } from './components/ChatRoom';
import { SignIn } from './components/SignIn';
import { NavBar } from './components/NavBar';
import {useRef} from "react";
import { AddMessage } from './components/AddMessage';
import LikeDislike from './components/test';

firebase.initializeApp({
  apiKey: "AIzaSyCv_S4IAmiRP8acLbt7payddnvvOtP8brw",
  authDomain: "dontsaywordapp.firebaseapp.com",
  projectId: "dontsaywordapp",
  storageBucket: "dontsaywordapp.appspot.com",
  messagingSenderId: "281172738034",
  appId: "1:281172738034:web:73e406475549a94980b56b",
  measurementId: "G-V52QBF62FW"
});

const auth = firebase.auth();
const firestore = firebase.firestore();
//const db = firebase.database();

function App() {

  //this hook will return an object full of user data if they are signed in,
  // otherwise the object is null
  const [user] = useAuthState(auth);
  const dummy = useRef();

  return (
    <div className="App">
      
      <header>  
        <NavBar firestore={firestore} auth={auth} user={user}/>
      </header>
      {/* <div className="gradDown"></div> */}
      <section>
        <div className="container">
          {
          user ? 
            <>
              <ChatRoom auth={auth} firebase={firebase} 
              firestore={firestore} dummy={dummy}/>
            </>
            :
            <SignIn auth={auth}/>
          }
        </div>
      </section>
      <footer>
        {user != null ? 
        
          <AddMessage auth={auth} firestore={firestore} 
            firebase={firebase} dummy={dummy}/> 
          
          :
          
          <></>}
          
      </footer>
    </div>
  );
}

export default App;
