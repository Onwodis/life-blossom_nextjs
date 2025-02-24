
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";
import { AppProvider } from "../components/home/myContext";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Life blossom",
  description: "We provide medical solutions",
  icons: {
    icon: "/images/logo.png", // Use the correct file extension
  },
};

export default function RootLayout({
  children,
}) {

  return (
    <html data-theme="winter" lang="en">
        <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
        <link rel="icon" type="image/png" href="/images/logo.png" sizes="48x48" />
        <link rel="icon" type="image/svg+xml" href="/images/logo.png" />
        

      <body
        className="w-100"
      >
        <AppProvider>
        <Navbar />


        {children}
        <Footer />
      </AppProvider>

      </body>
    </html>
  );
}
