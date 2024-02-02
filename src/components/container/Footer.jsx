import React from "react";
import {
 BsFacebook,
 BsInstagram,
 BsTwitter,
 BsPinterest,
} from "react-icons/bs";
import { motion } from "framer-motion";

const Footer = () => {
 return (
   <motion.div
     initial={{ height: 0 }}
     whileInView={{ height: "auto" }}
     transition={{ duration: 1 }}
     className="bg-Teal p-10"
   >
     <div className="grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 place-items-start gap-8 text-white">
       <div>
         <div className="font-bold mb-6">Embark on Your Learning Journey</div>
         <p className="text-sm leading-7">
           Explore our diverse courses, connect with inspiring educators, and
           discover the limitless possibilities of education.
         </p>
         <button className="bg-white text-Teal px-4 py-2 rounded-md hover:bg-gray-100">
           Browse Courses Now
         </button>
       </div>
       <div>
         <div className="font-bold mb-6">Explore Our Services</div>
         <div className="flex flex-col gap-4">
           <a href="" className="text-sm hover:underline">
             Online Courses
           </a>
           <a href="" className="text-sm hover:underline">
             Career Coaching
           </a>
           <a href="" className="text-sm hover:underline">
             Tutoring
           </a>
           <a href="" className="text-sm hover:underline">
             Corporate Training
           </a>
         </div>
       </div>
       <div>
         <div className="font-bold mb-6">About Us</div>
         <div className="flex flex-col gap-4">
           <a href="" className="text-sm hover:underline">
             Our Mission
           </a>
           <a href="" className="text-sm hover:underline">
             Our Team
           </a>
           <a href="" className="text-sm hover:underline">
             Careers
           </a>
           <a href="" className="text-sm hover:underline">
             Contact Us
           </a>
         </div>
       </div>
       <div>
         <div className="font-bold mb-6">Stay Connected</div>
         <div className="text-sm mb-4">@gmail.com</div>
         <div className="text-sm">+959883271929</div>
         <div className="flex gap-4 mt-4">
           <a href="" className="hover:scale-110 text-xl">
             <BsFacebook />
           </a>
           <a href="https://instagram.com/progyaneducations" className="hover:scale-110 text-xl">
             <BsInstagram />
           </a>
           <a href="" className="hover:scale-110 text-xl">
             <BsTwitter />
           </a>
           <a href="" className="hover:scale-110 text-xl">
             <BsPinterest />
           </a>
         </div>
       </div>
     </div>
   </motion.div>
 );
};

export default Footer;
