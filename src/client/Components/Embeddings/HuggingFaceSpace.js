// HuggingFaceSpace.js
import React from 'react';
import '../../Views/Chat/Chat.css';

const HuggingFaceSpace = (props) => {
  const spaceUrl = props.src; // Replace with your Space URL

  return (
    <div className='hugging-face-space'>
      <iframe
        title="Hugging Face Space"
        src={spaceUrl}
        width="100%"
        height="2000"
      ></iframe>
    </div>
  );
};

export default HuggingFaceSpace;