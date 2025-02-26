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
      {/* <Image
        src="/images/healtho.png"
        alt="Hospital Facility"
        className="col-12 d-md-block d-none"
        width={1120} // Set width
        height={500} //
      /> */}
      {/* <Image
        src="/images/drr.png"
        alt="Hospital Facility"
        className="col-12 d-block d-md-none"
        width={1120} // Set width
        height={500} //
      /> */}
      <footer className="bg-dark text-white py-4 mt-5">
      
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
