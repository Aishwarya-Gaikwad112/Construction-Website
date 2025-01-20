import React, { useState } from "react";
import { slideUpVariants, zoomInVariants } from './animation';
import { motion } from "framer-motion";

const Contact = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!fullName || !email || !mobile || !message) {
            setError("Please fill out all fields.");
            setSuccess("");
            return;
        }

        const formData = {
            name: fullName,
            email: email,
            mobile: mobile,
            message: message,
            access_key: "cfbb05ca-5474-4027-ba78-c9ae43d52ea3"
        };

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await res.json();
            if (result.success) {
                setSuccess("Your message has been sent successfully!");
                setError("");
                setFullName("");
                setEmail("");
                setMobile("");
                setMessage("");
            } else {
                setError("Failed to send message. Please try again later.");
                setSuccess("");
            }
        } catch (err) {
            setError("An error occurred. Please try again.");
            setSuccess("");
        }
    };

    return (
        <div id="contact" className="bg-white w-full">
            <div className="lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col 
                justify-between items-start gap-[50px]" id="about">
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    variants={slideUpVariants}
                    className="lg:w-[60%] w-full flex flex-col justify-center items-start gap-6">
                    <motion.h1
                        variants={slideUpVariants}
                        className="text-yellow-500 text-2xl">
                        CONTACT US
                    </motion.h1>
                    <motion.h1
                        variants={slideUpVariants}
                        className="text-black uppercase text-[40px] font-bold">
                        REACH US FOR Booking
                    </motion.h1>
                    <div className="w-[180px] h-[6px] bg-yellow-500">
                        
                    </div>
                </motion.div>
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    variants={slideUpVariants}
                    className="lg:w[40%] w-full flex flex-col justify-center items-start gap-6">
                    <motion.form onSubmit={handleSubmit} className="flex flex-col justify-center items-start gap-4 w-full">
                        <input type="text" placeholder="Enter Full Name" className="px-6 py-3 
                            border-[2px] border-black text-black rounded-lg w-full" 
                            value={fullName} onChange={(e) => setFullName(e.target.value)} /> 

                        <input type="email" placeholder="Enter Email" className="px-6 py-3 
                            border-[2px] border-black text-black rounded-lg w-full" 
                            value={email} onChange={(e) => setEmail(e.target.value)} />

                        <input type="number" placeholder="Enter Mobile Number" className="px-6 py-3 
                            border-[2px] border-black text-black rounded-lg w-full" 
                            value={mobile} onChange={(e) => setMobile(e.target.value)} />   

                        <textarea name="" placeholder="Enter Your Message" id="" rows="4" className="px-6 py-3 
                            border-[2px] border-black text-black rounded-lg w-full" 
                            value={message} onChange={(e) => setMessage(e.target.value)}></textarea>    

                        {error && <p className="text-red-500">{error}</p>}
                        {success && <p className="text-green-500">{success}</p>}

                        <motion.button type="submit"
                            variants={zoomInVariants}
                            className="bg-yellow-500 hover:bg-black hover:text-white px-10 py-4
                            text-black font-bold rounded-lg w-full"> 
                            SUBMIT
                        </motion.button>                      
                    </motion.form>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
