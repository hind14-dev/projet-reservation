import React from 'react';

export default function Accueil() {
  return (
    <div style={styles.page}>

      {}
      <section style={styles.hero}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Réservez votre salle de réunion facilement</h1>
          <p style={styles.heroSubtitle}>Une plateforme simple et rapide pour gérer toutes vos réservations.</p>
          <button style={styles.ctaButton}>Réserver maintenant</button>
        </div>
      </section>

      {}
      <section style={styles.featuresSection}>
        <div style={styles.feature}>
          <img 
            src="https://img.icons8.com/ios-filled/100/007BFF/calendar.png" 
            alt="Disponibilité" 
            style={styles.featureIcon} 
          />
          <h3 style={styles.featureTitle}>Disponibilité en temps réel</h3>
          <p style={styles.featureText}>Visualisez instantanément les créneaux disponibles et gagnez du temps.</p>
        </div>

        <div style={styles.feature}>
          <img 
            src="https://img.icons8.com/ios-filled/100/007BFF/checked-checkbox.png" 
            alt="Confirmation" 
            style={styles.featureIcon} 
          />
          <h3 style={styles.featureTitle}>Confirmation instantanée</h3>
          <p style={styles.featureText}>Recevez immédiatement votre confirmation de réservation par email.</p>
        </div>

        <div style={styles.feature}>
          <img 
            src="https://img.icons8.com/ios-filled/100/007BFF/customer-support.png"

            alt="Support" 
            style={styles.featureIcon} 
          />
          <h3 style={styles.featureTitle}>Support réactif</h3>
          <p style={styles.featureText}>Une équipe disponible pour vous aider à tout moment.</p>
        </div>
      </section>

    </div>
  );
}

const styles = {
  page: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#333',
  },
  hero: {
    position: 'relative',
    height: '70vh',
    backgroundImage: 'url("https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1470&q=80")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 1,
  },
  heroContent: {
    position: 'relative',
    zIndex: 2,
    color: 'white',
    textAlign: 'center',
    maxWidth: '700px',
    padding: '0 20px',
  },
  heroTitle: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  heroSubtitle: {
    fontSize: '1.25rem',
    marginBottom: '30px',
  },
  ctaButton: {
    padding: '15px 40px',
    fontSize: '1.1rem',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '30px',
    color: 'white',
    cursor: 'pointer',
    fontWeight: 'bold',
    boxShadow: '0 4px 10px rgba(0,123,255,0.4)',
    transition: 'background-color 0.3s ease',
  },
  featuresSection: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '50px 20px',
    flexWrap: 'wrap',
    gap: '30px',
    backgroundColor: '#f8f9fa',
  },
  feature: {
    flex: '1 1 280px',
    maxWidth: '320px',
    textAlign: 'center',
  },
  featureIcon: {
    width: '80px',
    marginBottom: '20px',
    filter: 'drop-shadow(0 2px 2px rgba(0,123,255,0.3))',
  },
  featureTitle: {
    fontSize: '1.3rem',
    fontWeight: '600',
    marginBottom: '10px',
  },
  featureText: {
    fontSize: '1rem',
    color: '#555',
  },
};
