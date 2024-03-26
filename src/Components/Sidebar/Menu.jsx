import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { IoCodeSharp } from "react-icons/io5";
import { GiBrain } from "react-icons/gi";
import { FaRegUserCircle } from "react-icons/fa";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { TbBrandLeetcode } from "react-icons/tb";

const Menu = () => {
  return (
    <div className="p-8 mt-0 m-3 overflow-y-auto h-full bg-l_secondary dark:bg-d_secondary text-l_textColor dark:text-d_textColor rounded-md">
      <div className="flex flex-col justify-center place-items-start p-6 gap-5">
        <a
          href="/"
          className="flex items-center placeholder:text-info gap-5 text-md transform transition-transform duration-300 hover:-translate-y-2 p-1"
        >
          <AiOutlineHome className="text-2xl" /> Home
        </a>
        <a
          className="flex items-center placeholder:text-info gap-5 text-md transform transition-transform duration-300 hover:-translate-y-2 p-1"
          href="#projects"
        >
          <IoCodeSharp className="text-2xl" />
          Projects
        </a>
        <a
          className="flex items-center placeholder:text-info gap-5 text-md transform transition-transform duration-300 hover:-translate-y-2 p-1"
          href="#skills"
        >
          <GiBrain className="text-2xl" />
          Skills
        </a>
        <a
          className="flex items-center placeholder:text-info gap-5 text-md transform transition-transform duration-300 hover:-translate-y-2 p-1"
          href="#about"
        >
          <FaRegUserCircle className="text-2xl" /> About
        </a>
      </div>
      <div className="flex flex-col p-6 gap-5">
        <h3 className="text-md font-bold uppercase">Social</h3>
        <a
          className="flex items-center placeholder:text-info gap-5 text-md transform transition-transform duration-300 hover:-translate-y-2 p-1"
          href="https://github.com/abhinav2-3"
          target="_blank"
          rel="noreferrer"
        >
          <FiGithub className="text-2xl" stroke="#2a9d8f" />
          GitHub
        </a>
        <a
          className="flex items-center placeholder:text-info gap-5 text-md transform transition-transform duration-300 hover:-translate-y-2 p-1"
          href="https://www.linkedin.com/in/abhinav28/"
          target="_blank"
          rel="noreferrer"
        >
          <FiLinkedin className="text-2xl" stroke="#0277b5" />
          Linkedin
        </a>
        <a
          className="flex items-center placeholder:text-info gap-5 text-md transform transition-transform duration-300 hover:-translate-y-2 p-1"
          href="https://leetcode.com/abhinav2-3/"
          target="_blank"
          rel="noreferrer"
        >
          <TbBrandLeetcode className="text-2xl" stroke="#f77f00" />
          Leetcode
        </a>
        <a
          className="flex items-center placeholder:text-info gap-5 text-md transform transition-transform duration-300 hover:-translate-y-2 p-1"
          href="https://instagram.com/cse.verse/"
          target="_blank"
          rel="noreferrer"
        >
          <FiInstagram className="text-2xl" stroke="#b5179e" />
          Instagram
        </a>
      </div>
    </div>
  );
};

export default Menu;
