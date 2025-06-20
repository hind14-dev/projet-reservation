# Projet Réservation de Salle - Frontend React.js

Ce projet React.js simple propose une application de réservation de salle avec :
- Inscription et connexion
- Navigation simple
- Validation de formulaires
- Design responsive avec Tailwind CSS
- Structure claire et fichiers faciles à comprendre

## Installation

1. Installer les dépendances :

```bash
npm install react react-dom react-router-dom tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

2. Configurer Tailwind dans `tailwind.config.js` :

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

3. Lancer le projet :

```bash
npm start
```

## Structure du dossier `src`

- `assets/` : styles globaux et logo
- `components/` : composants React réutilisables (Navbar)
- `pages/` : pages principales (Home, Login, Register)
- `App.jsx` : composant principal avec routing
- `main.jsx` : point d'entrée React

## Personnalisation

- Remplacez `src/assets/logo.png` par votre propre logo.
- Ajustez les styles dans `src/assets/styles.css`.
