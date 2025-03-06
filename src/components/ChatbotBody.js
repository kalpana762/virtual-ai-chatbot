import './ChatbotBody.css';
import React, { useState } from 'react';



function handleTest(){
    const dummymessage1={
        user:"Jane",
        text:"Testing chatbot",
        timestamp: "2025-12-01"
    }
}
function ChatbotBody(){
    const [message, setMessage] = useState('');
    const currentDateTime = new Date().toLocaleString();
    const [messages, setMessages] = useState([]);
    const [username, setUsername] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');


    
    function handleMessageChange(event) {
        setMessage(event.target.value);
        console.log("Current message:",event.target.value);
      }

      function handleDeleteMessage(indexToRemove){
        const confirmed = window.confirm("Are you sure you want to delete this message?");
        if(!confirmed) return;
        const updatedMessages = messages.filter((_, index)=> index !== indexToRemove);
        setMessages(updatedMessages);
      }
      function handleSendMessage(){
        if(!message.trim()){
            alert("please enter a message");
            return;
        }
        const newChatMessage = { text: message, user: username, date: date, time: time};
        setMessages([...messages,newChatMessage]);
        console.log("New chat message:", newChatMessage);
            setMessage('');

    }  
    return(
        <main>
            <h2>Chat with your Virtual Assistant</h2>
            <form>
                <p style={{ color: 'blue', fontStyle: 'italic',fontSize: '18px' }}>You can get any answer for your question in this Chatbot</p>
                <label>
                    Name:
                    {/* <input type="text" name="username" placeholder="Enter your display name"/> */}
                    <input type="text" value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    placeholder="Enter your name" />
                </label>
                <br /><br />
                <label>
                    Message:
                    <textarea name="message" placeholder="Start chatting here .."></textarea>

                </label>
                <br /><br />
                <label>
                    Date&time:
                    <input type="date"
                    value={date}
                    onChange={(e)=>setDate(e.target.value)} 
                     />
                     <input type="time"
                    value={time}
                    onChange={(e)=>setTime(e.target.value)} 
                     />
                </label>
                <textarea
                    name="message"
                    value={message}
                    onChange={handleMessageChange}
                    placeholder="Type your message here..."
                />
                <br /><br />
                <p>Current system date/time: {currentDateTime}</p>
                <button type="button" onClick={handleSendMessage} disabled={!message.trim()}>Send</button>
                <button type="button" onClick={handleTest}>Test</button>


            </form>
            <div className = "chat-display">
                {messages.map((msg,index)=>(
                    <div key={index}>
                        <p>{msg.user} said at{msg.time || currentDateTime} on {msg.date || ""}:</p>
                        <p>{msg.text}</p>
                        </div>
                ))}
            </div>
            <div>
                <h3>Chat History:</h3>
                {messages.map((msg, index)=>(
                    <div key={index}>
                        <p>{msg.user}: {msg.text}</p>
                        <button onClick={()=>{
                            if(window.confirm("Are you sure?")){
                                handleDeleteMessage(index);
                            }
                        }}>Delete</button>
                        </div>
                ))}
                {messages.length === 0 ? (
                    <p style={{ fontStyle: 'italic', color: 'blue' }}>No messages yet</p>
                ) : (
                    messages.map((msg, index) => (
                        <div key={index}>
                            <p>{msg.text}</p>
                        </div>
                    ))
                )}
            </div>

        </main>
    )
}

export default ChatbotBody;