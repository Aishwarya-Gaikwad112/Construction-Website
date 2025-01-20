import React from "react";
import { FaCopyright, FaArrowUp, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa6";
import { Link } from "react-scroll";

const Footer = () => {
    return (
        <>
            {/* Footer Section */}
            <div className="bg-black text-white p-5">
                <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
                    <FaCopyright className="fill-yellow-500 lg:size-5 size-8" />
                    <p className="text-lg text-center">
                        Copyright 2025, ShivShakti Construction, All Rights Reserved
                    </p>
                </div>
                {/* Social Media Icons */}
                <div className="flex justify-center items-center gap-4 mt-4">
                    <a href="https://www.facebook.com/profile.php?id=61559397220563" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="text-yellow-500 hover:text-white size-6" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="text-yellow-500 hover:text-white size-6" />
                    </a>
                    
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-yellow-500 hover:text-white size-6" />
                    </a>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <div
                id="icon-box"
                className="bg-yellow-500 text-black p-3 rounded-full hover:bg-black hover:text-white cursor-pointer fixed lg:bottom-6 right-6 bottom-6"
            >
                <Link to="hero" spy={true} offset={-100} smooth={true}>
                    <FaArrowUp className="size-6" />
                </Link>
            </div>
        </>
    );
};

export default Footer;
