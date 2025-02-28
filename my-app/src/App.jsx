import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CustomNavbar from './components/Navbar'; // Use renamed component
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import { Hero } from "./components/Hero";

function App() {
  return (
    <Router>
      <CustomNavbar />  {/* Use renamed component */}
      <main>
        <section id="hero"><Hero /> </section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="services"><Services /></section>
        <section id="contact"><Contact /></section>
      </main>
    </Router>
  );
}

export default App;
