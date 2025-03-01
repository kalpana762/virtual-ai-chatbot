import React from 'react';
import './ChatbotBody.css'

function handleSendMessage(){
    alert("You clicked the dend button!");
    const dummyMessage={
        user:"Guest",
        text: "Hello Chatbot!",
    }
    console.log("Dummy message:",dummyMessage);
}
function handleTest(){
    const dummymessage1={
        user:"Jane",
        text:"Testing chatbot",
        timestamp: "2025-12-01"
    }
}
function ChatbotBody(){
    return(
        <main>
            <h2>Chat with your Virtual Assistant</h2>
            <form>
                <p style={{ color: 'blue', fontStyle: 'italic',fontSize: '18px' }}>You can get any answer for your question in this Chatbot</p>
                <label>
                    Name:
                    <input type="text" name="username" placeholder="Enter your display name"/>
            
                </label>
                <br /><br />
                <label>
                    Message:
                    <textarea name="message" placeholder="Start chatting here .."></textarea>

                </label>
                <br /><br />
                <button type="button" onClick={handleSendMessage}>Send</button>
                <button type="button" onClick={handleTest}>Test</button>

            </form>
            
        </main>
    )
}

export default ChatbotBody;