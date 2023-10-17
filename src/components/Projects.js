import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";
import jarvisProject from "../Utility/Images/Jarvis-project.png";
import NetflixProject from "../Utility/Images/Netflix-Clone.png";
import Chatbot from "../Utility/Images/Chatbot.png";
import Esite from "../Utility/Images/Ecommercesite.png";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      console.log("true in view");
      mainControls.start("visible");
    }
    console.log(isInView);
  }, [isInView]);
  return (
    <div
      ref={ref}
      className="min-h-screen h-fit w-[100%] m-auto bg-gradient-to-t from-[#1c1e26] flex justify-center items-center"
      id="projects"
    >
      <div className="w-[95vw] h-fit mx-auto p-[2.5vw]">
        <motion.h3
          className="text-[1.5rem] w-full text-[#fff] font-[MainFont] font-bold py-3"
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          Projects:
        </motion.h3>

        <div className=" min-[1250px]:w-[100%] w-[70%] mx-auto">
          <motion.div
            className="flex flex-row flex-wrap min-[1250px]:gap-5 justify-center"
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <ProjectCard
              spath={jarvisProject}
              name="Jarvis ToDo Assistant ToDo"
              discription=""
              gitL="https://github.com/Manu-ESD/Jarvis-To-Do-App"
              color="#a1887f75"
            ></ProjectCard>
            <ProjectCard
              spath={NetflixProject}
              name="Netflix Clone"
              discription=""
              gitL="https://github.com/Manu-ESD/Netflix-Clone"
              color="#f4433675"
            ></ProjectCard>
            <ProjectCard
              spath={Chatbot}
              name="Responsive Chatbot Application"
              discription=""
              gitL="https://github.com/Manu-ESD/CSSTASK"
              color="#42a5f575"
            ></ProjectCard>
            <ProjectCard
              spath={Esite}
              name="E-Commerce Site"
              discription=""
              gitL="https://github.com/Manu-ESD/EcomWebsite"
              color="#9575cd75"
            ></ProjectCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
