// YouTubeVideo.js
import React from 'react';
import YouTube from 'react-youtube';
import { useParams } from 'react-router-dom';
import './YouTubeVideo.css'; // Import the CSS file

function YouTubeVideo() {
  const { vid } = useParams();

  const onVideoEnd = () => {
    // Redirect to the next page when the video ends
    window.location.href = '/vidquiz';
  };

  return (
    <div className="fullscreen-video" >
      <YouTube
        videoId={vid}
        onEnd={onVideoEnd}
        containerClassName="youtube-container"
      />
    </div>
  );
}

export default YouTubeVideo;