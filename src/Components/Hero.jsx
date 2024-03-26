import React from "react";
import { MdDownload } from "react-icons/md";
import { resumeURL } from "./utils/data";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      className="h-40 mt-24 bg-hero-cover bg-no-repeat bg-cover bg-center rounded-lg"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 4.5, duration: 0.2 }}
    >
      <div className="flex text-d_textColor h-full justify-around place-items-center bg-blur backdrop-filter backdrop-blur">
        <img
          className="w-28 h-28 rounded-full stroke-4"
          src={"../image/avatar.png"}
          alt="Abhinav"
        />
        <div className="text-d_textColor md:flex flex-col hidden">
          <h1 className="uppercase font-bold text-3xl">Abhinav Maurya</h1>
          <span className="uppercase font-normal flex justify-center text-sm tracking-widest">
            Full Stack Developer [MERN]
          </span>
        </div>
        <a
          className="flex place-items-center gap-4 px-8 rounded py-2 font-semibold transition-transform duration-300 hover:-translate-y-2 p-1 text-l_textColor dark:text-d_textColor bg-l_secondary dark:bg-d_secondary"
          href={resumeURL}
          target="_blank"
          rel="noreferrer"
        >
          Resume <MdDownload size={20} />
        </a>
      </div>
    </motion.div>
  );
};

export default Hero;
