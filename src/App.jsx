import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Reservation from './pages/Reservation';
import Accueil from './pages/Accueil';

export default function App() {
  return (
    <Router>
      <header style={styles.header}>
        <nav style={styles.nav}>
          <Link to="/login" style={styles.button}>Connexion</Link>
          <Link to="/register" style={styles.button}>Inscription</Link>
          <Link to="/reservation" style={styles.button}>Réservation</Link>
          <Link to="/accueil" style={styles.button}>Accueil</Link>
        </nav>
      </header>

      <main style={{ paddingTop: '60px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/accueil" element={<Accueil />} />
        </Routes>
      </main>
    </Router>
  );
}

const styles = {
  header: {
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    width: '100%',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.3)',
    zIndex: 1000,
  },
  nav: {
    display: 'flex',
    gap: '10px',
  },
  button: {
    color: 'white',
    textDecoration: 'none',
    padding: '8px 15px',
    backgroundColor: '#007BFF',
    borderRadius: '5px',
    fontWeight: 'bold',
  },
};
<main style={{ paddingTop: '60px' }}>
  <Routes>
    {}
  </Routes>
</main>

