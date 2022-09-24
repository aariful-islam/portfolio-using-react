import React from "react";
import {
    FaHtml5,
    FaCss3Alt,
    FaNodeJs,
    FaReact,
    FaBootstrap,
    FaGithub,
    FaFigma,
    FaJava,
} from "react-icons/fa";
import {
    SiJavascript,
    SiTailwindcss,
    SiExpress,
    SiMongodb,
    SiMysql,
} from "react-icons/si";
import { motion } from "framer-motion";


const Skill = () => {
    const languages = [
        { title: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
        { title: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
        {
            title: "JavaScript",
            icon: <SiJavascript className="text-yellow-500 rounded" />,
        },
        { title: "NodeJS", icon: <FaNodeJs className="text-green-600" /> },
        { title: "C++", icon: <FaJava className="text-green-600" /> },
    ];
    const frameworks = [
        { title: "React", icon: <FaReact className="text-cyan-400" /> },
        { title: "Bootstrap", icon: <FaBootstrap className="text-indigo-600" /> },
        { title: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
        { title: "ExpressJS", icon: <SiExpress className="text-neutral" /> },
    ];
    const tools = [
        { title: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { title: "Mysql", icon: <SiMysql className="text-green-500" /> },
        { title: "GitHub", icon: <FaGithub className="text-black" /> },
        { title: "Figma", icon: <FaFigma className="" /> },

    ];
    return (
        <div className="pt-20">
            <h1 className="text-4xl font-semibold drop-shadow-md text-center mb-8">
                My <span className="text-primary">Skills</span>
            </h1>

            <div className="flex flex-col md:flex-row items-center justify-evenly my-8">

                <motion.div
                    initial={{ x: "100vw" }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1.5 }}
                >
                    <div>
                        <h2 className="text-cyan-500 text-xl font-semibold">Languages:</h2>
                        <div className="flex flex-wrap mb-4">
                            {languages?.map((skill) => (
                                <div key={skill.title} className="text-center m-3">
                                    <div
                                        className="rounded-lg h-12 w-12 hover:-translate-y-2 duration-300 flex items-center justify-center text-3xl cursor-pointer shadow-lg hover:shadow-xl bg-[#313131] hover:bg-[#262626] mx-auto"
                                        title={skill.title}
                                    >
                                        {skill?.icon}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <h2 className="text-cyan-500 text-xl font-semibold">
                            Library & Frameworks:
                        </h2>
                        <div className="flex flex-wrap mb-4">
                            {frameworks?.map((skill) => (
                                <div key={skill.title} className="text-center m-3">
                                    <div
                                        className="rounded-lg h-12 w-12 hover:-translate-y-2 duration-300 flex items-center justify-center text-3xl cursor-pointer shadow-lg hover:shadow-xl bg-[#313131] hover:bg-[#262626] mx-auto"
                                        title={skill.title}
                                    >
                                        {skill?.icon}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <h2 className="text-cyan-500 text-xl font-semibold">
                            Tools & Technologies:
                        </h2>
                        <div className="flex flex-wrap mb-4">
                            {tools?.map((skill) => (
                                <div key={skill.title} className="text-center m-3">
                                    <div
                                        className="rounded-lg h-12 w-12 hover:-translate-y-2 duration-300 flex items-center justify-center text-3xl cursor-pointer shadow-lg hover:shadow-xl bg-[#313131] hover:bg-[#262626] mx-auto"
                                        title={skill.title}
                                    >
                                        {skill?.icon}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </motion.div>

                <div>
                    <h1 className="text-xl text-primary pb-4">Problem Solving Activities</h1>
                    <ul className="list-disc">
                        <li>Solved more than 500 Problems in various popular online judges</li>
                        <li>Familiar with basic data structure and algorithm</li>
                        <li>participated in ACM ICPC 2019 (Dhaka regional)</li>
                        <li>participated in 8 IUPC.
                        </li>
                        <li>Ranked multiple times in the Top 5 in several programming contest</li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Skill;
