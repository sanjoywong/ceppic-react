import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
// import RandomUser from "./components/RandomUsers";
// import Users from "./components/Users";
import { Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/about">Abfout</Link>
        
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>

      <Header
        title="React JS"
        texte="librairie javascript fonde par Facebook"
      />


      <Footer />
    </div>
  );
}

export default App;