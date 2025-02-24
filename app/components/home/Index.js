"use client";

// import Image from "next/image";
import Link from "next/link";


export default function Home() {
  


  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section
        className="relative w-full h-screen flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/hospital-hero.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 p-10 rounded-xl">
          <h1 className="text-white text-5xl font-bold">
            Welcome to Life Blossom Hospital
          </h1>
          <p className="text-white mt-4 text-lg">
            Providing quality healthcare with compassion and excellence.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 text-center bg-white">
        <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          At Life Blossom Hospital, we are committed to offering world-class
          medical services with a patient-centered approach.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-200 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "General Medicine",
            "Surgery",
            "Maternity",
            "Pediatrics",
            "Emergency Care",
            "Diagnostics",
          ].map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-blue-700">{service}</h3>
              <p className="text-gray-600 mt-2">
                Comprehensive {service.toLowerCase()} services to ensure your
                well-being.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 text-center bg-white">
        <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
        <p className="text-gray-600 mt-2">
          Reach out to us for inquiries or to book an appointment.
        </p>
        <form className="mt-6 max-w-md mx-auto bg-gray-100 p-6 rounded-xl shadow-md">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-md mb-3 border"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-md mb-3 border"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 rounded-md mb-3 border"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-800 text-white">
        <p>
          &copy; {new Date().getFullYear()} Life Blossom Hospital. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
