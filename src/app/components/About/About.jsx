"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import amarnath from "../../../../public/assets/amarnath.jpg";
import "./About.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const About = () => {
   const textRef = useRef(null);
   const imgRef = useRef(null);
   if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
   }

   useGSAP(() => {
      gsap.to(textRef.current, {
         opacity: 1,
         translateY: 0,
         delay: 0.3,
         scrollTrigger: {
            trigger: textRef.current,
         },
      });
      gsap.to(imgRef.current, {
         opacity: 1,
         translateY: 0,
         delay: 0.6,
         scrollTrigger: {
            trigger: imgRef.current,
         },
      });
   });

   return (
      <div className="section about">
         <div className="section-title">
            <h2>About us</h2>
         </div>
         <div className="about_content">
            <div className="text" ref={textRef}>
               <p>
                  <span> VSA Creations</span> is your go-to place for all your
                  photography needs. Whether it's a wedding, pre-wedding,
                  maternity, baby shoot, candid shoot, or bridal shoot, we
                  handle it all. We promise to deliver the best work, with
                  albums ready in no time.
               </p>
            </div>
            <div className="image" ref={imgRef}>
               <Image src={amarnath} alt="phohtographer's image" />
               <div className="name">
                  <p>
                     <span>Amarnath</span> photographer
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default About;
