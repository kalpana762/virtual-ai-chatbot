import React, { useState, useEffect } from 'react';

function ChatHistory(){
    const [chatCount, setChatCount] = useState(0);
        const [chatHistory,setchatHistory] = useState(null);

    const incrementChatCount = () => {
        setChatCount(chatCount + 1);
      };
    
      const decrementChatCount = () => {
        if (chatCount > 0) {
          setChatCount(chatCount - 1);
        }
    };
    const buttonStyle = {
        padding: '8px 16px',
        fontSize: '1.2em',
        margin: '5px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: '#007bff',
        color: 'white',
      };
    useEffect(()=>{
            console.log('ChatHistory updated, count= ',chatCount);
        },[chatCount]);
        useEffect(() => {
          const fetchChatHistory = async () => {
            try {
              const response = await fetch('http://localhost:3001/api/chat-history');
              if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
              }
              const data = await response.json();
              setchatHistory(data);
            } catch (error) {
              console.error('Error fetching chat history:', error);
              setchatHistory([]); // Set to empty array to indicate error
            }
          };
      
          fetchChatHistory();
        }, []);
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
                    <h1>Chat History</h1>
                    {chatHistory ? (
                      <div>
                        {chatHistory.map((chat,index)=>(
                          <div key={index}>
                            <p><strong>{chat.sender}:</strong>{chat.message}</p>
                            </div>
                        ))}
                        </div>
                    ):(
                      <p>Loading...</p>
                    )}
      <p style={{ fontSize: '1.5em' }}>Chat Count: {chatCount}</p>
      <button style={{ ...buttonStyle, backgroundColor: '#28a745' }} onClick={incrementChatCount}>+</button>
      <button style={{ ...buttonStyle, backgroundColor: '#dc3545' }} onClick={decrementChatCount}>-</button>
    </div>
    );
}


export default ChatHistory;