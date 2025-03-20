import React from 'react';
import './Home.css';
import SongCard from './SongCard';

const Home: React.FC = () => {
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    window.location.reload();
  };

  const songs = [
    {
      title: "Bohemian Rhapsody",
      artist: "Queen",
      description: "Una obra maestra del rock que combina ópera, balada y rock duro en una experiencia musical única.",
      url: "https://www.youtube.com/watch?v=fJ9rUzIMcZQ"
    },
    {
      title: "Warriors",
      artist: "Kymani Marley",
      description: "Un poderoso himno de resistencia y fuerza que combina reggae con elementos modernos, transmitiendo un mensaje de unidad y lucha.",
      url: "https://www.youtube.com/watch?v=Q0t8IiwQ4jM"
    },
    {
      title: "Billie Jean",
      artist: "Michael Jackson",
      description: "Uno de los éxitos más emblemáticos del Rey del Pop, con su inconfundible línea de bajo.",
      url: "https://www.youtube.com/watch?v=Zi_XLOBDo_Y"
    }
  ];

  return (
    <div className="home-container">
      <nav className="home-nav">
        <h1><i className="fas fa-music"></i> Blog Musical</h1>
        <button onClick={handleLogout} className="logout-button">
          <i className="fas fa-sign-out-alt"></i> Cerrar Sesión
        </button>
      </nav>
      <main className="home-content">
        <h2 className="welcome-text">¡Bienvenido a Mi Blog Musical!</h2>
        <p className="intro-text">Descubre algunas de las mejores canciones de todos los tiempos</p>
        <div className="blog-posts">
          {songs.map((song, index) => (
            <SongCard
              key={index}
              title={song.title}
              artist={song.artist}
              description={song.description}
              url={song.url}
            />
          ))}
        </div>
      </main>
      <footer className="home-footer">
        <p>© 2024 Blog Musical - Compartiendo la magia de la música</p>
      </footer>
    </div>
  );
};

export default Home; 