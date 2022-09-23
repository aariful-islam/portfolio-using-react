import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
// import "../../shared/Shared.css";

const Banner = () => {
  return (
    <div className="banner min-h-[90vh] flex flex-col-reverse lg:flex-row items-center justify-between">
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5 }}
      >
        <h2 className="text-neutral text-xl font-medium">Hi, I'm</h2>
        <h1 className="text-4xl font-semibold mb-0">Ariful Islam</h1>
        <div className="my-4">
          <TypeAnimation
            className="text-2xl text-primary font-bold"
            cursor={true}
            sequence={[
              "A Full stack we b Developer",
              3000,
              "A Competitive Programmer",
              3000,
              
            ]}
            wrapper="div"
            repeat={Infinity}
          />
        </div>
        <p className="text-neutral max-w-md mb-6 font-medium">
          I am Jr. Front-end Developer. I am very passionate to my work and
          dedicated to explore New Tools And Technologies.
        </p>

        <div className="flex items-center">
          <a
            href="https://drive.google.com/file/d/1qVQ1OLO-5RxHy1rwbe5Ib9igCTfeO99f/view?usp=sharing"
            target="blank"
          >
            <button className="primary-button">
              <span>My Resume</span>
            </button>
          </a>
          <Link to="/about" className="ml-4">
            <button className="btn border-2 border-primary bg-transparent hover:bg-primary text-white duration-500">
              About Me
            </button>
          </Link>
        </div>
      </motion.div>
      

      
    </div>
  );
};

export default Banner;
