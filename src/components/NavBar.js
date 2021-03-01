import { useCollectionData } from "react-firebase-hooks/firestore";
import {SignOut} from "./SignOut";
import { useList } from "react-firebase-hooks/database";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setWord } from "../actions/wordAction";
import { BannedWord } from "./BannedWord";

export const NavBar = (props) => {

    const loading = useRef(false);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        if (props.user != null && loading.current == false) 
        {
            fetchWord();
        }
        
    });

    const fetchWord = async () => {

        const collectionRef = props.firestore.collection("word");
        loading.current = true;
        const data = await collectionRef.get();
        loading.current = false;

        if (data != undefined)
        {
            //console.log("word data found");
            data.docs.forEach(item=>{

                //console.log(item.data().word);
                dispatch(setWord(item.data().word));
            });
        }
        
    }

    return (
        <> 
        <div className="navBar">
            <div className="container">
                <div className="row justify-content-center">
                    <SignOut className="col-2" auth={props.auth}/>
                    <h3 className="col-4" style={{textAlign:"right"}}>Don't say:</h3>
                    {props.user != null ? 
                        !loading.current ? 
                            //place bannedWord component here which allows you to view and edit the word
                            <BannedWord firestore={props.firestore}/>
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