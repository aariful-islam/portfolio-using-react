import React from "react";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import img from '../../../images/Md_Ariful_Islam-removebg-preview.png'

const Banner = () => {
    return (
        <div className="banner min-h-[90vh] flex flex-col-reverse lg:flex-row items-center justify-between pl-20 pr-20">
            <motion.div
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 1.5 }}
            >
                <h2 className="text-neutral text-xl font-medium">Hi, This is</h2>
                <h1 className="text-4xl font-semibold mb-0">Ariful Islam</h1>
                <div className="my-4">
                    <TypeAnimation
                        className="text-2xl text-primary font-bold"
                        cursor={true}
                        sequence={[
                            "A Full stack web Developer",
                            3000,
                            "A Competitive Programmer",
                            3000,

                        ]}
                        wrapper="div"
                        repeat={Infinity}
                    />
                </div>
                <p className="text-neutral max-w-md mb-6 font-medium">
                    I'm competitive programmer and full stack web developer. I'm very much pasionate in programming. I want to build amazing websites.I love to explore New Tools And Technologies.
                </p>

                <div className="flex items-center">
                    <a
                        href="https://drive.google.com/file/d/1CCV7lFfClYR5Fe5Mrrq0GMEIiwjdRHyI/view?usp=sharing"
                        target="blank"
                    >
                        <button className="btn border-2 border-primary bg-transparent hover:bg-primary text-white duration-500">
                            <span>My Resume</span>
                        </button>
                    </a>

                </div>
            </motion.div>
            <motion.div
                className="w-full md:w-1/2"
                initial={{ x: "100vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 1.5 }}
            >
                <img src={img} alt="" />
            </motion.div>



        </div>
    );
};

export default Banner;
