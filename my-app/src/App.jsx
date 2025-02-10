// import React from "react";
// import About from './components/About'
// import { Hero } from './components/Hero'
// import Navbar from './components/Navbar'
// import Projects from "./components/Projects";
// import Services from "./components/Services";
// import Contact from "./components/Contact";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <main>
//         <Hero />
//         <About />
//         <Projects />
//         <Services />
//         <Contact />
//       </main>
//     </>
//   )
// }

// export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import About from './components/About'
// import { Hero } from './components/Hero'
// import Navbar from './components/Navbar'
// import Projects from "./components/Projects";
// import Services from "./components/Services";
// import Contact from "./components/Contact";


// function App() {
//   return (
//     <Router>
//       <Navbar/>  {/* Ensure Navbar is rendered */}
//       <main>
//         <Routes>
//           <Route path="/" element={<Hero />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </main>
//     </Router>
//   );
// }

// export default App;



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
