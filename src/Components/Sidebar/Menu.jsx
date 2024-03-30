import React from "react";
import {
  navLink,
  navicons,
  socialIcons,
  socialLink,
  strokecolor,
} from "../utils/data";

const Menu = () => {
  return (
    <div className="p-8 mt-0 m-3 overflow-y-auto h-full bg-l_secondary dark:bg-d_secondary text-l_textColor dark:text-d_textColor rounded-md">
      <div className="flex flex-col justify-center place-items-start p-6 gap-5">
        {navLink?.map((item, idx) => {
          const Icon = navicons[idx];
          return (
            <a
              href={item.link}
              key={item.name}
              className="flex items-center placeholder:text-info gap-5 text-md transform transition-transform duration-300 hover:-translate-y-2 p-1"
            >
              <Icon size={25} /> {item.name}
            </a>
          );
        })}
      </div>
      <div className="flex flex-col p-6 gap-5">
        <h3 className="text-md font-bold uppercase">Social</h3>
        {socialLink?.map((item, idx) => {
          const Icon = socialIcons[idx];
          const strokeColor = strokecolor[idx];
          return (
            <a
              href={item.link}
              key={item.name}
              className="flex items-center placeholder:text-info gap-5 text-md transform transition-transform duration-300 hover:-translate-y-2 p-1"
            >
              <Icon size={25} stroke={strokeColor} /> {item.name}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
