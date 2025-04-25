import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import "../styles/navbar-style.css";

interface NavbarProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const Navbar: FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const location = useLocation();

  const navLinks = [
    { path: "/projects", label: "Projects" },
    { path: "/resume", label: "Resume" },
    { path: "/blog", label: "Blog" },
    { path: "/about", label: "About" },
  ];

  return (
    <nav className="navbar">
      <ul className="list">
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

      <div className="toolbar">
        <button onClick={toggleTheme} className="theme-button">
          {theme === "light" ? (
            <MdDarkMode size={24} />
          ) : (
            <MdLightMode size={24} />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
