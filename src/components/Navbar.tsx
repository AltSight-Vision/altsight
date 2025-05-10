// src/components/Navbar.tsx
import { FC, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/alt_logo_name.svg";
import logoMobile from "../assets/logo-mobile.svg";
import "../styles/components/navbar.scss";

const Navbar: FC = () => {
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
    { path: "/home", label: "Início", hideOnMobile: true }, 
    { path: "/quemsomos", label: "Quem Somos" },
  ];

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <NavLink to="/" end className="navbar-logo">
          <picture>
            <source srcSet={logoMobile} media="(max-width: 768px)" />
            <img src={logo} alt="Logo" className="logo-image" />
          </picture>
        </NavLink>
        <ul className="nav-list">
          {navLinks.map(({ path, label, hideOnMobile }) => {
            if (isMobile && hideOnMobile) return null;
            return (
              <li key={path}>
                <NavLink
                  to={path}
                  end={path === "/"}
                  className={({ isActive }) =>
                    `nav-link${isActive ? " active" : ""}`
                  }
                >
                  {label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
