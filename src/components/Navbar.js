import { Link } from 'react-router-dom';
import '../styles/Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          Portfolio
        </Link>
        <ul className="nav-links">
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 