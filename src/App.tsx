import { FC } from "react";
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
import About from "./pages/Home";
import Blog from "./pages/Blog";
import Post from "./pages/Post";

const App: FC = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            {/* <Route path="/projects" element={<Projects />} /> */}
            {/* <Route path="/resume" element={<Resume />} /> */}
            <Route path="/blog" element={<Blog />} />
            {/* <Route path="/blog/:slug" element={<Post />} /> */}
            <Route path="/home" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;