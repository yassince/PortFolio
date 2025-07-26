'use client'
import Header from "@/sections/Header";
import AboutMe from "@/sections/AboutMe";
import ContactMe from "@/sections/ContactMe";
import Experience from "@/sections/Experience";
import Hero from "@/sections/Hero";
import Proyects from "@/sections/Proyects";
import Studies from "@/sections/Studies";

export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <AboutMe/>
      <Experience/>
      <Studies/>
      <Proyects/>
      <ContactMe/>
    </>
  )
}
