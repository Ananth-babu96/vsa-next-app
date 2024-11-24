import React from "react";
import "./Footer.scss";
import Image from "next/image";
import { FaPhone, FaWhatsapp } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import logo from "../../../../public/logo/vsa-logo.png";
const Footer = () => {
   const year = new Date().getFullYear();

   return (
      <div className="section footer">
         <div className="logo">
            <Image src={logo} alt="vsa creations logo" />
         </div>
         <p>Patteeswaram to Thiruvalanchuli main road,</p>
         <p>near KMC hospital,</p>
         <p>Kumbakonam</p>
         <div className="social">
            <a href="tel:+919551333311">
               <FaPhone />
            </a>
            <a
               href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKjRGvLVqnRTdtClJhtPfbMVjMKQZLMTrSWjPnfrnshZJbndzKkZxWdPwjJQpLdgGcdrFtB"
               target="_blank"
            >
               <MdEmail />
            </a>
            <a href="https://wa.me/919551333311" target="_blank">
               <FaWhatsapp />
            </a>
            <a
               href="https://www.instagram.com/vsa_creation_333?igsh=ejFwdno4bGZyNjZ4"
               target="_blank"
            >
               <AiFillInstagram />
            </a>
         </div>
         <p className="copyrights">
            <span>{year}</span>. All rights reserved by VSA creations.
         </p>
      </div>
   );
};

export default Footer;
