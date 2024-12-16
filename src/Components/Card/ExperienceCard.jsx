/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const ExperienceCard = ({ data }) => {
  return (
    <div className="w-full pb-4 flex flex-col md:flex-row items-center justify-evenly text-d_primary dark:text-l_primary dark:bg-d_secondary bg-l_secondary">
      <motion.aside
        className="md:w-1/3 w-1/2 md:p-12 p-4"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <img src={data.imgSrc} alt={data.company} className="rounded-lg" />
      </motion.aside>
      <motion.aside
        className="flex flex-1 flex-col h-full px-8 items-center md:items-start"
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h1 className="text-2xl font-black pb-4">{data.title}</h1>
        <h2 className="text-xl font-bold dark:text-gray-200 text-slate-800">
          {data.subTitle}
        </h2>
        <div className="pt-4 flex flex-col font-semibold text-ellipsis text-slate-700 dark:text-gray-300">
          <span>&bull; {data.desc1}</span>
          {data.desc2 && <span>&bull; {data.desc2}</span>}
          {data.desc3 && <span>&bull; {data.desc3}</span>}
          {data.desc4 && <span>&bull; {data.desc4}</span>}
          {data.desc5 && <span>&bull; {data.desc5}</span>}
        </div>
      </motion.aside>
    </div>
  );
};

export default ExperienceCard;
