import { motion } from "framer-motion";

const ExperienceCard = () => {
  return (
    <div className="w-full pb-4 flex flex-col md:flex-row items-center justify-evenly text-d_primary dark:text-l_primary dark:bg-d_secondary bg-l_secondary">
      <motion.aside
        className="md:w-1/3 w-1/2 md:p-12 p-4"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <img src="/image/Rablo.png" alt="Rablo.in" className="rounded-lg" />
      </motion.aside>
      <motion.aside
        className="flex flex-1 flex-col h-full px-8 items-center md:items-start"
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h1 className="text-2xl font-black pb-4">Backend Developer Intern</h1>
        <h2 className="text-xl font-bold dark:text-gray-200 text-slate-800">
          Backend Team Leader
        </h2>
        <div className="pt-4 flex flex-col font-semibold text-slate-700 dark:text-gray-300">
          <span>&bull; Solved 40+ Bugs across all Modules.</span>
          <span>&bull; Created 10+ APIs across all Modules.</span>
          <span>&bull; Worked on 1-2 new Features from Scratch</span>
          <span>
            &bull; Communicated, Learned and great experience with other teams
            like <br /> <b> Frontend, Flutter, DevOps, UI/UX, HR, etc.</b>
          </span>
          <span>
            &bull; Have a guidance with our company&apos;s{" "}
            <b>Founder and HODs.</b>
          </span>
        </div>
      </motion.aside>
    </div>
  );
};

export default ExperienceCard;
