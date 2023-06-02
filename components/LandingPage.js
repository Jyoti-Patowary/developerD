import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Landing = () => {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const message = "Full Stack Developer";
  
  useEffect(() => {
    let timeout;
    
    if (isTyping) {
      timeout = setTimeout(() => {
        setText(message.substring(0, text.length + 1));
      }, 100);
    }

    return () => clearTimeout(timeout);
  }, [isTyping, text]);
  
  const handleTypingComplete = () => {
    setIsTyping(false);
  };
  
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex justify-between p-4">
        <div className='flex'>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="mr-4">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
        </div>
        <div className="flex items-center">
          <FaEnvelope size={24} className="mr-2" />
          <span className="text-sm font-bold">Get in Touch</span>
        </div>
      </div>
      <main className="container mx-auto px-4 py-12 flex items-center justify-center">
        <div className="w-1/2">
          <img src="https://images.unsplash.com/photo-1684388021048-b0a9f52a8a80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Profile" className="rounded-full h-60 w-60 mx-auto mb-8" />
          <section className="text-center">
            <h5 className="text-xl font-bold mb-4 uppercase">{text}</h5>
            <h2 className="text-6xl uppercase font-bold">Jyoti Patowary</h2>
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-full mt-8">Contact Me</button>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Landing;
