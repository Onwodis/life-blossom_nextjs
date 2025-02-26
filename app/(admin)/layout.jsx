
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import Navbar from "../components/admin/Navbar";
import Footer from "../components/admin/Footer";
import { AppProvider } from "../components/home/myContext";

import Sidebar from "../components/admin/Sidebar";
import Header from "../components/admin/Header";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Life blossom (admin)",
  description: "We provide medical solutions",
  icons: {
    icon: "/images/logo.png"
  }
};

export default function RootLayout({
  children,
}) {
  

  return (
    <html data-theme="winter" lang="en">
        <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="/images/logo.png" sizes="48x48" />
        <link rel="icon" type="image/svg+xml" href="/images/logo.png" />
      </Head>
        
        

      <body
        className="w-100"
      >
        <AppProvider>
     < Navbar />

        <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="p-6 flex-1">{children}</main>
      </div>
    </div>
        <Footer />
      </AppProvider>

      </body>
    </html>
  );
}


