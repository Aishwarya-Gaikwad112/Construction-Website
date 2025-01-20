import React from "react";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from './animation';

const About = () => {
    return (
        <div
            className="lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col 
        justify-between items-start gap-[50px]"
            id="about"
        >
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={slideUpVariants}
                className="lg:w-[60%] w-full flex flex-col justify-center items-start gap-6"
            >
                <motion.h1
                    variants={slideUpVariants}
                    className="text-yellow-500 text-2xl"
                >
                    WELCOME TO
                </motion.h1>
                <motion.h1
                    variants={slideUpVariants}
                    className="text-white uppercase text-[40px] font-bold"
                >
                    Pride Construction
                </motion.h1>
                <div className="w-[310px] h-[6px] bg-yellow-500"></div>
            </motion.div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={slideUpVariants}
                className="lg:w[40%] w-full flex flex-col justify-center items-start gap-6"
            >
                <p className="text-white text-lg text-justify">
                    At Pride Construction, we are committed to transforming visions into reality with:
                    <ul className="list-disc ml-6">
                        <li>High-quality construction services tailored to client needs.</li>
                        <li>Expertise in residential, commercial, and industrial projects.</li>
                        <li>Focus on innovation, precision, and sustainable practices.</li>
                        <li>A team of skilled professionals dedicated to excellence.</li>
                        <li>Timely project delivery and unparalleled attention to detail.</li>
                    </ul>
                    We take pride in every project, ensuring your dream becomes our blueprint for success.
                </p>
                <motion.button
                    variants={zoomInVariants}
                    className="bg-yellow-500 hover:bg-white hover:text-black px-10 py-3 
                     rounded-lg font-bold text-black"
                >
                    READ MORE
                </motion.button>
            </motion.div>
        </div>
    );
};
export default About;
