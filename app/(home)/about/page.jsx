"use client";
import React, { useEffect } from "react";
import { useAppContext } from "../../components/home/myContext";
import styles from "./AboutUs.module.css";
import Image from "next/image";
import About from "../../components/home/About";
import Link from "next/link";

const page = () => {
  const { data, setData } = useAppContext();

  useEffect(() => {
    setData(() => ({
      home: false,
      services: false,
      contact: false,
      about: true,
    }));
  }, []);
  return (
<div> 

      <About />

    <section className={styles.aboutSection}>
      <div className={styles.container}>
        {/* Left Side - Image */}
        <div className={styles.imageContainer}>
          <Image
            src="/images/fulllogo.png"
            alt="Hospital Building"
            width={500}
            height={400}
            className={styles.image}
          />
        </div>

        {/* Right Side - Content */}
        <div className={styles.content}>
          <h2 className={styles.title}>
          Life Blossom Care & Cure Hospital
          </h2>
          <p className={styles.description}>
            At Life Blossom Care & Cure Hospital, we are dedicated to providing
            world-class healthcare services with a focus on **compassion,
            innovation, and excellence**. Our team of expert doctors, nurses,
            and healthcare professionals work tirelessly to ensure the
            well-being of every patient.
            </p>
          
          
          <div className={styles.highlights}>
            <div className={styles.highlight}>
              <Image
                src="/images/logo.png"
                alt="Our Doctors"
                width={80}
                height={80}
                className={styles.icon}
              />
              <p>Experienced & Certified Doctors</p>
            </div>
            <div className={styles.highlight}>
              <Image
                src="/images/logo.png"
                alt="Patient Care"
                width={80}
                height={80}
                className={styles.icon}
              />
              <p>24/7 Emergency & Intensive Care</p>
            </div>
          </div>
          <div className="text-center col-12">
          <Link href="/contact" className="mx-auto col-12 text-center">
            <button  className={`${styles.btn} mx-auto`}>more info </button>

              
          </Link>
          </div>

        </div>
      </div>

    </section>
</div>

  );
};

export default page;
