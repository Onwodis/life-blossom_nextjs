"use client";
import styles from "./service.module.css";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  { title: "Emergency Care", img: "/images/emergency.jpeg" },
  { title: "Cardiology", img: "/images/cardi.jpeg" },
  { title: "Neurology", img: "/images/neuro.webp" },
  { title: "Orthopaedics", img: "/images/orthopaedics.jpeg" },
];

const Services = () => {
  return (
    <section className={styles.services}>
      <h2>Our Specialized Services</h2>
      <div className={styles.serviceList}>
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={styles.serviceCard}
            whileHover={{ scale: 1.05 }}
          >
            <Image src={service.img} alt={service.title} width={300} height={200} />
            <h3>{service.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
