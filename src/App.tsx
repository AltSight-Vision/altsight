import { FC } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./styles/app-style.css";
import Navbar from "./components/Navbar";
import About from "./pages/Home";


const App: FC = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;