// Home.jsx
import React from 'react';
import './Home.css'; // Import the CSS file
import Navbar from '../../Components/Navigation/Navbar';
const Home = () => {
  // Was going to add more functionality with the youtube analytics api, but oh well, maybe some other time
  return (
    <div>
      <Navbar />
      <h2 className='notification-container'>Make sure that you input your API credentials on the videos page, before tracking a youtube channel.</h2>
    </div>
  );
};

export default Home;
