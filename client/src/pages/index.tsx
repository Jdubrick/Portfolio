import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Navbar from "@/components/navbar/Navbar";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="h-screen bg-gray-900 text-white">
      <Head>
        <title> Jordan Dubrick </title>
      </Head>
      {/* Navbar */}
      <Navbar />
      {/* Hero */}
      {/* Projects */}
      {/* Tools/Languages/Technologies */}
      {/* Contact Me */}
    </main>
  );
}
