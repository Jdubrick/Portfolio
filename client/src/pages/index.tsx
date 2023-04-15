import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Tools from "@/components/Tools";
import Contact from "@/components/Contact";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="h-screen bg-gray-900 text-white overflow-y-scroll z-0 scroll-smooth">
      <Head>
        <title> Jordan Dubrick </title>
      </Head>
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      {/* About */}
      <section id="about">
        <About />
      </section>
      {/* Projects */}
      <section id="projects">
        <Projects />
      </section>
      {/* Tools/Languages/Technologies */}
      <section id="tools">
        <Tools />
      </section>
      {/* Contact Me */}
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
