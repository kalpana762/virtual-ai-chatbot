import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import ChatbotBody from './components/ChatbotBody';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Profile from './components/Profile';
import ChatHistory from './components/ChatHistory';
import FetchDemo from './components/FetchDemo';
import FetchDemoAsync from './components/FetchDemoAsync';


import './App.css'

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<ChatbotBody />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/chat-history' element={<ChatHistory />} />
      <Route path='/fetch-demo' element={<FetchDemo />} />
      <Route path='/fetching-demo' element={<FetchDemoAsync />} />



    </Routes>
    <Footer />
    </BrowserRouter>

  );
}

export default App;
