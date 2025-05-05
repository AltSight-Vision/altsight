// src/components/Navbar.tsx
import { FC, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/alt_logo_name.svg";
import logoMobile from "../assets/logo-mobile.svg";
import "../styles/components/navbar-style.scss";

const Navbar: FC = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navLinks = [
    { path: "/", label: "Início", hideOnMobile: true },
    { path: "/quemsomos", label: "Quem Somos" },
    { path: "/nossaempresa", label: "Nossa Empresa" },
  ];

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <picture>
            <source srcSet={logoMobile} media="(max-width: 768px)" />
            <img src={logo} alt="Logo" className="logo-image" />
          </picture>
        </Link>
        <ul className="nav-list">
          {navLinks.map((link) => {
            if (isMobile && link.hideOnMobile) return null;
            return (
              <li key={link.path}>
                <Link to={link.path} className="nav-link">
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


