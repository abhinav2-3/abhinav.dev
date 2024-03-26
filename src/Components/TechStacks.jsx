import React, { useRef } from "react";
import TechCard from "./Card/TechCard";
import { motion } from "framer-motion";

const TechStacks = () => {
  const ref = useRef(null);
  return (
    <div id="skills" className="h-full py-8 overflow-hidden">
      <h1 className="text-d_primary dark:text-l_primary text-xl font-bold">
        What I Know
      </h1>
      <motion.div
        ref={ref}
        className="h-full grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 p-8"
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ staggerChildren: 0.5 }}
      >
        <TechCard
          reference={ref}
          title={"Frontend"}
          tech={[
            "HTML5",
            "CSS",
            "SASS",
            "Tailwind",
            "JavaScript",
            "React Js",
            "Framer Motion",
          ]}
        />
        <TechCard
          title={"Backend"}
          tech={["Node Js", "Express Js", "Auth0"]}
          reference={ref}
        />
        <TechCard title={"Database"} tech={["MongoDB"]} reference={ref} />
        <TechCard
          title={"Tools"}
          tech={["GitHub", "Postman"]}
          reference={ref}
        />
        <TechCard title={"Language"} tech={["Java"]} reference={ref} />
      </motion.div>
    </div>
  );
};

export default TechStacks;
