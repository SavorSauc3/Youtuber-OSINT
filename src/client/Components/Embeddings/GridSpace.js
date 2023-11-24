// GridSpace.js
import React from 'react';
import HuggingFaceSpace from './HuggingFaceSpace';
import '../../Views/Chat/Chat.css';

const GridSpace = (props) => {
    const iframes = props.links.map((link, index) => {
        return <HuggingFaceSpace key={index} src={link} />
    });

    return (
        <div className='grid-space'>
            {iframes}
        </div>
    );
};

export default GridSpace;