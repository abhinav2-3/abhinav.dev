import React from "react";
import { FaUser } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import Theme from "./Sidebar/Theme";
import { motion } from "framer-motion";

const Header = ({ onToggleMenu, showMenu }) => {
  return (
    <motion.nav
      style={{ width: "-webkit-fill-available" }}
      className="fixed lg:flex-row-reverse flex z-30 place-items-center justify-between p-4 px-8 shadow-lg rounded bg-l_primary dark:bg-d_primary shadow-l_secondary/50 dark:shadow-d_secondary/50"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 4.5, duration: 0.5 }}
    >
      <div>
        <a
          href="mailto:abhinavmaurya476@gmail.com"
          className="transform transition-transform py-2 px-4 rounded gap-2 place-items-center font-bold duration-300 hover:-translate-y-1 flex bg-d_primary dark:bg-l_primary text-d_textColor dark:text-l_textColor hover:bg-d_secondary hover:dark:bg-l_secondary"
        >
          Contact Me <FaUser size={18} />
        </a>
      </div>
      <div className="block lg:hidden">
        <Theme />
      </div>
      <div className="hidden lg:flex text-l_textColor dark:text-d_textColor text-base font-bold uppercase">
        Abhinav | Portfolio
      </div>

      <button
        onClick={onToggleMenu}
        className="lg:hidden block text-l_textColor dark:text-d_textColor"
      >
        {showMenu ? <RxCross2 size={25} /> : <GiHamburgerMenu size={25} />}
      </button>
    </motion.nav>
  );
};

export default Header;
