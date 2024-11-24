"use client";
import React, { useRef, useState } from "react";
import { formAction } from "@/app/actions/action";
import Form from "next/form";
import emailjs from "@emailjs/browser";
import "./Contact.scss";
import DotsAnimation from "../DotsAnimation/DotsAnimation";
import { FaRegCheckCircle } from "react-icons/fa";

const Contact = () => {
   const [name, setName] = useState("");
   const [phone, setPhone] = useState("");
   const [email, setEmail] = useState("");
   const [message, setMessage] = useState("");
   const [isLoading, setIsLoading] = useState(false);
   const [success, setSuccess] = useState(false);
   const formRef = useRef();

   //form submission  --------------------------------
   const handleSubmit = (e) => {
      e.preventDefault();
      setIsLoading(true);
      emailjs
         .sendForm(
            process.env.NEXT_PUBLIC_SERVICE_ID,
            process.env.NEXT_PUBLIC_TEMPLATE_ID,
            formRef.current,
            {
               publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
            }
         )
         .then(
            () => {
               console.log("success");
               setIsLoading(false);
               setSuccess(true);
               setName("");
               setPhone("");
               setEmail("");
               setMessage("");
            },
            (error) => {
               console.log("failed:", error);
               setIsLoading(false);
            }
         );
   };

   return (
      <div className="section contact">
         <div className={`success-message ${success ? "show" : ""}`}>
            <div className="message-box">
               <div className="check-icon">
                  <FaRegCheckCircle />
               </div>
               <h4>Thanks for reaching out to VSA CREATIONS</h4>
               <p>We will get back to you as soon as possible!</p>
               <p>&quot;have a great one&quot;</p>

               <button onClick={() => setSuccess(false)}>close</button>
            </div>
         </div>
         <div className="section-title">
            <h2>Get in Touch</h2>
         </div>
         <div className="contact_content">
            <p>
               Let&apos;s capture your special moments! Fill out the form below
               to inquire about availability, packages, or any questions you may
               have. We can&apos;t wait to connect with you!
            </p>
            <form onSubmit={handleSubmit} ref={formRef}>
               <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
               />
               <input
                  type="number"
                  name="phone"
                  id="phone"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
               />
               <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Id (optional)"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
               />
               <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
               ></textarea>
               {/* <input type="submit" value={} /> */}
               <button type="submit">
                  {isLoading ? <DotsAnimation /> : "submit"}
               </button>
            </form>
         </div>
      </div>
   );
};

export default Contact;
