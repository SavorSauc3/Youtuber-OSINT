import React, { useState, useEffect } from'react';
import VideoCard from './VideoCard';
import './Navbar.css';
const backendUrl = "http://localhost:8000/videos";

function Videos({ refresh }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(backendUrl) // Gets the videos from the json file initially
     .then(response => response.json())
     .then(data => setVideos(data));
  }, []);

  const handleRefresh = () => {
    fetch(backendUrl) // Refresh button regathers the videos after search is executed
     .then(response => response.json())
     .then(data => setVideos(data));
  }

  return (
    <>
        <button className='refresh-button' onClick={handleRefresh}>Refresh Videos</button>
        <div className="video-container">
            <div className="video-cards">
                {videos.map((video) => (
                <VideoCard key={video.videoId} video={video} />
                ))}
            </div>
        </div>
    </>
  );
}

export default Videos;