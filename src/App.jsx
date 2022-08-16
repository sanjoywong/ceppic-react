import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
// import RandomUser from "./components/RandomUsers";
// import Users from "./components/Users";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import NotFound1 from "./pages/NotFound1";

function App() {
  return (
    <div className="App">
      <Nav />
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound1/>}/>
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