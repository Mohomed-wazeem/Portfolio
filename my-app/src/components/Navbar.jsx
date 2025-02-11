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
//     <>
//       <nav className={`navbar-container ${menuOpen ? "menu-open" : ""}`}>
//         <div className="navbar-logo">Portfolio</div>

//         <div className="menu-icon" onClick={toggleMenu}>
//           {menuOpen ? <FaTimes size={30} color="white" /> : <FaBars size={30} color="white" />}
//         </div>

//         <Nav className={`nav-links ${menuOpen ? "open" : ""}`}>
//           <Nav.Link onClick={closeMenu} href="#home" className="nav-item">Home</Nav.Link>
//           <Nav.Link onClick={closeMenu} href="#about" className="nav-item">About</Nav.Link>
//           <Nav.Link onClick={closeMenu} href="#projects" className="nav-item">Projects</Nav.Link>
//           <Nav.Link onClick={closeMenu} href="#services" className="nav-item">Services</Nav.Link>
//           <Nav.Link onClick={closeMenu} href="#contact" className="nav-item">Contact</Nav.Link>
//         </Nav>
//       </nav>

//       {/* Hero Section to integrate navbar smoothly */}
//       <section id="hero" className="hero-section">
//         <div className="hero-content">
//           <h1>Welcome to My Portfolio</h1>
//           <p>Creative Developer | UI/UX Enthusiast</p>
//         </div>
//       </section>
//     </>
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

//   // Toggle the menu state
//   const toggleMenu = () => {
//     setMenuOpen(prevState => !prevState);
//   };

//   // Close the menu
//   const closeMenu = () => {
//     setMenuOpen(false);
//   };

//   return (
//     <>
//       {/* Navbar Section */}
//       <nav className={`navbar-container ${menuOpen ? "menu-open" : ""}`}>
//         <div className="navbar-logo">Portfolio</div>

//         {/* Mobile Menu Button */}
//         <div className="menu-icon" onClick={toggleMenu}>
//           {menuOpen ? <FaTimes size={30} color="white" /> : <FaBars size={30} color="white" />}
//         </div>

//         {/* Navigation Links */}
//         <Nav className={`nav-links ${menuOpen ? "open" : ""}`}>
//           <Nav.Link as="a" href="#home" className="nav-item" onClick={closeMenu}>Home</Nav.Link>
//           <Nav.Link as="a" href="#about" className="nav-item" onClick={closeMenu}>About</Nav.Link>
//           <Nav.Link as="a" href="#projects" className="nav-item" onClick={closeMenu}>Projects</Nav.Link>
//           <Nav.Link as="a" href="#services" className="nav-item" onClick={closeMenu}>Services</Nav.Link>
//           <Nav.Link as="a" href="#contact" className="nav-item" onClick={closeMenu}>Contact</Nav.Link>
//         </Nav>

//         {/* Overlay to close menu when clicking outside */}
//         {menuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
//       </nav>

//       {/* Hero Section (outside of the navbar) */}
//       <section id="hero" className="hero-section">
//         <div className="hero-content">
//           <h1>Welcome to My Portfolio</h1>
//           <p>Creative Developer | UI/UX Enthusiast</p>
//         </div>
//       </section>
//     </>
//   );
// };

// export default SiteNavigation;







// import React, { useState } from "react";
// import { Navbar, Nav, Container, Button } from "react-bootstrap";
// import { FaBars } from "react-icons/fa";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "../index.css";

// const SiteNavigation = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const scrollToSection = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//       setMenuOpen(false); // Close menu after clicking a link
//     }
//   };

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <Navbar expand="lg" className="navbar-container">
//       <Container fluid>
//         <Navbar.Brand
//           onClick={() => scrollToSection("home")}
//           style={{ cursor: "pointer", color: "#fff", fontSize: "1.8rem", fontWeight: "600" }}
//         >
//           Portfolio
//         </Navbar.Brand>

//         {/* Toggler Icon - Visible only in Mobile */}
//         <Button className="menu-icon d-lg-none" onClick={toggleMenu}>
//           <FaBars size={24} color="#fff" />
//         </Button>

//         {/* Navigation Links */}
//         <Navbar.Collapse id="basic-navbar-nav" className={`mobile-menu ${menuOpen ? "show" : ""}`}>
//           <Nav className="mx-auto"> {/* Center the nav links */}
//             <Nav.Link onClick={() => scrollToSection("home")} className="nav-item">
//               Home
//             </Nav.Link>
//             <Nav.Link onClick={() => scrollToSection("about")} className="nav-item">
//               About
//             </Nav.Link>
//             <Nav.Link onClick={() => scrollToSection("projects")} className="nav-item">
//               Projects
//             </Nav.Link>
//             <Nav.Link onClick={() => scrollToSection("services")} className="nav-item">
//               Services
//             </Nav.Link>
//             <Nav.Link onClick={() => scrollToSection("contact")} className="nav-item">
//               Contact
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default SiteNavigation;



// import React, { useState } from "react";
// import { Navbar, Nav, Container, Button } from "react-bootstrap";
// import { FaBars, FaHome } from "react-icons/fa"; // Imported home icon
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "../index.css";

// const SiteNavigation = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const scrollToSection = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//       setMenuOpen(false); // Close menu after clicking a link
//     }
//   };

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <Navbar expand="lg" className="navbar-container">
//       <Container fluid>
//         {/* Navbar Brand - Home Icon with Left Margin */}
//         <Navbar.Brand onClick={() => scrollToSection("home")} className="navbar-icon">
//           <FaHome size={30} color="#fff" className="icon-left-margin" /> {/* Home icon with left margin */}
//         </Navbar.Brand>

//         {/* Menu Icon for Mobile */}
//         <Button className="menu-icon d-lg-none" onClick={toggleMenu}>
//           <FaBars size={24} color="#fff" />
//         </Button>

//         {/* Navigation Links */}
//         <Navbar.Collapse id="basic-navbar-nav" className={`mobile-menu ${menuOpen ? "show" : ""}`}>
//           <Nav className="mx-auto">
//             <Nav.Link onClick={() => scrollToSection("about")} className="nav-item">
//               About
//             </Nav.Link>
//             <Nav.Link onClick={() => scrollToSection("projects")} className="nav-item">
//               Projects
//             </Nav.Link>
//             <Nav.Link onClick={() => scrollToSection("services")} className="nav-item">
//               Services
//             </Nav.Link>
//             <Nav.Link onClick={() => scrollToSection("contact")} className="nav-item">
//               Contact
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default SiteNavigation;

import React, { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { FaBars, FaHome, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../index.css";

const SiteNavigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Close menu after clicking a link
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Navbar expand="lg" className="navbar-container">
      <Container fluid>
        {/* Navbar Brand - Home Icon */}
        <Navbar.Brand onClick={() => scrollToSection("home")} className="navbar-icon">
          <FaHome size={30} color="white" className="icon-left-margin" />
        </Navbar.Brand>

        {/* Menu Icon for Mobile */}
        <Button className="menu-icon d-lg-none" onClick={toggleMenu}>
          <FaBars size={24} color="white" />
        </Button>

        {/* Navigation Links */}
        <Navbar.Collapse id="basic-navbar-nav" className={`mobile-menu ${menuOpen ? "show" : ""}`}>
          <Nav className="mx-auto">
            <Nav.Link onClick={() => scrollToSection("about")} className="nav-item">
              About
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection("projects")} className="nav-item">
              Projects
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection("services")} className="nav-item">
              Services
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection("contact")} className="nav-item">
              Contact
            </Nav.Link>
          </Nav>

          {/* Social Icons in Mobile View */}
          <div className="nav-divider d-lg-none"></div>
          <div className="mobile-social-icons d-lg-none">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
          </div>
        </Navbar.Collapse>

        {/* Social Icons in Desktop View */}
        <div className="nav-social-icons d-none d-lg-flex">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
        </div>
      </Container>
    </Navbar>
  );
};

export default SiteNavigation;
