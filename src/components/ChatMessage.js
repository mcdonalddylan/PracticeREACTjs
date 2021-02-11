export const ChatMessage = (props) => {

    const {text, uid, photoURL, timePosted} = props.message;

    console.log("message text: " + text);

    return (
        <div className="row justify-content-between">
            <div className="col-1">
                <img className="avatar" src={photoURL} alt="avatar"/>
            </div>
            <div className="col-10 message">
                <p>{text}</p>
            </div>
            
        </div>
        
    )
}