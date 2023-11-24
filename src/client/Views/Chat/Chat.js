// YourParentComponent.js
import React from 'react';
import GridSpace from '../../Components/Embeddings/GridSpace';
import Navbar from '../../Components/Navigation/Navbar';
import './Chat.css'

const Chat = () => {
  return (
    <>
        <div className='chat-bar'>
            <GridSpace links={['https://huggingface.co/chat/']} />
        </div>
        <div>
            <Navbar />
        </div>
    </>
  );
};

export default Chat;
