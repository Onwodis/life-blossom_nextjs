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
import { useAppContext } from "../home/myContext";
import { useRouter } from "next/navigation";
import Dropdown from 'react-bootstrap/Dropdown';


function NavScrollExample() {
  const router = useRouter()
   const [expanded, setExpanded] = useState(false);
  const { data,user,setUser ,setData } = useAppContext();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const sessionuser = sessionStorage.getItem("user")
    if(sessionuser){
      const nuser = JSON.parse(sessionuser)
      // alert(nuser.name)
      if(nuser.admin){setUser((prev)=>({...prev,...nuser}))}
      else{
        router.push("/")
      }
    }
    else{
      router.push("/")
    }
  }, []);
  const handleLogout = () => {
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("token");
    router.push("/records"); // Redirect to login after logout
  };

  return (
    <div className="stickyy bg-dark">
      <Navbar
        expand="lg"
        bg="dark"
        variant="dark"
        expanded={expanded}
      >
        
        <Container fluid  className="px-2 bg-dark" >
          {/* Brand Logo */}
          <Link href="/admindb" passHref legacyBehavior>
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

          {user && user.name ?
          <Navbar.Collapse id="basic-navbar-nav bg-dark text-light">
            <Nav className="ms-auto d-lg-none d-inline">
              <Link href="/admindb" passHref legacyBehavior  >
                <Nav.Link onClick={() => setExpanded(false)} className={`${data.db?`text-danger`:`text-light`} `}>Dashboard</Nav.Link>
              </Link>
              <Link href="/patients" passHref legacyBehavior  >
                <Nav.Link onClick={() => setExpanded(false)} className={`${data.patient?`text-danger`:`text-light`} `}>Patients</Nav.Link>
              </Link>
              <Link href="/nurses" passHref legacyBehavior  >
                <Nav.Link onClick={() => setExpanded(false)} className={`${data.nurses?`text-danger`:`text-light`} `}>Nurses</Nav.Link>
              </Link>
              <Link href="/doctors" passHref legacyBehavior  >
                <Nav.Link onClick={() => setExpanded(false)} className={`${data.doctors?`text-danger`:`text-light`} `}>Doctors</Nav.Link>
              </Link>
              <Link href="/payments" passHref legacyBehavior  >
                <Nav.Link onClick={() => setExpanded(false)} className={`${data.payments?`text-danger`:`text-light`} `}>Payments</Nav.Link>
              </Link>

              
              
              
              
            </Nav>
            <Nav className="ms-lg-auto  px-0">
              <Dropdown>
                <Dropdown.Toggle  id="dropdown-basic" className="bg-dark border-0 hover-border-light hover-text-success-500 hover-bg-light">
                  <span className="d-none d-lg-inline">Hi</span> <span className="text-light hover:text-success-500 hover-bg-light-500 px-0">{user.name}</span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={handleLogout} className='text-danger'>Logout</Dropdown.Item>
                  {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
            
            {/* <Nav className="me-autoj d-block  col-12 text-end border border-danger mx-lg-3 ">
            <Nav>
              <Link className="d-none d-lg-inline" href="/admindb" passHref legacyBehavior >
                <Nav.Link onClick={() => setExpanded(false)} className={`${data.about?`text-danger`:`text-light`} `}></Nav.Link>
              </Link>
            </Nav>
                      
                <button onClick={handleLogout} className="bg-red-500 text-white px-2 px-lg-4 py-2 rounded hover:bg-red-600">
                  Logout
                </button>
              </Nav> */}
          </Navbar.Collapse>:""}
        </Container>
      </Navbar>
    </div>
  );
}

export default NavScrollExample;