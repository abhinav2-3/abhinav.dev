import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./Card/ProjectCard";

const Projects = ({ title, data }) => {
  return (
    <section id="projects" className="py-6 mb-5">
      <h1 className="text-xl font-bold text-l_textColor dark:text-d_textColor">
        {title}
      </h1>
      <motion.div className="px-4 mt-4 h-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        {data.map((item, index) => {
          return (
            <motion.div
              className="project_card bg-l_secondary dark:bg-d_secondary rounded-lg overflow-hidden transition-transform duration-300 hover:translate-y-3"
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.2 }}
              whileHover={{
                translateY: "-20px",
                transition: { delay: 0 },
              }}
            >
              <ProjectCard
                key={item.id}
                title={item.title}
                imgSrc={item.imgSrc}
                hrefURL={item.hrefURL}
                ytLink={item.ytLink}
                techStack={item.techStack}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Projects;
