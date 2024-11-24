"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Image from "next/image";

import "./Gallery.scss";
import { FaTimes } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { TiZoomIn } from "react-icons/ti";

//images --------------------------------------------
import img1 from "../../../../public/gallery-images/img1.jpg";
import img2 from "../../../../public/gallery-images/img2.jpg";
import img3 from "../../../../public/gallery-images/img3.jpg";
import img4 from "../../../../public/gallery-images/img4.jpg";
import img5 from "../../../../public/gallery-images/img5.jpg";
import img6 from "../../../../public/gallery-images/img6.jpg";
import img7 from "../../../../public/gallery-images/img7.jpg";
import img8 from "../../../../public/gallery-images/img8.jpg";
import img9 from "../../../../public/gallery-images/img9.jpg";
import img10 from "../../../../public/gallery-images/img10.jpg";
import img11 from "../../../../public/gallery-images/img11.jpg";
import img12 from "../../../../public/gallery-images/img12.jpg";
import img13 from "../../../../public/gallery-images/img13.jpg";
import img14 from "../../../../public/gallery-images/img14.jpg";
import img15 from "../../../../public/gallery-images/img15.jpg";
import img16 from "../../../../public/gallery-images/img16.jpg";
import img17 from "../../../../public/gallery-images/img17.jpg";
import img18 from "../../../../public/gallery-images/img18.jpg";
import img19 from "../../../../public/gallery-images/img19.jpg";
import img20 from "../../../../public/gallery-images/img20.jpg";
import img21 from "../../../../public/gallery-images/img21.jpg";
const Gallery = () => {
   const [imageOpen, setImageOpen] = useState(false);
   const [imageIndex, setImageIndex] = useState(0);
   const [images, setImages] = useState([
      { src: img2, intersecting: false },
      { src: img3, intersecting: false },
      { src: img4, intersecting: false },
      { src: img5, intersecting: false },
      { src: img7, intersecting: false },
      { src: img8, intersecting: false },
      { src: img9, intersecting: false },
      { src: img10, intersecting: false },
      { src: img11, intersecting: false },
      { src: img12, intersecting: false },
      { src: img13, intersecting: false },
      { src: img14, intersecting: false },
      { src: img15, intersecting: false },
      { src: img16, intersecting: false },
      { src: img17, intersecting: false },
      { src: img18, intersecting: false },
      { src: img19, intersecting: false },
      { src: img20, intersecting: false },
      { src: img21, intersecting: false },
      { src: img1, intersecting: false },
   ]);
   useEffect(() => {
      const items = document.querySelectorAll(".grid-item");
      const observer = new IntersectionObserver((entries) => {
         entries.forEach((entry) => {
            if (entry.isIntersecting) {
               const index = Array.from(items).indexOf(entry.target);
               setImages((prevImages) =>
                  prevImages.map((img, i) =>
                     i === index ? { ...img, intersecting: true } : img
                  )
               );
            }
         });
      });

      // Observe all items
      items.forEach((item) => observer.observe(item));

      // Cleanup observer on unmount
      return () => {
         observer.disconnect();
      };
   }, []);

   const openImage = (index) => {
      setImageIndex(index);
      setImageOpen(true);
   };
   return (
      <div className="section gallery">
         <div className={`overlay ${imageOpen ? "open" : ""}`}>
            <button
               className="btn close-btn"
               onClick={() => setImageOpen(false)}
            >
               <FaTimes />
            </button>
            <button
               className="btn backward-btn"
               onClick={() =>
                  setImageIndex((prev) =>
                     prev === 0 ? images.length - 1 : prev - 1
                  )
               }
            >
               <IoIosArrowBack />
            </button>
            <button
               className="btn forward-btn"
               onClick={() =>
                  setImageIndex((prev) => (prev + 1) % images.length)
               }
            >
               <IoIosArrowForward />
            </button>
            <Image src={images[imageIndex].src} alt="gallery image" />
         </div>
         <div className="section-title">
            <h2>Our Latest Works</h2>
         </div>
         <div className="gallery_view">
            {images.map((img, index) => {
               return (
                  <div
                     key={index}
                     className={`grid-item ${
                        img.intersecting ? "intersecting" : ""
                     }`}
                     onClick={() => openImage(index)}
                  >
                     <div className="image-overlay">
                        <TiZoomIn />
                     </div>
                     <Image src={img.src} alt={`img ${index}`} />
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export default Gallery;
