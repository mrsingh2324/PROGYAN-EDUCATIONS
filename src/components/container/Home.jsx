import React from "react";
import hero from "../../assets/hero.png";
import { logos } from "../../Data";
import { motion } from "framer-motion";

const Home = () => {
 const container = {
   hidden: {
     opacity: 0,
     scale: 0,
   },
   visible: {
     opacity: 1,
     scale: 1,
     transition: {
       delayChildren: 0.3,
       staggerChildren: 0.1,
     },
   },
 };
 const item = {
   hidden: { y: 20, opacity: 0 },
   visible: { y: 0, opacity: 1 },
 };

 return (
   <div className="section" id="home">
     <div className="container mx-auto px-4">
       <div className="flex flex-col md:flex-row items-center justify-between">
         <div className="text-center md:text-left">
           <h2 className="font-bold text-2xl mb-4">
             Unlock Your Potential with <br />
             <span className="text-Teal">Innovative e-Learning</span>
           </h2>
           <p className="text-lg text-gray-700">
             Discover a world of knowledge and limitless possibilities with
             our engaging courses and expert-led instruction.
           </p>
           <div className="mt-6">
             <button className="px-6 py-3 bg-Teal text-white font-bold rounded-lg mr-4 text-sm">
               Get Started Today
             </button>
             <button className="px-6 py-3 border border-gray-300 font-bold rounded-lg text-sm">
               Explore Courses
             </button>
           </div>
         </div>
         <div className="md:w-1/2">
           <img src={hero} alt="Learner exploring online courses" className="w-full rounded-lg" />
         </div>
       </div>
       <div className="mt-8">
         <h3 className="text-center text-xl mb-4">
           We Partner with <span className="text-Teal">Trusted Institutions</span>
         </h3>
         <motion.div
           variants={container}
           initial="hidden"
           whileInView="visible"
           className="flex flex-wrap items-center justify-center gap-8"
         >
           {logos.map((logo, index) => (
             <motion.div variants={item} className="w-32" key={index}>
               <img src={logo} alt="" className="w-full object-cover rounded-lg" />
             </motion.div>
           ))}
         </motion.div>
       </div>
     </div>
   </div>
 );
};

export default Home;
