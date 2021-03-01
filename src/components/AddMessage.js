import { useSelector } from "react-redux";

export const AddMessage = (props) => {

    const badWord = useSelector(state=>state.word);

    const submitMessage = async (event) => {
        event.preventDefault();

        if (event.currentTarget["msg"].value != "")
        {
            const msgText = event.currentTarget["msg"].value;
            const {uid, photoURL} = props.auth.currentUser;
            const messageRef = props.firestore.collection("messages");

            event.currentTarget["msg"].value = ""; //empties the message box

            //if the message doesn't include the bad word...
            if(msgText.toLowerCase().includes(badWord.toLowerCase()) === false)
            {
                await messageRef.add({
                    text: msgText,
                    timePosted: props.firebase.firestore.FieldValue.serverTimestamp(),
                    uid: uid,
                    photoURL: photoURL,
                    banned: false
                })
                .catch((error)=>{
                    alert(error);
                });
            }
            else
            {
                await messageRef.add({
                    text: `BANNED for saying: "`+ msgText + `"`,
                    timePosted: props.firebase.firestore.FieldValue.serverTimestamp(),
                    uid: uid,
                    photoURL: photoURL,
                    banned: true
                })
                .catch((error)=>{
                    alert(error);
                });

                const bannedRef = props.firestore.collection("banned");

                await bannedRef.add({
                    uid: uid,
                });
            }

            //keeps the chat scrolling to the bottom of the list of messages when a new one is added
            props.dummy.current.scrollIntoView({behavior: "smooth"});
            
        }
        
    }

    return (
        <div className="addMsg">
            <form onSubmit={submitMessage} className="row align-items-center justify-content-center">
                <div className="col-9">
                    <input type="text" placeholder="nice message here" 
                    className="input" name="msg"/>
                </div>
                <div className="col-3">
                    <input type="submit" value="send message" 
                    className="addMsgBtn" name="btn"/>
                </div>
            </form>
        </div>
        
    )
}