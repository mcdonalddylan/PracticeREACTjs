export const ChatMessage = (props) => {

    const {text, uid, photoURL, timePosted, banned} = props.message;

    return (
        <div className="row justify-content-between">
            
            {banned ?
            <>
                <div className="col-1">
                    <img className="avatar-banned" src={photoURL} alt="avatar"/>
                    <p className="ban-bubble" >BANNED</p>
                </div>
                <div className="col-10 message-banned">
                    <p>{text}</p>
                </div>
            </>
            :
            <>
                <div className="col-1">
                    <img className="avatar" src={photoURL} alt="avatar"/>
                </div>
                <div className="col-10 message">
                    <p>{text}</p>
                </div>
            </>
            }
            
            
        </div>
        
    )
}