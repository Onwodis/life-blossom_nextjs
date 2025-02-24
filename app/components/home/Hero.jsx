import Image from "next/image";
import Link from "next/link";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>Your Health, Our Priority</h1>
        <p>
          At Life Blossom Care & Cure Hospital, we don’t just treat illnesses—we nurture wellness! 🌿💙 Trust us to provide world-class care that lets you live your healthiest, happiest life. Because your health isn’t just a priority—it’s our passion!
        </p>
        
      </div>
      <div className={styles.imageContainer}>
        <div>
        <Image
          src="/images/welc.png"
          width={600}
          height={400}
          alt="Hospital Facility"
          className={styles.image}
        />
        <div className="text-center col-12 mt-2">
          <Link href="/contact" className={`${styles.cta} ott  btn btn-danger`}>Book an Appointment</Link>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
