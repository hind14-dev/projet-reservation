import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 flex items-center justify-between text-white">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
        <Link to="/" className="font-bold text-xl hover:underline">Réservation</Link>
      </div>
      <div className="flex gap-4">
        <Link to="/login" className="hover:underline">Connexion</Link>
        <Link to="/register" className="hover:underline">Inscription</Link>
        <Link to="/reservation" className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-200">Nouvelle Réservation</Link>
      </div>
    </nav>
  );
}


<Link to="/reservation">Réservation</Link>

