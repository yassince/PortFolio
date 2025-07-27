'use client'
import Header from "@/sections/Header";
import AboutMe from "@/sections/AboutMe";
import ContactMe from "@/sections/ContactMe";
import Experience from "@/sections/Experience";
import Hero from "@/sections/Hero";
import Proyects from "@/sections/Proyects";
import Studies from "@/sections/Studies";
import Footer from "@/sections/Footer";
import Skills from "../sections/Skills";

export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <AboutMe/>
      <Skills/>
      <Experience/>
      <Studies/>
      <Proyects/>
      <ContactMe/>
      <Footer/>
    </>
  )
}
