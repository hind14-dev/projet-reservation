import React from 'react';

export default function Register() {
  return (
    <div style={styles.container}>
      <form style={styles.form}>
        <h2 style={styles.title}>Créer un compte</h2>
        
        <input
          type="text"
          placeholder="Nom complet"
          style={styles.input}
          required
        />
        <input
          type="email"
          placeholder="Adresse e-mail"
          style={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          style={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Confirmer le mot de passe"
          style={styles.input}
          required
        />

        <button type="submit" style={styles.button}>S'inscrire</button>

        <p style={styles.text}>
          Déjà un compte ? <a href="/login" style={styles.link}>Se connecter</a>
        </p>
      </form>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #4b6cb7, #182848)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  form: {
    backgroundColor: '#ffffff',
    padding: '40px 30px',
    borderRadius: '12px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
    width: '100%',
    maxWidth: '420px',
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
  },
  title: {
    textAlign: 'center',
    marginBottom: '10px',
    color: '#333333',
    fontSize: '24px',
  },
  input: {
    padding: '12px 15px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontSize: '16px',
    outline: 'none',
    transition: '0.3s',
  },
  button: {
    padding: '12px',
    backgroundColor: '#4b6cb7',
    color: '#ffffff',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background 0.3s',
  },
  text: {
    fontSize: '14px',
    textAlign: 'center',
    marginTop: '10px',
    color: '#555',
  },
  link: {
    color: '#4b6cb7',
    textDecoration: 'none',
    fontWeight: 'bold',
    marginLeft: '5px',
  },
};
