import { FC, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/alt_logo_name.svg";
import logoMobile from "../assets/logo-mobile.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/navbar-style.css";

const Navbar: FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { path: "/services", label: "Serviços" },
    { path: "/markets", label: "Mercados" },
    { path: "/how-we-do", label: "Como nós fazemos" },
    { path: "/venturus", label: "Quem somos nós" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <picture>
            <source srcSet={logoMobile} media="(max-width: 768px)" />
            <img src={logo} alt="Logo" className="logo-image" />
          </picture>
        </Link>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-button" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        <ul className={`nav-list ${isMenuOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={location.pathname === link.path ? "active" : ""}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;