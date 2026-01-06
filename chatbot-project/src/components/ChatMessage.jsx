import RobotProfile from '../assets/robot.png';
import USerProfile from '../assets/user.png';
import './ChatMessage.css'


export function ChatMessage({ message, sender }) {
        //this format do the same thing as in line 30
        //const message = props.message;
        //const sender = props.sender;

        //const {message , sender} = props;  //this works same as above two

        /*
        if(sender === 'robot'){
          return (
             <div>
              <img src = "robot.png" width = "50" />
          {message}
          
             </div>
          );
        }
          */

        return (
          <div className = {
            sender === "user" ? 
            'chat-message-user'
             :'chat-message-robot' }>
            {sender === "robot" && <img src= {RobotProfile}  className= "chat-message-profile" />}
            <div className = "chat-message-text">
            {message }
            </div>
            {sender === "user" && <img src= {USerProfile} className= "chat-message-profile"></img>}
            
          </div>
        );
      }