import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Navbar";
import Footer from "./Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Resources from "./pages/Resources";

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar />
            <div className="App-content">
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/resources" element={<Resources />} />
                  <Route path="*" element={<Home />} />
              </Routes>
            </div>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
