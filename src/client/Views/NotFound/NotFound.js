import React from 'react';
import './NotFound.css'
import Navbar from '../../Components/Navigation/Navbar'

const NotFound = () => {
  return (
    <div>
        <div className='errorMsg'>
            <h2>404 - Page Not Found</h2>
            <p>Sorry, the page you are looking for does not exist.</p>
        </div>
        <div>
            <Navbar />
        </div>
    </div>
  );
};

export default NotFound;
