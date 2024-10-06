import ExperienceCard from "./Card/ExperienceCard";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="h-full overflow-hidden"
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <h1 className="text-d_primary dark:text-l_primary text-xl font-bold pb-4">
        Experience
      </h1>
      <ExperienceCard />
    </motion.section>
  );
};

export default Experience;
