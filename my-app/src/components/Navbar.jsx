// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// // import React, {usestate} from "react";


// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <div className="container">
//         <img className='' src={"menuIcon.png"} alt="menu-buttonIcon"/>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <a className="nav-link active" aria-current="page" href="#">
//                 Home
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 About
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 Projects
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link ">
//                 Disabled
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;



// import React from 'react';
// import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap'; // Rename import
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// const CustomNavbar = () => { // Rename component
//   const scrollToSection = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <BootstrapNavbar expand="lg" className="bg-body-tertiary"> {/* Use renamed Navbar */}
//       <Container fluid>
//         <BootstrapNavbar.Brand onClick={() => scrollToSection("hero")} style={{ cursor: "pointer" }}>
//           My Website
//         </BootstrapNavbar.Brand>
//         <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
//         <BootstrapNavbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             <Nav.Link onClick={() => scrollToSection("hero")} className="nav-link">Home</Nav.Link>
//             <Nav.Link onClick={() => scrollToSection("about")} className="nav-link">About</Nav.Link>
//             <Nav.Link onClick={() => scrollToSection("projects")} className="nav-link">Projects</Nav.Link>
//             <Nav.Link onClick={() => scrollToSection("services")} className="nav-link">Services</Nav.Link>
//             <Nav.Link onClick={() => scrollToSection("contact")} className="nav-link">Contact</Nav.Link>
//           </Nav>
//         </BootstrapNavbar.Collapse>
//       </Container>
//     </BootstrapNavbar>
//   );
// };

// export default CustomNavbar; // Export renamed component


// import React from 'react';
// import { Container, Nav } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import '../index.css';


// const scrollToSection = (id) => {
//   const section = document.getElementById(id);
//   if (section) {
//     section.scrollIntoView({ behavior: "smooth" });
//   }
// };

// const SiteNavigation = () => {
//   return (
//     <section 
//       id="hero" 
//       className="hero-section d-flex flex-column justify-content-center align-items-center text-center"
//     >
//       {/* Brand Name */}
//       <h1 className="fw-bold display-4 text-white">Welcome to My Portfolio</h1>
//       <p className="text-white-50 fs-5">Showcasing my best work and services</p>

//       {/* Embedded Navigation */}
//       <Nav className="nav-links">
//         <Nav.Link onClick={() => scrollToSection("about")} className="nav-item">About</Nav.Link>
//         <Nav.Link onClick={() => scrollToSection("projects")} className="nav-item">Projects</Nav.Link>
//         <Nav.Link onClick={() => scrollToSection("services")} className="nav-item">Services</Nav.Link>
//         <Nav.Link onClick={() => scrollToSection("contact")} className="nav-item">Contact</Nav.Link>
//       </Nav>
//     </section>
//   );
// };

// export default SiteNavigation;



// import React, { useState } from 'react';
// import { Nav } from 'react-bootstrap';
// import { FaBars, FaTimes } from 'react-icons/fa'; 
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../index.css';

// const SiteNavigation = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen((prev) => !prev);
//   };

//   const closeMenu = () => {
//     setMenuOpen(false);
//   };

//   return (
//     <nav className={`navbar-container ${menuOpen ? "menu-open" : ""}`}>
//       {/* Left Side: Portfolio Branding */}
//       <div className="navbar-logo">Portfolio</div>

//       {/* Mobile Menu Button */}
//       <div className="menu-icon" onClick={toggleMenu}>
//         {menuOpen ? <FaTimes size={30} color="white" /> : <FaBars size={30} color="white" />}
//       </div>

//       {/* Navigation Links */}
//       <Nav className={`nav-links ${menuOpen ? "open" : ""}`}>
//         <Nav.Link onClick={closeMenu} className="nav-item">Home</Nav.Link>
//         <Nav.Link onClick={closeMenu} className="nav-item">About</Nav.Link>
//         <Nav.Link onClick={closeMenu} className="nav-item">Projects</Nav.Link>
//         <Nav.Link onClick={closeMenu} className="nav-item">Services</Nav.Link>
//         <Nav.Link onClick={closeMenu} className="nav-item">Contact</Nav.Link>
//       </Nav>
//     </nav>
//   );
// };

// export default SiteNavigation;




import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

const SiteNavigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar-container ${menuOpen ? "menu-open" : ""}`}>
      {/* Left Side: Portfolio Branding */}
      <div className="navbar-logo">Portfolio</div>

      {/* Mobile Menu Button */}
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={30} color="white" /> : <FaBars size={30} color="white" />}
      </div>

      {/* Navigation Links */}
      <Nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Nav.Link onClick={closeMenu} className="nav-item">Home</Nav.Link>
        <Nav.Link onClick={closeMenu} className="nav-item">About</Nav.Link>
        <Nav.Link onClick={closeMenu} className="nav-item">Projects</Nav.Link>
        <Nav.Link onClick={closeMenu} className="nav-item">Services</Nav.Link>
        <Nav.Link onClick={closeMenu} className="nav-item">Contact</Nav.Link>
      </Nav>
    </nav>
  );
};

export default SiteNavigation;
