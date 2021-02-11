import {useCollectionData} from "react-firebase-hooks/firestore";
import {ChatMessage} from './ChatMessage';


export const ChatRoom = (props) => {
    
    
    const messageRef = props.firestore.collection("messages");
    const query = messageRef.orderBy("timePosted").limit(25);

    const [messages] = useCollectionData(query, {idField: "id"});

    return(
        <div className="chatBox">
            {messages != undefined ? 
            
                messages && messages.map(singleMsg =>
                    <ChatMessage key={singleMsg.id} message={singleMsg} />
                )

                
            :
                <p>ERROR: Cannot revieve messages from firebase.</p>}
            <div ref={props.dummy}></div>
        </div>
    )
}