import React, { useEffect, useState } from 'react';
import './chat.css';
import logo from '../assets/images/logo.jpg';
import send from '../assets/images/send2.png';
import user from '../assets/images/user.webp';

function Chat() {

    const [messages, setMessages] = useState([]);
    const [input,setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect (() => {
        const welcomeMsg = [{text: 'Hello I am <b>GPT-Me</b>, How can I help you?', sender: "bot"}]
        setMessages(welcomeMsg);
    }, []);
    const handleMessage = async () => {
        if(input) {
            const newMsg = [...messages, {text: input, sender: "user"}];
            setMessages(newMsg);
            setInput('');
            
            try {
                setIsLoading(true);
                // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
                const response = await fetch('YOUR_API_ENDPOINT', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ message: input })
                });
                
                const data = await response.json();
                setMessages(prev => [...prev, { text: data.response, sender: "bot" }]);
            } catch (error) {
                console.error('Error:', error);
                setMessages(prev => [...prev, { text: "Sorry, I encountered an error.", sender: "bot" }]);
            } finally {
                setIsLoading(false);
            }
        }
    };

    return(
        <div className="mainContainer">
            <div className='chatArea'>
                {messages.map((msg, index) => (
                    msg.sender === 'user' ? (
                        <div className="d-flex flex-row-reverse align-items-center">
                            <img src={user} className='userIcon' alt='user Icon' />
                            <div key={index} className="message userMsg">
                                {msg.text}
                            </div>
                        </div>
                    ) : (
                        <div className="d-flex align-items-center">
                            <img src={logo} className='botIcon' alt='Logo' />
                            <div dangerouslySetInnerHTML={{__html: msg.text}} className='botMsg m-2'></div>
                        </div>
                        
                    )
                ))}
            </div>
            <div className='chatFooter'>
                <input 
                    type='text' 
                    placeholder='Type your message' 
                    value = {input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button 
                    onClick={handleMessage}
                    className="sendIcon"
                >
                    <img src={send} alt="Send" />
                </button>
            </div>
        </div>
    );
}

export default Chat;