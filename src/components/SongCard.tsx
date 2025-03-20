import React from 'react';
import './SongCard.css';

interface SongCardProps {
  title: string;
  artist: string;
  description: string;
  url: string;
}

const SongCard: React.FC<SongCardProps> = ({ title, artist, description, url }) => {
  return (
    <article className="song-card" data-aos="fade-up">
      <div className="song-content">
        <div className="song-header">
          <h3><i className="fas fa-play-circle"></i> {title}</h3>
          <h4 className="artist-name">{artist}</h4>
        </div>
        <p className="song-description">{description}</p>
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="watch-button"
        >
          <i className="fab fa-youtube"></i> Ver en YouTube
        </a>
      </div>
    </article>
  );
};

export default SongCard; 