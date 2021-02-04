import react from "react";

export const ChatMessage = (props) => {

    const {text, uid, photoUrl, timePosted} = props.message;

    console.log("message text: " + text);

    return (
        <p style={{color: "black", fontSize: 100}}>{text}</p>
    )
}