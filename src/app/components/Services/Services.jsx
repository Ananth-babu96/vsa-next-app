"use client";
import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import "./Services.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from "../../../../public/service-images/service-img-1.jpg";
import img2 from "../../../../public/service-images/service-img-2.jpg";
import img3 from "../../../../public/service-images/service-img-3.jpg";
import { MdCurrencyRupee } from "react-icons/md";

const Services = () => {
   const imgRef1 = useRef(null);
   const imgRef2 = useRef(null);
   const imgRef3 = useRef(null);
   const textRef1 = useRef(null);
   const textRef2 = useRef(null);
   const textRef3 = useRef(null);

   if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
   }

   useGSAP(() => {
      gsap.to(imgRef1.current, {
         translateX: 0,
         opacity: 1,
         delay: 0.8,

         scrollTrigger: {
            trigger: imgRef1.current,
         },
      });
      gsap.to(imgRef2.current, {
         translateX: 0,
         opacity: 1,
         delay: 0.3,

         scrollTrigger: {
            trigger: imgRef2.current,
         },
      });
      gsap.to(imgRef3.current, {
         translateX: 0,
         opacity: 1,
         delay: 0.3,

         scrollTrigger: {
            trigger: imgRef3.current,
         },
      });
      gsap.to(textRef1.current, {
         opacity: 1,
         delay: 0.3,
         scrollTrigger: {
            trigger: textRef1.current,
         },
      });
      gsap.to(textRef2.current, {
         opacity: 1,
         delay: 0.3,
         scrollTrigger: {
            trigger: textRef2.current,
         },
      });
      gsap.to(textRef3.current, {
         opacity: 1,
         delay: 0.3,
         scrollTrigger: {
            trigger: textRef3.current,
         },
      });
   });

   return (
      <div className="section services">
         <div className="section-title">
            <h2>What we Do For You</h2>
         </div>
         <div className="services_content">
            <div className="service">
               <div className="service_image" ref={imgRef1}>
                  <Image src={img1} alt="wedding shoot sample image" />
               </div>
               <div className="service_text" ref={textRef1}>
                  <h2>Wedding Shoot</h2>
                  <p>
                     We capture the magic of your big day , preserving every
                     kiss, smile and joyous tear in stunning detail.
                  </p>
                  <p className="price">
                     price starting at{" "}
                     <span>
                        {" "}
                        <span className="rupee-icon">
                           <MdCurrencyRupee />
                        </span>
                        29,999
                     </span>
                  </p>
               </div>
            </div>
            <div className="service">
               <div className="service_image" ref={imgRef2}>
                  <Image src={img2} alt="pre wedding shoot sample image" />
               </div>
               <div className="service_text" ref={textRef2}>
                  <h2>Pre Wedding Shoot</h2>
                  <p>
                     We celebrate your love story, capturing the romantic and
                     playful moments leading up to your big day in beautiful,
                     heartfelt detail
                  </p>
                  <p className="price">
                     price starting at{" "}
                     <span>
                        {" "}
                        <span className="rupee-icon">
                           <MdCurrencyRupee />
                        </span>
                        9,999
                     </span>
                  </p>
               </div>
            </div>
            <div className="service">
               <div className="service_image" ref={imgRef3}>
                  <Image src={img3} alt="baby shoot sample image" />
               </div>
               <div className="service_text" ref={textRef3}>
                  <h2>Maternity and Baby Shoot</h2>
                  <p>
                     Cherish the anticipation and joy of motherhood with
                     beautiful, natural photoshoots that highlight this special
                     time.
                  </p>
                  <p className="price">
                     price starting at{" "}
                     <span>
                        {" "}
                        <span className="rupee-icon">
                           <MdCurrencyRupee />
                        </span>
                        9,999
                     </span>
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Services;
