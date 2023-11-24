import React, { useState } from 'react';
import './Searchbar.css';
const backend_config_url = "http://localhost:8000/store_config_data";
const backend_search_url = "http://localhost:8000/youtube_search";

const SearchBar = () => {
  const [query, setQuery] = useState('');
  
  const handleInputChange = (e) => {
    setQuery(e.target.value); // Make sure that the value changes when the user changes it
  };

  // Send user inputs to the backend
  const storeUserData = async (e) => {
    try {
      e.preventDefault(); // Prevent the default form submission behavior

      // Create an object with user data
      const userData = { query };
  
      // Make a POST request to your backend endpoint
      const response = await fetch(backend_config_url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      // Check if the request was successful (status code 200)
      if (response.ok) {
        console.log('User data sent to the backend successfully!');
      } else {
        console.error(`Error: ${response.statusText}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Execute youtube search
  const youtubeSearch = async (e) => {
    try {
      e.preventDefault(); // Prevent the default form submission behavior
  
      // Make a PUT request to your backend endpoint
      const response = await fetch(backend_search_url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      // Check if the request was successful (status code 200)
      if (response.ok) {
        console.log('User data sent to the backend successfully!');
      } else {
        console.error(`Error: ${response.statusText}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={(e) => {
      e.preventDefault(); // Prevent default submit action
      storeUserData(e); // Store the user data
      youtubeSearch(e); // Search youtube with the data previously input
    }} className='search-bar'>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
        className='input-field'
      />
      <button type="submit" className='search-button'>Search</button>
    </form>
  );
};

export default SearchBar;
