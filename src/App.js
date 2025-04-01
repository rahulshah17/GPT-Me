import React from 'react';
import './App.css';
import {Navbar, Footer} from './pages/Navbar';
import Chat from './pages/chat';
import { Typewriter } from 'react-simple-typewriter'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const typewriterEffect = () => (
    <span style={{ marginLeft: '8px', color:'darkgreen' }}>  {}
      <Typewriter
      words = {['GPT-Me!','a way of knowing me!']}
      cursorColor="#000"
      cursor
      cursorStyle='_'
      typeSpeed={100}
      loop = {false}
      deleteSpeed={75}
      delaySpeed={1000}
      >
      </Typewriter>
    </span>
  );
  return (
    <>
      <Navbar />
      <h2 className="d-flex justify-content-center m-2"> Welcome to{typewriterEffect()} </h2>
      <Chat/>
      <Footer />
    </>
  );
}

export default App;
