"use client";
import { useRef } from "react";

import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Gallery from "./components/Gallery/Gallery";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
export default function Home() {
   const aboutRef = useRef(null);
   const galleryRef = useRef(null);
   const servicesRef = useRef(null);
   const contactRef = useRef(null);
   return (
      <main>
         <section>
            <Navbar
               aboutRef={aboutRef}
               galleryRef={galleryRef}
               servicesRef={servicesRef}
               contactRef={contactRef}
            />
         </section>
         <section>
            <Hero />
         </section>

         <section className="style" ref={aboutRef}>
            <About />
         </section>
         <section className="style" ref={galleryRef}>
            <Gallery />
         </section>
         <section className="style" ref={servicesRef}>
            <Services />
         </section>
         <section className="style">
            <Testimonials />
         </section>
         <section className="style" ref={contactRef}>
            <Contact />
         </section>
         <section>
            <Footer />
         </section>
      </main>
   );
}
