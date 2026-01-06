import { useState } from 'react'  //named export 
import {ChatInput }from './components/ChatInput' ;
import ChatMessages from './components/ChatMessages'; // default export
import './App.css'


function App() {
        //saving the data :- through array to generate the components of the messages dynamically
        const [chatMessages, setChatMessages] = useState([
          {
            message: "hello chatBot",
            sender: "user",
            id: "id1",
          },
          {
            message: "Hello! How can I help you",
            sender: "robot",
            id: "id2",
          },
          {
            message: "Can you get me todays date?",
            sender: "user",
            id: "id3",
          },
          {
            message: "Today is december 31",
            sender: "robot",
            id: "id4",
          },
        ]);
        // const [chatMessages, setChatMessages ] = array;  // array destructuring

        /* const chatMessages  = array[0];
        const setChatMessages =  array[1]; */

        return (
          <div className = "app-container">
           
            <ChatMessages chatMessages={chatMessages} />

             <ChatInput
              chatMessages={chatMessages}
              setChatMessages={setChatMessages}
            />
          </div>
        );
      }

export default App
