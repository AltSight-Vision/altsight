  import { useState, useEffect, FC } from "react";
  import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
  } from "react-router-dom";
  import "./styles/app-style.css";
  import Navbar from "./components/Navbar";
  import Projects from "./pages/Project";
  import Resume from "./pages/Resume";
  import About from "./pages/About";
  import Blog from "./pages/Blog";
  import Post from "./pages/Post"

  const App: FC = () => {
    const [theme, setTheme] = useState<"light" | "dark">(() => {
      const savedTheme = localStorage.getItem("theme");
      return savedTheme === "dark" ? "dark" : "light";
    });

    useEffect(() => {
      document.body.className = theme;
      localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
      setTheme((prevTheme) => {
        const newTheme = prevTheme === "light" ? "dark" : "light";
        localStorage.setItem("theme", newTheme);
        return newTheme;
      });
    };

    return (
      <Router>
        <div className={`App ${theme}`}>
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <main className="content">
            <Routes>
              <Route path="/" element={<Navigate to="/projects" />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/blog" element={<Blog />} />
              {/* <Route path="/blog" element={<Blog />} /> */}
              <Route path="/blog/:slug" element={<Post />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </div>
      </Router>
    );
  };

  export default App;
