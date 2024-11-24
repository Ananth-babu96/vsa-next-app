"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./Navbar.scss";
import logo from "../../../../public/logo/vsa-logo.png";

const Navbar = ({ aboutRef, galleryRef, servicesRef, contactRef }) => {
   const [menuOpen, setMenuOpen] = useState(false);
   const scrollTo = (reference) => {
      if (typeof window !== "undefined") {
         reference.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
         });
         setMenuOpen(false);
      }
   };
   const scrollToHome = () => {
      if (typeof window !== "undefined") {
         window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
   };
   return (
      <nav className="container navbar">
         <div className="navbar_logo" onClick={scrollToHome}>
            <Image src={logo} alt="vsa creations logo" />
         </div>

         <ul className="navbar_desktop-menu">
            <li onClick={() => scrollTo(aboutRef)}>about</li>
            <li onClick={() => scrollTo(galleryRef)}>gallery</li>
            <li onClick={() => scrollTo(servicesRef)}>services</li>
            <li onClick={() => scrollTo(contactRef)}>contact</li>
         </ul>
         <div
            className={`mobile-menu-btn ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
         >
            <div></div>
            <div></div>
            <div></div>
         </div>
         <ul className={`navbar_mobile-menu ${menuOpen ? "show" : ""}`}>
            <li onClick={() => scrollTo(aboutRef)}>about</li>
            <li onClick={() => scrollTo(galleryRef)}>gallery</li>
            <li onClick={() => scrollTo(servicesRef)}>services</li>
            <li onClick={() => scrollTo(contactRef)}>contact</li>
         </ul>
      </nav>
   );
};

export default Navbar;
