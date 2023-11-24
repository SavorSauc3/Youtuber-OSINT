import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Video from './Views/Video/Video';
import NotFound from './Views/NotFound/NotFound';
import Home from './Views/Home/Home';
import Chat from './Views/Chat/Chat';

function App() {
  // Any functions that need to be declared are done here
  return (
    <div className="App">
      <header className="App-header">
        <h1>Youtube Dojo</h1>
      </header>
      <div className="App-body">
        {/* Use a div instead of body */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/video' element={<Video />} />
            <Route path='/chat' element={<Chat />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;