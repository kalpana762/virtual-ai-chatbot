import React from 'react';
import './Footer.css';


function Footer() {
    return (
        <footer>
            <p style={{ marginBottom: '1rem' }}>ⓒ {new Date().getFullYear()} Virtual Chatbot. All rights reserved</p>
            <p>Our Chatbot uses React components</p>
            <p>
        <a href="https://github.com/kalpana762/virtual-chatbot.git" target="_blank" rel="noopener noreferrer">
          Virtual Chatbot in GitHub </a>
      </p>
      <p>
        Contact: <a href="mail-to:kalpana762@example.com">kalpana762@example.com</a> 
      </p>
        </footer>
    );
}

export default Footer;