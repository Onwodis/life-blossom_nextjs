"use client";

import { useEffect, useState } from "react";
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
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles.module.css";
import Services from "./Services"
import Hero from "./Hero"

export default function LifeBlossomLanding() {
  return (
    <>
      <div className="kgb">
        <img
          src="/images/welcomeb.jpg"
          alt="Hospital Facility"
          className={`${styles.heroImage} d-none d-lg-block animated zoomIn mb-4`}
        />
        <img
          src="/images/nuseee.avif"
          alt="Hospital Facility"
          className={`${styles.heroImage} d-lg-none d-block animated zoomIn mb-4`}
        />

        <div className="mt-4 bg-dark h-100 mb-2 px-lg-5">
          <div className="row jbtw   align-items-center">
            <div className="order-lg-2 py-2 col-lg-8 mb-0 mb-lg-0 text-center text-lg-start">
              <h4
                className="text-white mb-4 animated slideInDown"
                data-aos="fade-down"
              >
                🌿 Life Blossom Care & Cure Hospital – Your Health, Our
                Priority! 🌿
              </h4>
              <ul>
                  <li className="py-2 text-light text-start">
                  At Life Blossom Care & Cure Hospital, we believe health is
                                  wealth, and your well-being is our top priority.
                  </li>
                  <li className="py-2 text-light text-start">
                  With
                world-class medical care, cutting-edge technology, and a team of
                expert doctors and compassionate caregivers, we are committed to
                helping you live a healthier, happier life.
                  </li>
              </ul>
              <p
                className="fs-4 text-white px-2  text-start animated slideInDown"
                data-aos="fade-up"
              >
                 
              </p>

              <div className="text-center">
                {/* <button
                  onClick={() => setFmodalShow(true)}
                  className="btn btn-light py-sm-3 px-sm-5 rounded-pill text-center mx-auto animated slideInLeft"
                >
                  Generate Qr-code
                </button> */}
                {/* <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
                <FirstModal
                  show={fmodalShow}
                  onHide={() => setFmodalShow(false)}
                /> */}
              </div>
            </div>
            <div
              className="order-lg-1 col-lg-4 py-4 d-flex justify-content-center text-lg-start"
              data-aos="zoom-in"
            >
              <img
                src="/images/welcomec.jpg"
                width="300"
                height="35"
                className="d-inline-block rounded-circle me-2 "
                alt="Life Blossom Logo"
              />
            </div>
          </div>
        </div>

        
      </div>

      <Hero />
      <Services />

      <Container className="my-5" id="services">
        <h2 className="text-center mb-4">Our Medical Services</h2>
        <Row className="g-4">
          {[
            "General Medicine",
            "Surgery",
            "Maternity Care",
            "Pediatrics",
            "Cardiology",
            "Diagnostics",
          ].map((service, index) => (
            <Col md={4} key={index}>
              <Card className="shadow-sm h-100 py-3  onhover">
                <Card.Body>
                  <Card.Title>{service}</Card.Title>
                  <Card.Text>
                    We offer professional {service.toLowerCase()} services with
                    the latest technology.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Health Advice Section */}
      <Container className="my-5" id="health-advice">
        {/* <h2 className="text-center mb-4">Health Advice</h2> */}
        <Row className="my-5" id="align-items-center">
          <Col md={3} className="d-none d-lg-block">
            <Image
              src="/images/nuseee.avif"
              width={300}
              height={300}
              alt="Doctor Advice"
              className="img-fluid rounded"
            />
          </Col>
          <Col md={9} className="d-flexh py-4 align-items-center bg-dark">
            <h2 className="fs-5 text-center text-light">
              6 Essential Health Tips for a Better Life 🌿💙
            </h2>
            <ol className="text-light">
              <li className="py-2 mb-1 text-light">
                <strong>Stay Hydrated 💧</strong> – Drink at least 8 glasses of
                water daily to keep your body functioning at its best.
              </li>
              <li className="py-2 mb-1 text-light">
                <strong>Eat a Balanced Diet 🥗</strong> – Fill your plate with
                fruits, vegetables, lean proteins, and whole grains for optimal
                health.
              </li>
              <li className="py-2 mb-1 text-light">
                <strong>Get Enough Sleep 😴</strong> – Aim for 7-9 hours of
                quality sleep each night to boost immunity and brain function.
              </li>
              <li className="py-2 mb-1 text-light">
                <strong>Stay Active 🏃‍♂️</strong> – Exercise regularly, even if
                it’s just a daily walk, to keep your heart and muscles strong.
              </li>
              <li className="py-2 mb-1 text-light">
                <strong>Manage Stress 🧘‍♀️</strong> – Practice mindfulness, deep
                breathing, or hobbies to maintain mental well-being.
              </li>
              <li className="py-2 mb-1 text-light">
                <strong>Schedule Regular Check-Ups 🏥</strong> – Prevention is
                key! Regular medical check-ups help detect and prevent health
                issues early.
              </li>
            </ol>
          </Col>
        </Row>
      </Container>
    </>
  );
}
