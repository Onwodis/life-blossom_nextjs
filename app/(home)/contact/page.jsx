"use client";

import  {useEffect} from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useAppContext } from "../../components/home/myContext";

import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import styles from "./contact.module.css"; // Custom CSS module

const ContactUs = () => {
  const { data, setData } = useAppContext();

  useEffect(() => {
    setData(() => ({
      home: false,
      services: false,
      contact: true,
      about: false,
      records: false,
    }))
  }, [])
  return (
    <div className={styles.container}>
      {/* Header Section */}
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Contact Life Blossom Care & Cure Hospital</h1>
        <p>We’re here to assist you 24/7. Feel free to reach out to us.</p>
      </motion.div>

      {/* Contact Information Section */}
      <div className={styles.contactInfo}>
        {/* Phone */}
        <motion.div
          className={styles.infoCard}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <FaPhone className={styles.icon} />
          <h3>Call Us</h3>
          <p>+234 901 234 5678</p>
        </motion.div>

        {/* Email */}
        <motion.div
          className={styles.infoCard}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <FaEnvelope className={styles.icon} />
          <h3>Email</h3>
          <p>info@lifeblossomhospital.com</p>
        </motion.div>

        {/* Address */}
        <motion.div
          className={styles.infoCard}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <FaMapMarkerAlt className={styles.icon} />
          <h3>Visit Us</h3>
          <p>123 Wellness Street, Lagos, Nigeria</p>
        </motion.div>
      </div>

      {/* Contact Form */}
      <motion.div
        className={styles.formContainer}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Send Us a Message</h2>
        <form>
          <div className={styles.inputGroup}>
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className={styles.inputGroup}>
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className={styles.inputGroup}>
            <textarea placeholder="Your Message" rows="4" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </motion.div>

      {/* Google Maps (Optional) */}
      <motion.div
        className={styles.mapContainer}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>Find Us on the Map</h2>
        {/* <iframe
          className={styles.map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.012345678901!2d3.123456789!3d6.543210987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2sLife+Blossom+Care+%26+Cure+Hospital!5e0!3m2!1sen!2sng!4v1701234567890"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
        ></iframe> */}
        <iframe  className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.370892649261!2d3.2680304732136345!3d6.60074542226454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b911597b465d1%3A0xad804ee4ad7e5a7!2sLife%20Blossom%20Care%20and%20Cure%20Hospital!5e0!3m2!1sen!2sng!4v1740360395061!5m2!1sen!2sng" width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"></iframe>
      </motion.div>
    </div>
  );
};

export default ContactUs;
