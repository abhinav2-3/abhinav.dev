import { motion, useScroll } from "framer-motion";
import React from "react";

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="progress-bar"
      style={{ scaleX: scrollYProgress, height: 5 }}
    />
  );
};

export default ProgressBar;
