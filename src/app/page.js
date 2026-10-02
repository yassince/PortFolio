'use client'
import AboutMe from "@/sections/AboutMe";
import ContactMe from "@/sections/ContactMe";
import Experience from "@/sections/Experience";
import Hero from "@/sections/Hero";
import Proyects from "@/sections/Proyects";
import Studies from "@/sections/Studies";
import Footer from "@/sections/Footer";
import Skills from "@/sections/Skills";
import Header from "@/sections/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Hero/>
      <AboutMe/>
      <Skills/>
      <Experience/>
      <Studies/>
      <Proyects/>
      <div id="contacMe" className="page-end contact-bg relative overflow-hidden">
        <div className="contact-grid pointer-events-none absolute inset-0" />
        <div className="contact-orb left-[12%] top-[16%] h-52 w-52 bg-accent/20" />
        <div className="contact-orb bottom-[8%] right-[10%] h-64 w-64 bg-accent-2/20" style={{ animationDelay: "-6s" }} />
        <ContactMe/>
        <Footer/>
      </div>
    </>
  )
}
