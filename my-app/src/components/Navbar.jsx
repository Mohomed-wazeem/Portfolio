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
      <Navbar.Brand
  onClick={() => scrollToSection("home")}
  className="fw-bold fs-5 text-white cursor-pointer"
>
  Portfolio
</Navbar.Brand>


        <Button className="menu-icon d-lg-none" onClick={toggleMenu}>
          <FaBars size={24} color="white" />
        </Button>

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
