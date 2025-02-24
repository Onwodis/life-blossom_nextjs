"use client";

import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope,faPhone ,faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  Row,
  Col,
  Carousel,
  Card,
  Navbar,
  Nav,
  Button,
} from "react-bootstrap";
import { useAppContext } from "../../components/home/myContext";


const Footer = () => {
  const healthTips = [
    "Drink plenty of water daily for optimal health.",
    "Regular exercise can help prevent chronic diseases.",
    "A balanced diet boosts immunity and overall well-being.",
    "Quality sleep is essential for mental and physical health.",
    "Regular medical checkups help in early disease detection.",
  ];

  const [currentTip, setCurrentTip] = useState(0);
  const { profile,data, setData } = useAppContext();

  return (
    <div>
      <Image
        src="/images/healtho.png"
        alt="Hospital Facility"
        className="col-12 d-md-block d-none"
        width={1120} // Set width
        height={500} //
      />
      <Image
        src="/images/drr.png"
        alt="Hospital Facility"
        className="col-12 d-block d-md-none"
        width={1120} // Set width
        height={500} //
      />
      <footer className="bg-dark text-white py-4 mt-5">
        <Container>
          <Row>
            <Col md={5}>
              <div className="d-flex align-items-center">
                <img
                  src="/images/estd.png"
                  width="100"
                  height="100"
                  className="d-lg-inline-block d-none rounded-circle me-2"
                  alt="Life Blossom Logo"
                />
                <div>
                  <h5>Life Blossom Hospital</h5>
                  <p><FontAwesomeIcon icon={faEnvelope} size="lg" /> Lifeblossomcarencurehospital@mail.com</p>
                  <p><FontAwesomeIcon icon={faPhone } size="lg" />+234 905 803 8476</p>
                </div>
              </div>
            </Col>
            <Col md={3} className="d-lg-inline-block d-none ">
              <h2>Quick Links</h2>
              <ul>
                <li>
                  <Link className="text-light ott" href="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="text-light ott " href="/contact">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link className="text-light ott" href="/records">
                    Records
                  </Link>
                </li>
              </ul>
            </Col>
            <Col md={4} className="text-end">
              <img
                  src="/images/lifeblossom.PNG"
                  width="200"
                  height="200"
                  className="d-lg-inline-block d-none  me-2"
                  alt="Life Blossom Logo"
                />
              <div className="text-start">
                <p><FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />Address :{profile.address}</p>

              </div>
            </Col>
          </Row>
        </Container>
        <Col md={12} className="text-center">
          <p className="mb-0 text-center">
            &copy; {new Date().getFullYear()} Life Blossom Hospital. All rights
            reserved.
          </p>
        </Col>
      </footer>
    </div>
  );
};

export default Footer;
