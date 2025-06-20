import React from 'react';
import './Home.css';
import videoBg from '../assets/background-video.mp4'; 

export default function Home() {
  return (
    <div className="home-container">
      <video className="bg-video" autoPlay muted loop>
        <source src={videoBg} type="video/mp4" />
        Votre navigateur ne supporte pas les vidéos HTML5.
      </video>

      <div className="overlay">
        <div className="content">
          <h1 className="title">RÉSERVATION DE SALLES</h1>
          <p className="subtitle">Bienvenue dans notre plateforme de réservation</p>
         
         
        </div>
      </div>
    </div>
  );
}
