import {useCollectionData} from "react-firebase-hooks/firestore";
import {SignOut} from "./SignOut";
import { useList } from "react-firebase-hooks/database";

export const NavBar = (props) => {

const tutorialsRef = props.firestore.collection("word");
const [snapshots, loading, error] = useList(tutorialsRef);

    console.log("word array: " + snapshots);

    let word = "";
    if(snapshots != undefined)
    {
        word = snapshots[0].word;
    }
    else
    {
        word = "ERROR: UNDEFINED";
    }

    return (
        <> 
        <div className="navBar">
            <div className="container">
                <div className="row justify-content-center">
                    <SignOut className="col-2" auth={props.auth}/>
                    <h3 className="col-4" style={{textAlign:"right"}}>Don't say:</h3>
                    {props.user != null ? 
                        !loading ? 
                            <h3 className="col-4" style={{textAlign:"left"}}>{word}</h3>
                        :
                            <p>Loading....</p>
                    :
                        <h3>???BANNED WORD???</h3>
                    }
                    
                </div>
            </div>
            
        </div>
        </>
    )
}