import React from "react";
import teacher1 from "../../assets/teacher1.png";
import teacher2 from "../../assets/teacher2.png";
import { accordions } from "../../Data";
import Accordion from "./Accordion";

const Teacher = () => {
  return (
    <div className="section" id="teacher">
      <div className="grid sm:grid-cols-2 place-items-center gap-8">
        <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            Empower Minds as a <span className="text-Teal">Knowledge Leader</span> <br /> on Our Platform
          </div>
          <p className="text-sm leading-7 text-gray mb-5">
            Share your expertise and guide learners on a journey of discovery. Contribute to the growth of our community and inspire the next generation of professionals. Join us in shaping the future of education!
          </p>
          <button className="py-3 px-4 bg-Teal text-white rounded-lg text-sm font-bold ">
            Start Teaching
          </button>
        </div>
        <div className="p-4 md:w-3/4 sm:row-start-1">
          <img src={teacher1} alt="" />
        </div>
        <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            Share Your Passion as a <span className="text-Teal">Subject Expert</span> <br /> on Our Platform
          </div>
          <p className="text-sm leading-7 text-gray mb-5">
            Make a difference in the lives of learners by offering your insights and knowledge. Help them overcome challenges and achieve their goals. Becoming an instructor on our platform means becoming a catalyst for positive change.
          </p>
          <button className="py-3 px-4 bg-Teal text-white rounded-lg text-sm font-bold ">
            Get Started
          </button>
        </div>
        <div className="p-4 md:w-3/4">
          <img src={teacher2} alt="" />
        </div>
      </div>
      <div className="text-center my-8 font-bold sm:text-[1.875rem] text-[1.5rem]">
        Answers to <span className="text-Teal">Common Questions</span>
      </div>
      <div className="mt-12 max-w-[700px] mx-auto">
        {accordions.map((accordion) => {
          return <Accordion key={accordion.id} {...accordion} />;
        })}
      </div>
    </div>
  );
};

export default Teacher;
