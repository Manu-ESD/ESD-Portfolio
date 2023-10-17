import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import SkillCard from "./SkillCard";
import { AiOutlineHtml5, AiOutlineGithub, AiOutlinePlus } from "react-icons/ai";
import {
  TbBrandCss3,
  TbBrandTailwind,
  TbBrandBootstrap,
  TbBrandRedux,
} from "react-icons/tb";
import {
  BiLogoJavascript,
  BiLogoReact,
  BiLogoJava,
  BiLogoMongodb,
} from "react-icons/bi";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
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
      className="h-fit  min-h-screen w-full relative flex justify-center items-center"
      id="experience"
    >
      <div className="w-full h-[100%]  z-[0] absolute top-0 right-0 bg-gradient-to-b from-[#1c1e26] opacity-100"></div>
      <div className=" w-[95vw] h-fit mx-auto p-[2.5vw]">
        <div className=" h-fit w-[100%]">
          <div ref={ref} className="w-[100%] h-fit">
            {/* Skills */}
            <motion.h3
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-[1.5rem] z-[1] relative text-[#fff] font-[MainFont] font-bold py-3 w-[100%]"
            >
              Skills:
            </motion.h3>
            <div className="h-fit w-full flex flex-wrap gap-3 pb-10">
              <motion.div
                variants={{
                  visible: { opacity: 1, x: 0 },
                }}
                animate={mainControls}
                initial={{ opacity: 0, x: "-50%" }}
                transition={{ duration: 0.7, ease: "easeIn", delay: 0 }}
              >
                <SkillCard
                  key={0}
                  SkillIcon={AiOutlineHtml5}
                  skillName="HTML5"
                ></SkillCard>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: "-100%" }}
                variants={{
                  visible: { opacity: 1, x: 0 },
                }}
                animate={mainControls}
                transition={{ duration: 0.7, ease: "easeIn", delay: 0.5 }}
              >
                <SkillCard
                  key={0}
                  SkillIcon={TbBrandCss3}
                  skillName="CSS3"
                ></SkillCard>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: "-150%" }}
                variants={{
                  visible: { opacity: 1, x: 0 },
                }}
                animate={mainControls}
                transition={{ duration: 0.7, ease: "easeIn", delay: 1 }}
              >
                <SkillCard
                  key={0}
                  SkillIcon={TbBrandTailwind}
                  skillName="Tailwind"
                ></SkillCard>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: "-200%" }}
                variants={{
                  visible: { opacity: 1, x: 0 },
                }}
                animate={mainControls}
                transition={{ duration: 0.7, ease: "easeIn", delay: 1.5 }}
              >
                <SkillCard
                  key={0}
                  SkillIcon={TbBrandBootstrap}
                  skillName="Bootstrap"
                ></SkillCard>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: "-250%" }}
                variants={{
                  visible: { opacity: 1, x: 0 },
                }}
                animate={mainControls}
                transition={{ duration: 0.7, ease: "easeIn", delay: 2 }}
              >
                <SkillCard
                  key={0}
                  SkillIcon={BiLogoJavascript}
                  skillName="Javascript"
                ></SkillCard>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: "-300%" }}
                variants={{
                  visible: { opacity: 1, x: 0 },
                }}
                animate={mainControls}
                transition={{ duration: 0.7, ease: "easeIn", delay: 2.5 }}
              >
                <SkillCard
                  key={0}
                  SkillIcon={BiLogoReact}
                  skillName="React"
                ></SkillCard>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: "-350%" }}
                variants={{
                  visible: { opacity: 1, x: 0 },
                }}
                animate={mainControls}
                transition={{ duration: 0.7, ease: "easeIn", delay: 3 }}
              >
                <SkillCard
                  key={0}
                  SkillIcon={TbBrandRedux}
                  skillName="Redux"
                ></SkillCard>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: "-400%" }}
                variants={{
                  visible: { opacity: 1, x: 0 },
                }}
                animate={mainControls}
                transition={{ duration: 0.7, ease: "easeIn", delay: 3.5 }}
              >
                <SkillCard
                  key={0}
                  SkillIcon={BiLogoJava}
                  skillName="Java"
                ></SkillCard>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: "-450%" }}
                variants={{
                  visible: { opacity: 1, x: 0 },
                }}
                animate={mainControls}
                transition={{ duration: 0.7, ease: "easeIn", delay: 4 }}
              >
                <SkillCard
                  key={0}
                  SkillIcon={AiOutlineGithub}
                  skillName="Git"
                ></SkillCard>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: "-500%" }}
                variants={{
                  visible: { opacity: 1, x: 0 },
                }}
                animate={mainControls}
                transition={{ duration: 0.7, ease: "easeIn", delay: 4.5 }}
              >
                <SkillCard
                  key={0}
                  SkillIcon={BiLogoMongodb}
                  skillName="MongoDB"
                ></SkillCard>
              </motion.div>
            </div>
          </div>
          <div className="w-[100%] h-fit">
            {/* Experience */}
            <motion.h3
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="text-[1.5rem] text-[#fff] font-[MainFont] font-bold py-3 z-[1] relative"
            >
              Work Experience:
            </motion.h3>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 1.5 }}
              className=" h-fit w-full"
            >
              <div className="h-fit w-full flex justify-between flex-col min-[1080px]:flex-row ">
                <ExperienceCard></ExperienceCard>
                <div className="max-w-[320px] max-h-[320px] h-[50vh] w-[50vh] relative top-0 min-[550px]:right-[calc(-100%+320px)] min-[1080px]:right-0 flex justify-center items-center scale-75 right-[calc(-100%+280px)] min-[550px]:scale-100">
                  <div className="max-w-[320px] max-h-[320px] h-[50vh] w-[50vh] rounded-[50%] bg-[#ffffff00] border-[1px] border-[#fafdfd43] absolute  opacity-[1]"></div>
                  <div className="max-w-[240px] max-h-[240px] h-[40vh] w-[40vh] rounded-[50%] bg-[#ff00]  border-[1px] border-[#fafdfd43] absolute opacity-[1]"></div>
                  <div className="max-w-[160px] max-h-[160px] h-[30vh] w-[30vh] rounded-[50%] bg-[#00f0]  border-[1px] border-[#fafdfd43] absolute opacity-[1]"></div>
                  <div className="h-[80px] w-fit border-2 rounded-md  bg-[#111117] border-[#0c0c10] flex flex-col justify-start items-left p-3 absolute top-[calc(50%-40px)] min-[385px]:left-[-40%]  left-[calc(-100vw+80%)]">
                    <h1 className="text-[#fff]">
                      LeetCode:{" "}
                      <span className="text-[2rem] text-yellow">80</span>
                      <span className="text-[1.5rem] text-yellow">+</span>
                      <span>Problems solved</span>
                    </h1>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
// 1e261c
//bg-gradient-to-b
//from-[#38e70d]
