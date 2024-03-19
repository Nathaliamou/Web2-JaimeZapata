// mensajes dentro del chat (usuario o del chatbot.)
import React from 'react';

const Message = ({ text, isUser }) => {
  return (
    <div style={{ textAlign: isUser ? 'right' : 'left' }}>
      <p style={{ background: isUser ? '#4CAF50' : '#2196F3', color: 'white', padding: '10px', borderRadius: '10px', display: 'inline-block' }}>
        {text}
      </p>
    </div>
  );
};

export default Message;