import { motion } from "framer-motion";
import DownloadButton from "./ui/DownloadResume";

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
        <DownloadButton />
      </div>
    </motion.div>
  );
};

export default Hero;
