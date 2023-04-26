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
    <main className="h-screen bg-gray-900 text-white overflow-y-scroll z-0 scroll-smooth">
      <Head>
        <title> Jordan Dubrick </title>
      </Head>
      <Navbar />
      <section id="hero" className="snap-start pb-10">
        <Hero />
      </section>
      <section id="about" className="snap-start py-10">
        <About />
      </section>
      <section id="projects" className="snap-start py-10">
        <Projects />
      </section>
      <section id="skills" className="snap-start py-10">
        <Tools />
      </section>
      <section id="contact" className="snap-center py-10">
        <Contact />
      </section>
      <Footer />
    </main>
  );
}
