'use client'
import Header from "@/components/Header";
import AboutMe from "@/sections/AboutMe";
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
    </>
  )
}
