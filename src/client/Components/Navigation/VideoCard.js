import React from 'react';
import './Navbar.css';

const VideoCard = ({ video }) => {
  return (
    <div className="video-card">
      <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">
        <h5>{video.title}</h5>
        <img src={video.thumbnailUrl} alt={video.title} />
      </a>
    </div>
  );
};

export default VideoCard;