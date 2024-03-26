import React, { useEffect, useState } from "react";

const Loader = () => {
  const [hideLoader, setHideLoader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHideLoader(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const loaderStyle = {
    top: hideLoader ? "-100%" : "0",
  };

  return (
    <div
      className="w-full h-full bg-black fixed z-50 transition-all duration-400 ease-linear top-0 text-white text-3xl font-extrabold uppercase flex justify-center place-items-center"
      id="loader"
      style={loaderStyle}
    >
      <h1 className="absolute opacity-0 bg-gradient-to-r from-l_primary to-d_primary text-transparent bg-clip-text">
        Creative
      </h1>
      <h1 className="absolute opacity-0 bg-gradient-to-r from-l_primary to-d_primary text-transparent bg-clip-text">
        Collaborative
      </h1>
      <h1 className="absolute opacity-0 bg-gradient-to-r from-l_primary to-d_primary text-transparent bg-clip-text">
        Ambitious
      </h1>
    </div>
  );
};

export default Loader;
