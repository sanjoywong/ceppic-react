import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import "./App.css";
//import App from './App';
import About from "./pages/About";
import Contact from "./pages/ContactForm";
import Home from "./pages/Home";
import Layout from './pages/Layout';
import NotFound1 from "./pages/NotFound1";
import ListeMessage from "./pages/ListeMessage0";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Header from './components/Header';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
     <Header title="React JS"
        texte="librairie javascript fonde par Facebook"/>
     <Routes>
        
        <Route index element={<Home />}/>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="listeContacts" element={<ListeMessage />}/>
        <Route path="*" element={<NotFound1/>}/>
        
      </Routes>
      
    </BrowserRouter>
  </React.StrictMode>
);


