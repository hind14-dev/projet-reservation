
import React from 'react';

export default function Reservation() {
  return (
    <div style={styles.container}>
      <form style={styles.form}>
        <h2 style={styles.title}>Formulaire de Réservation</h2>

        <input
          type="text"
          placeholder="Votre nom"
          style={styles.input}
          required
        />

        <input
          type="text"
          placeholder="Nom de la salle"
          style={styles.input}
          required
        />

        <select style={styles.input} required>
          <option value="">-- Type de salle --</option>
          <option value="petite">Petite salle</option>
          <option value="moyenne">Salle moyenne</option>
          <option value="principale">Salle principale</option>
        </select>

        <input
          type="date"
          style={styles.input}
          required
        />

        <input
          type="time"
          placeholder="Heure de début"
          style={styles.input}
          required
        />

        <input
          type="time"
          placeholder="Heure de fin"
          style={styles.input}
          required
        />

        <button type="submit" style={styles.button}>Réserver</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #00c9ff, #92fe9d)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  form: {
    backgroundColor: '#ffffff',
    padding: '40px 30px',
    borderRadius: '12px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '450px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  title: {
    textAlign: 'center',
    color: '#333',
    fontSize: '24px',
    marginBottom: '10px',
  },
  input: {
    padding: '12px 14px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontSize: '15px',
    outline: 'none',
  },
  button: {
    padding: '12px',
    backgroundColor: '#00c9ff',
    color: '#fff',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background 0.3s',
  },
};
