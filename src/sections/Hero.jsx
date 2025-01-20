import React from "react";
import heroimg from '../assets/heroimg.png';
import backgroundImage from '../assets/homeimg.webp';
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa6";
import { slideUpVariants, zoomInVariants } from './animation';

const Hero = () => {
    return (
        <div
            id="hero"
            className="bg-black w-full lg:h-[700px] h-fit m-auto pt-[60px] lg:pt-[0px] lg:px-[20px] flex justify-between items-center lg:flex-row flex-col lg:gap-5 gap-[50px] bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={slideUpVariants}
                className="lg:w-[60%] w-full flex-col justify-center items-start lg:gap-8 gap-4"
            >
                <motion.h1
                    variants={slideUpVariants}
                    className="text-yellow-500 text-2xl"
                >
                    WE ARE BUILDERS
                </motion.h1>
                <motion.h1
                    variants={slideUpVariants}
                    className="text-white uppercase text-[50px] font-bold"
                >
                    We Will Build Your Dream
                </motion.h1>
                <div className="w-[715px] h-[6px] bg-yellow-500"></div>
                <p className="text-white text-[20px]">
                    At Pride Construction, we specialize in transforming your vision into reality. 
                    With years of expertise in residential, commercial, and industrial projects, we are dedicated to delivering 
                    high-quality craftsmanship, innovative solutions, and unparalleled attention to detail. 
                    Your dream is our blueprint, and we ensure every project is executed with excellence and precision.
                </p>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={zoomInVariants}
                    className="flex justify-center items-center gap-5 flex-wrap"
                >
                    {/* Social Media Icons */}
                    <a
                        href="https://www.facebook.com/profile.php?id=61559397220563"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-yellow-500 hover:text-white text-3xl"
                    >
                        <FaFacebook />
                    </a>
                    <a
                        href="https://www.twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-yellow-500 hover:text-white text-3xl"
                    >
                        <FaTwitter />
                    </a>
                    
                    <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-yellow-500 hover:text-white text-3xl"
                    >
                        <FaInstagram />
                    </a>
                    {/* Reach Us Button */}
                    <motion.button
                        variants={zoomInVariants}
                        className="bg-yellow-500 hover:bg-white hover:text-black px-10 py-3 rounded-lg text-black font-bold"
                    >
                        REACH US
                    </motion.button>
                </motion.div>
            </motion.div>
            <div className="w-[40%] flex flex-col justify-end items-end">
                <motion.img
                    initial="hidden"
                    whileInView="visible"
                    variants={zoomInVariants}
                    src={heroimg}
                    alt="hero image"
                    className="lg:h-[600px] h-[300px] lg:mb-[-100px]"
                />
            </div>
        </div>
    );
};

export default Hero;
