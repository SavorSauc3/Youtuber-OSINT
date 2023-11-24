import React from 'react';
import './Video.css';
import SearchBar from '../../Components/Searching/SearchBar';
import Navbar from '../../Components/Navigation/Navbar';
import Input from '../../Components/Inputs/Input';
import Videos from '../../Components/Navigation/Videos';
function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Youtube Dojo</h1>
      </header>
      <div className="App-body"> {/* Use a div instead of body */}
        <Navbar />
        <SearchBar />
        <Input />
        <Videos />
      </div>
    </div>
  );
}

export default App;