"use client"

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from "next/link";
import Marquee from "./Marquee"
import { useState,useEffect } from "react";
import { useAppContext } from "./myContext";


function NavScrollExample() {
   const [expanded, setExpanded] = useState(false);
  const { data, setData } = useAppContext();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="stickyy bg-dark">
      <Navbar
        expand="lg"
        bg="dark"
        variant="dark"
        expanded={expanded}
      >
        
        <Container  className=" bg-dark" >
          {/* Brand Logo */}
          <Link href="/" passHref legacyBehavior>
            <a className="navbar-brand d-flex align-items-center">
              <img
                src="/images/logo.png"
                width="50"
                height="35"
                className="d-inline-block rounded-circle me-2"
                alt="Life Blossom Logo"
              />
              <h2 className="d-inline text-light mb-0">
                Life Blossom{" "}
                <span className="d-none d-lg-inline"> Care & Cure Hospital</span>
              </h2>
            </a>
          </Link>
          <Nav className="d-none d-lg-block">
            <Marquee />
          </Nav>

          {/* Navbar Toggler */}
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(expanded ? false : true)}
          />

          <Navbar.Collapse id="basic-navbar-nav bg-dark text-light">
            <Nav className="ms-auto">
              <Link href="/" passHref legacyBehavior  >
                <Nav.Link onClick={() => setExpanded(false)} className={`${data.home?`text-danger`:`text-light`} `}>Home</Nav.Link>
              </Link>
              <Link href="/about" passHref legacyBehavior >
                <Nav.Link onClick={() => setExpanded(false)} className={`${data.about?`text-danger`:`text-light`} `}>About</Nav.Link>
              </Link>
              {/* <Link href="/services" passHref legacyBehavior >
                <Nav.Link onClick={() => setExpanded(false)} className={`${data.contact?`text-danger`:`text-light`} `}>Services</Nav.Link>
              </Link> */}
              <Link href="/contact" passHref legacyBehavior >
                <Nav.Link onClick={() => setExpanded(false)} className={`${data.contact?`text-danger`:`text-light`} `}>Contact</Nav.Link>
              </Link>
              <Link href="/records" passHref legacyBehavior >
                <Nav.Link onClick={() => setExpanded(false)} className={`${data.records?`text-danger`:`text-light`} `}>Records</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavScrollExample;