import React from "react";
import "./Hero.scss";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
const Hero = () => {
   return (
      <div className="container hero">
         <h1>Wedding Photography in Kumbakonam</h1>
         <p>From wedding to baby shoot. all at one place</p>
         <div className="contact-links">
            <a href="tel:+919551333311">
               <span>
                  <FaPhone />
               </span>{" "}
               955 133 3311
            </a>
            <a
               href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKjRGvLVqnRTdtClJhtPfbMVjMKQZLMTrSWjPnfrnshZJbndzKkZxWdPwjJQpLdgGcdrFtB"
               target="_blank"
            >
               <span>
                  <MdEmail />
               </span>{" "}
               Vsacreation123@gmail.com
            </a>
         </div>
      </div>
   );
};

export default Hero;
