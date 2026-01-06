import {  useRef , useEffect } from 'react'
import {ChatMessage} from './ChatMessage';
import './ChatMessages.css';

function ChatMessages({ chatMessages }) {
       const chatMessagesRef =  useRef(null);
        useEffect(() =>{
         const containerElem =  chatMessagesRef.current
         if(containerElem){
          containerElem.scrollTop = containerElem.scrollHeight;
         }
        } ,[chatMessages]);
        //learning state : by how to convert chat messages into the state
        // state = data that is connected to the HTML , when we update this data , it will the update the HTML

        return (
          <div className = "chat-messages-container"
          ref = {chatMessagesRef}
          >
            {chatMessages.map((chatMessage) => {
              return (
                <ChatMessage
                  message={chatMessage.message}
                  sender={chatMessage.sender}
                  key={chatMessage.id}
                />
              );
            })}
          </div>
        );
      }

      export default ChatMessages;