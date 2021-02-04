import react from "react";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {ChatMessage} from './ChatMessage';

export const ChatRoom = (props) => {
    
    const messageRef = props.firestore.collection("messages");
    const query = messageRef.orderBy("timePosted").limit(25);

    const [messages] = useCollectionData(query, {idField: "id"});

    console.log("messages: " + messages);

    return(
        <div>
            {messages && messages.map(singleMsg =>{
                <ChatMessage key={singleMsg.id} message={singleMsg} />
            })}
        </div>
    )
}