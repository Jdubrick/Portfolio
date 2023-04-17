import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Tools from "@/components/Tools";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="h-screen bg-gray-900 text-white overflow-y-scroll z-0 scroll-smooth sm:snap-mandatory sm:snap-y">
      <Head>
        <title> Jordan Dubrick </title>
      </Head>
      <Navbar />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      {/* About */}
      <section id="about" className="snap-start">
        <About />
      </section>
      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      {/* Tools/Languages/Technologies */}
      <section id="skills" className="snap-start">
        <Tools />
      </section>
      {/* Contact Me */}
      <section id="contact" className="snap-center">
        <Contact />
      </section>
      <Footer />
    </main>
  );
}
