import React from "react";
import { FaUser } from "react-icons/fa6";
import video from "./utils/video.mp4";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      id="about"
      className="my-4 h-screen grid place-items-center relative rounded-lg overflow-hidden"
      initial={{ x: 300, opacity: 0 }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
        delay: 5,
        ease: "easeInOut",
      }}
    >
      <video
        src={video}
        autoPlay
        muted
        loop
        className="w-full h-full object-cover absolute aspect-video inset-0 -z-0"
      ></video>
      <div className="z-10 h-full w-full md:p-16 md:px-7 px-0 py-4 bg-black/30 grid place-items-center">
        <h1 className="text-3xl font-black tracking-widest underline-offset-8 text-d_textColor  underline text-center uppercase">
          About Me
        </h1>
        <div className="flex w-full relative mt-8 gap-8 md:p-4 p-2 flex-col md:flex-row place-items-center justify-around">
          <img
            className="w-56 h-56 rounded-full shadow-lg shadow-slate-900 transition-all duration-300 hover:-translate-y-8"
            src="/image/avatar.png"
            alt="Profile"
          />
          <div className="lg:w-2/4 flex w-full flex-col gap-6 text-d_textColor ">
            <h1 className="md:text-4xl text-3xl font-extrabold tracking-tighter ">
              Hey, I'M Abhinav Maurya <br />A Full Stack Web Developer <br />
            </h1>
            <span className="text-3xl font-extrabold tracking-normal text-yellow-400">
              Frontend | Backend
            </span>
            <a
              href="mailto:abhinavmaurya476@gmail.com"
              className="transform transition-transform py-2 px-4 w-40 rounded gap-2 place-items-center font-bold duration-300 hover:-translate-y-1 flex bg-d_primary dark:bg-l_primary text-d_textColor dark:text-l_textColor hover:bg-d_secondary hover:dark:bg-l_secondary"
            >
              Contact Me <FaUser size={18} />
            </a>
          </div>
        </div>
        <div className="text-center text-wrap hidden md:block absolute bottom-8">
          <h1 className="text-2xl font-bold tracking-tighter text-yellow-400 uppercase">
            The next big project deserves the right developer. Click{" "}
            <span className="text-black bg-white px-2 rounded text-xl">
              Connect Me
            </span>{" "}
            and let's explore how I can contribute my skills and creativity to
            your team
          </h1>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
