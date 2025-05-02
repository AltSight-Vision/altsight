import { FC, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/alt_logo_name.svg";
import logoMobile from "../assets/logo-mobile.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/components/navbar-style.css";

const Navbar: FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // trava o scroll do body quando o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

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

        <button
          className="mobile-menu-button"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
        >
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
      <div
        className={`mobile-menu-overlay ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;


