import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setWord } from "../actions/wordAction";

export const BannedWord = (props) => {

    const displayWord = useSelector(state => state.word); //gets the word from the redux store (love this hook btw)
    const [selected, setSelected] = useState(false);
    const dispatch = useDispatch();

    const submitWord = (event) => {
        event.preventDefault();

        const newWord = event.currentTarget["word"].value;

        if (newWord.length > 2 && newWord.length < 16)
        {
            //change word in firebase
            changeWord(newWord);
        }
        else
        {
            alert("The word MUST be at least 3 and no more than 15 characters long.");
            setSelected(!selected);
        }
        
    }

    const changeWord = async (newWord) => {

        const collectionRef = props.firestore.collection("word");
        const data = await collectionRef.get();

        let idVal = "";
        if (data != undefined)
        {
            //console.log("word data found");
            data.docs.forEach(item=>{

                idVal = item.id;
            });

            collectionRef.doc(idVal).update({
                word: newWord,
            });
            dispatch(setWord(newWord));
        }

        setSelected(!selected);
    }

    return(
        selected ?
            <form onSubmit={submitWord}>
                <input className="col-8" style={{textAlign:"left"}}
                type="text" placeholder={displayWord} name="word"/>
                <button className="col-3"
                type="submit">change</button>
            </form>
            :
            <h3 className="col-4" style={{textAlign:"left"}} onClick={()=>setSelected(!selected)}>
                {displayWord}
            </h3>
    );
}