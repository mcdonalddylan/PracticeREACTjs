import './App.css';

import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth'; //user authentication

//firebase react hooks
import {useAuthState} from "react-firebase-hooks/auth";
import { ChatRoom } from './components/ChatRoom';
import { SignIn } from './components/SignIn';
import { SignOut } from './components/SignOut';

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

function App() {

  //this hook will return an object full of user data if they are signed in,
  // otherwise the object is null
  const [user] = useAuthState(auth);
  console.log("user object:" + user);

  return (
    <div className="App">
      <header>

      </header>
      <section>
        {
        user ? 
          <>
            <SignOut auth={auth}/>
            <ChatRoom firestore={firestore}/>
          </>
          :
          <SignIn auth={auth}/>
        }
      </section>
        
      
    </div>
  );
}

export default App;
