// Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  const handleMouseEnter = (event) => {
    event.target.style.fontSize = '20px';
  };

  const handleMouseLeave = (event) => {
    event.target.style.fontSize = '16px';
  };

  return (
    <div>
      <div className="button-container"> {/* Apply the button container class */}
        <Link to="/" className="button" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          Home
        </Link>
        <Link to='/video' className='button' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          Videos
        </Link>
        <Link to='/chat' className='button' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          Chat
        </Link>
      </div>
    </div>
  );
};

export default Navbar;