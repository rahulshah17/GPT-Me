import React from 'react';
import logo from '../assets/images/logo.jpg';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <img src={logo} 
        style={{
          height: '40px', 
          width:'40px', 
          border: 'none', 
          borderRadius:'100px', 
          margin: '5px 15px 5px 5px',
          transform: 'scale(1.3)',
        }} 
          alt="Logo"></img>
        <a className="navbar-brand" href="#">GPT-Me</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="navbar navbar-expand-lg navbar-light bg-light fixed-bottom">
      <div className="container-fluid">
        <span className="navbar-brand">GPT-Me</span>
        <div className="navbar-nav">
          <a className="nav-link">Created By Rahul Shah</a>
          <a className="nav-link"> Fine-Tuned of the LLaMA-3.2-3B-Instruct using QLoRA</a>
          <a className="nav-link" target='_blank' href="https://www.linkedin.com/in/rahulshah1799/">Contact Me</a>
        </div>
      </div>
    </footer>
  );
};

export {Navbar, Footer};
