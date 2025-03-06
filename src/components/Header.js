import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header>
      <h1>My Awesome Virtual Chatbot</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to ='/profile'>
            <img 
              src="/profile.jpg"
              alt="Profile Icon" 
              style={{ width: '20px', height: '20px', marginRight: '5px' }} 
            />
            Profile
          </Link></li> 
          <li><Link to="/chat-history">Chat History</Link></li>
          </ul>     
          </nav>
          <button 
        onClick={() => alert("Hello from the Header!")}
        style={{  padding: '10px 15px',
            fontSize: '14px',
            background:' #007bff',
            color: 'white', 
            cursor: 'pointer',
            borderRadius: '5px',
            display: 'block', 
            width: '150px',  
            margin: '10px auto'}} 
      >
        Click Me
      </button>
    
    </header>
  );
}

export default Header;