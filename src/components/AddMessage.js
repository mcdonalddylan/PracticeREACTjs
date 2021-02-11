export const AddMessage = (props) => {

    const submitMessage = async (event) => {
        event.preventDefault();

        if (event.currentTarget["msg"].value != "")
        {
            const {uid, photoURL} = props.auth.currentUser;
            const msgText = event.currentTarget["msg"].value;
            const messageRef = props.firestore.collection("messages");
            
            event.currentTarget["msg"].value = "";
            console.log(props.firestore);

            await messageRef.add({
                text: msgText,
                timePosted: props.firebase.firestore.FieldValue.serverTimestamp(),
                uid: uid,
                photoURL: photoURL
            });

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