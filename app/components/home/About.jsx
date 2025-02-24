"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./aboutb.module.css"; // Custom CSS Module
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope,faPhone ,faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FaEye, FaBullseye, FaFlagCheckered } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className={styles.container}>
      {/* Header Section */}
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Life Blossom Care & Cure Hospital</h2>
        <p>Your health, our priority – where care meets cure.</p>
      </motion.div>

      {/* Image and Introduction */}
      <div className={`${styles.intro} row`}>
        <motion.div
          className={`${styles.imageContainer} col-lg-4 col-12`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          
          <Image
            src="/images/welcomeb.jpg"
            alt="Medical Team"
            width={600}
            height={400}
            className={styles.image}
          />
        </motion.div>
        <motion.div
          className={styles.text}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>Who We Are</h2>
          <p>
            At <strong>Life Blossom Care & Cure Hospital</strong>, we are committed to
            providing world-class healthcare services with compassion, innovation,
            and excellence. Our highly skilled medical team leverages cutting-edge
            technology to ensure the best possible patient outcomes.
          </p>
          <ol>
            <li>We hope to expand healthcare access to underserved communities.</li>
            <li>To maintain excellence in medical research and education.</li>
            
          </ol>
        </motion.div>
      </div>

      {/* Vision, Mission, Goals Section */}
      <div className={styles.sections}>
        {/* Vision */}
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* <Image src="/images/vision.jpg" alt="Vision" width={100} height={100} /> */}
          <FaEye   className="text-center text-danger mx-auto" size={70} />
          <h3>Our Vision</h3>
          <p>
            To be a leading healthcare provider, setting the gold standard in medical
            excellence, patient care, and innovation.
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* <Image src="/images/mission.jpg" alt="Mission" width={100} height={100} /> */}
          <FaBullseye className="text-center text-danger mx-auto" size={70} />

          <h3>Our Mission</h3>
          <p>
            To deliver exceptional and compassionate healthcare services, ensuring
            the well-being and recovery of our patients through advanced medical
            practices and a dedicated team.
          </p>
        </motion.div>

        {/* Goals */}
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
        
           
          <div className="text-center col-12">
            <FaFlagCheckered   className="text-center text-danger mx-auto" size={70} />

          </div>
          
          <h3>Our Goals</h3>
          <ul>
            <li>Enhance patient care through continuous innovation.</li>
            <li>Ensure affordability without compromising quality.</li>
            <li>Promote a patient-first approach in all services.</li>
            
          </ul>
        </motion.div>
      </div>

      {/* Closing Statement */}
      <motion.div
        className={styles.closing}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Why Choose Life Blossom?</h2>
        <p>
          Our patients are at the heart of everything we do. With cutting-edge
          medical facilities, compassionate professionals, and a commitment to
          innovation, we ensure that you receive the best possible care.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutUs;
