import React from "react";
import { Boxes } from "./background-boxes";
import { FaUser } from "react-icons/fa6";

function About() {
  return (
    <div className="h-[80vh] relative w-full overflow-hidden flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <div
        id="about"
        className="min-h-screen w-full grid place-items-center rounded-lg overflow-hidden text-d_primary dark:text-l_primary"
      >
        <div className="h-full w-full md:p-16 md:px-7 px-0 py-4 grid place-items-center text-l_textColor dark:text-d_textColor">
          <h1 className="text-3xl font-black tracking-widest underline-offset-8 underline text-center uppercase">
            About Me
          </h1>
          <div className="flex w-full relative mt-8 gap-8 md:p-4 p-2 flex-col md:flex-row place-items-center justify-around">
            <img
              className="w-56 h-56 rounded-full shadow-lg shadow-slate-900 transition-all duration-300 hover:-translate-y-8"
              src="/image/avatar.png"
              alt="Profile"
            />
            <div className="lg:w-2/4 flex w-full flex-col gap-6 ">
              <h1 className="md:text-4xl text-2xl font-extrabold tracking-tight ">
                Hey, I'M Abhinav Maurya <br />A Full Stack Web Developer <br />
              </h1>
              <span className="text-3xl font-extrabold tracking-normal text-yellow-400">
                Frontend | Backend
              </span>
              <a
                href="mailto:abhinavmaurya476@gmail.com"
                className="transform transition-transform py-2 px-4 w-40 rounded gap-2 place-items-center font-bold duration-300 hover:-translate-y-1 flex bg-d_primary dark:bg-l_primary text-d_textColor dark:text-l_textColor hover:bg-d_secondary hover:dark:bg-l_secondary"
              >
                Contact Me <FaUser size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
