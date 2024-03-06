"use client"
import React, { useEffect, useRef } from 'react'
import NavBar from '../Hero/NavBar'
import Lenis from "@studio-freight/lenis";
import Hero from '../Hero/Hero'
import AboutPage from '../About/AboutPage';
import MenuKami from '../MenuKami/MenuKami';
import Contactus from '../Contactus/Contactus';
import Footer from '../Contactus/Footer';
import Image from 'next/image';
import Theme from './Theme';


const Landing = () => {
  const bodyref = useRef<HTMLDivElement>(null)
  useEffect(() => {

    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className='ook  overflow-x-hidden' >
      <Theme/>
      <NavBar />
      <div ref={bodyref}>
        <Hero bodyRef={bodyref} />
        <AboutPage />
      </div>
      <MenuKami />
      <Contactus />
      <Footer />
    </div>
  )
}

export default Landing