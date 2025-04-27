import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/alt_logo_name.svg";
import "../styles/navbar-style.css";

const Navbar: FC = () => {
  const location = useLocation();

  const navLinks = [
    { path: "/services", label: "Serviços" },
    { path: "/markets", label: "Mercados" },
    // { path: "/insights", label: "Insights" },
    { path: "/how-we-do", label: "Como nós fazemos" },
    { path: "/venturus", label: "Quem somos nós" },
  ];

  return (
    <nav className="navbar">
      <ul className="list">
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo-image" />
          </Link>
        </div>
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={location.pathname === link.path ? "active" : ""}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;