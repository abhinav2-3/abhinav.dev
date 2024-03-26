import React from "react";
import { PiMonitorPlayFill } from "react-icons/pi";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ title, hrefURL, imgSrc, techStack, ytLink }) => {
  return (
    <div className="flex flex-col h-auto text-l_textColor dark:text-d_textColor overflow-hidden gap-2 overflow-ellipsis">
      <img
        width={700}
        height={700}
        className="object-cover aspect-video"
        src={imgSrc}
        alt={title}
      />
      <div className="flex flex-col px-4 py-2 h-auto">
        <figcaption className="font-bold text-xl">{title}</figcaption>
        <p className="text-sm">{techStack}</p>
        <div className="flex lg:justify-between justify-between place-items-center h-20 md:flex-col lg:flex-row md:justify-evenly">
          <a
            href={hrefURL || "/"}
            target="_blank"
            className="flex place-items-center text-sm bg-l_primary dark:bg-d_primary py-1 px-4 rounded-2xl border duration-300 transition-all hover:text-blue-500"
            rel="noreferrer"
          >
            Demo <FaExternalLinkAlt size={15} className="ml-2" />
          </a>
          <a
            href={ytLink || "/"}
            target="_blank"
            className="flex place-items-center text-sm py-1 px-4 rounded-2xl duration-300 transition-all hover:border hover:text-red-500"
            rel="noreferrer"
          >
            Play <PiMonitorPlayFill size={16} className="ml-2 " />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
