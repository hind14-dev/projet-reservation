
import React from 'react';

export default function Login() {
  return (
    <div style={styles.container}>
      <form style={styles.form}>
        <h2 style={styles.title}>Connexion</h2>
        <input type="email" placeholder="Adresse e-mail" style={styles.input} />
        <input type="password" placeholder="Mot de passe" style={styles.input} />
        <button type="submit" style={styles.button}>Se connecter</button>
        <p style={styles.text}>Pas de compte ? <a href="/register" style={styles.link}>S'inscrire</a></p>
      </form>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(120deg, #4e54c8, #8f94fb)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    backgroundColor: '#fff',
    padding: '40px 30px',
    borderRadius: '12px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
    width: '100%',
    maxWidth: '400px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  title: {
    marginBottom: '10px',
    textAlign: 'center',
    color: '#333',
  },
  input: {
    padding: '12px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontSize: '16px',
    transition: 'all 0.3s ease-in-out',
  },
  button: {
    padding: '12px',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#4e54c8',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background 0.3s',
  },
  text: {
    fontSize: '14px',
    textAlign: 'center',
    color: '#666',
  },
  link: {
    color: '#4e54c8',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};
