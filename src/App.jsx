import { useState } from "react";
import About from "./Components/About";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Sidebar from "./Components/Sidebar/SideBar";
import TechStacks from "./Components/TechStacks";
import { projectData, miniProjectsData } from "./Components/utils/data";
import Loader from "./Components/Loader";
import ProgressBar from "./Components/ProgressBar";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const menuHandler = () => {
    setShowMenu(!showMenu);
  };

  return (
    <main id="main">
      <Loader />
      <div className="w-full  h-full bg-l_primary dark:bg-d_primary">
        <div className="flex relative">
          <div
            className={`${
              showMenu ? "flex" : "hidden"
            }  lg:flex h-screen fixed w-screen sm:w-[263px] z-20`}
          >
            <Sidebar />
          </div>
          <main className="relative flex-1 pl-0 lg:pl-[263px]">
            <Header onToggleMenu={menuHandler} showMenu={showMenu} />
            <Hero />
            <div className="p-4 overflow-hidden">
              <Projects title={"Projects"} data={projectData} />
              <TechStacks />
              <About />
              <Projects title={"Mini Projects"} data={miniProjectsData} />
            </div>
          </main>
        </div>
      </div>
      <ProgressBar />
    </main>
  );
}

export default App;
