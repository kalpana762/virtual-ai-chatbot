import React, {  useEffect } from 'react';

function About() {
    useEffect(() => {
        console.log('About page rendered');
        document.body.style.backgroundColor = 'lightblue';
        return () => {
            document.body.style.backgroundColor = ''; 
        };
        }, []);
    
    return (
        <div style={{padding: '1rem'}}>
            <h2>About This Virtual Chatbot</h2>
            <p>This application provides an interactive chatbot experience for users.</p>
            <p>Customize this section to introduce your chatbot's features or purpose.</p>
        </div>
    );
}

export default About;