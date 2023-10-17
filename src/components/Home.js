import React, { useEffect, useRef } from "react";
import ProfileImage from "../Utility/Images/Untitled-Artwork.png";
import { AiOutlineDownload } from "react-icons/ai";
import { FiThumbsUp } from "react-icons/fi";
import ParticleBg from "./ParticleBg";
import DesignationReleave from "./DesignationReleave";
import { motion, useInView, useAnimation } from "framer-motion";
import wave from "../Utility/Images/wave.png";
import { BiLogoDiscordAlt, BiLogoLinkedinSquare } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-scroll";
import ReactGA from "react-ga";

const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  function DownHandle() {
    ReactGA.event({
      category: "User",
      action: "Resume Downloaded",
    });
  }

  useEffect(() => {
    if (isInView) {
      console.log("true in view");
    }
    console.log(isInView);
  }, [isInView]);
  return (
    <div
      ref={ref}
      className="h-fit min-h-[110vh] w-full flex justify-center items-start relative z-0 mx-auto"
      id="home"
    >
      {/* ABSOLUTE */}
      <div className="w-full h-[100%]  z-[2] absolute top-0 right-0 bg-gradient-to-t from-[#1c1e26] opacity-100"></div>
      <div className="w-full h-[100%]  z-[2] absolute top-0 right-0 bg-gradient-to-t from-[#1c1e26] opacity-100"></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeIn", delay: 1 }}
      >
        <ParticleBg className="absolute top-0"></ParticleBg>
      </motion.div>

      <div className="h-[50vh] w-[50vh]  flex justify-center items-center absolute top-[-25%] left-[-25vh]">
        <div className="h-[50vh] w-[50vh] rounded-[50%] bg-[#ffffff00] border-[1px] border-[#ffffff30] absolute  opacity-[1]"></div>
        <div className="h-[40vh] w-[40vh] rounded-[50%] bg-[#ff00]  border-[1px] border-[#ffffff30] absolute opacity-[1]"></div>
        <div className="h-[30vh] w-[30vh] rounded-[50%] bg-[#00f0]  border-[1px] border-[#ffffff30] absolute opacity-[1]"></div>
      </div>

      {/*Main Home Div */}
      <div className=" w-[95vw] h-fit mx-auto mb-[5vh] p-[2.5vw] mt-[60px] relative z-10 flex min-[1250px]:flex-row flex-col justify-center items-center">
        <div className=" pb-[5vh] h-fit min-[1250px]:w-3/6 w-[100%] relative min-[1250px]:-translate-y-[120px] -translate-y-0">
          <img
            src={wave}
            className="w-[200px] h-[30px] absolute left-[120px] top-[80px] min-[640px]:top-[100px] min-[640px]:left-[300px]"
          ></img>
          <motion.h1
            initial={{ opacity: 0, y: "75" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeIn", delay: 0 }}
            className=" text-[1.5rem] text-[#fff] font-[MainFont]"
          >
            I'm
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: "75" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeIn", delay: 0.75 }}
            className=" text-[1.8rem] sm:text-[2.8rem] min-[1270px]:text-[3rem] font-bold text-[#fff] mb-4 font-[MainFont]"
          >
            <span className="text-yellow">Guggilla</span> Venkata Manohar
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: "75" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeIn", delay: 1.5 }}
          >
            <DesignationReleave
              initial={{ opacity: 0, y: "75" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeIn", delay: 1.5 }}
            ></DesignationReleave>
            <hr className="w-[150px] border-t-[3px] mb-[10px] text-yellow" />
          </motion.div>

          <div>
            <motion.p
              initial={{ opacity: 0, y: "75" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeIn", delay: 2.25 }}
              className="my-5 text-[#fff] text-[0.85rem] w-fit max-w-[530px]"
              style={{ fontFamily: "Manrope" }}
            >
              Enthusiastic Full Stack Developer with 2.7 years of experience
              skilled in end-to-end web application development. Proficient in
              both Frontend and Backend Technologies, with expertise in React
              JS, JavaScript, HTML, CSS, Bootstrap, Tailwind CSS, ES6,
              Typescript, Redux, Git, Java, Springboot. Experienced in creating
              responsive and user-centric interfaces while ensuring seamless
              integration with robust server-side logic. Committed to delivering
              high-quality software solutions with a strong understanding of
              software architecture and development best practices.
            </motion.p>
            <div className="flex flex-row w-fit justify-start items-center h-fit gap-5">
              <Link to="contact" smooth="true" className="w-[150px] h-[45px]">
                <motion.button
                  initial={{ opacity: 0, y: "75" }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeIn", delay: 3 }}
                  className="w-[150px] h-[45px] rounded-[50px]  text-textcolor text-sm mr-5 px-5 border border-[1px] border-white  flex flex-row items-center justify-around duration-300 bg-yellow hover:bg-[#ffffff00]"
                >
                  Hire Me
                  <FiThumbsUp></FiThumbsUp>
                </motion.button>
              </Link>
              <motion.a
                initial={{ opacity: 0, y: "75" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeIn", delay: 3 }}
                className="w-[150px] h-[45px] rounded-[50px]  text-textcolor text-sm mr-5  px-8 py-3 border border-[1px] border-white  flex flex-row items-center justify-around duration-300 hover:bg-yellow"
                href="https://drive.google.com/file/d/13I6CB6iD15svbfrx6h1n6rysixo-Yf92/view"
                target="_blank"
                onClick={DownHandle}
              >
                Resume
                <AiOutlineDownload></AiOutlineDownload>
              </motion.a>
            </div>
          </div>
        </div>
        <div className=" h-fit w-fit realtive z-10 flex justify-center items-center">
          {/* //Big Concentric Circles */}
          <div className="min-[750px]:h-[605px]  min-[750px]:w-[605px] w-[385px] h-[385px]  z-20 min-[750px]:top-[-5%] min-[750px]:right-[2%] flex justify-center items-center relative overflow-hidden">
            <div className="min-[750px]:h-[605px] min-[750px]:w-[605px] w-[385px] h-[385px]  rounded-[50%] bg-[#ffffff00] border-[1px] border-[#fffffff0]  absolute  opacity-[1]"></div>
            <div
              id="bigCircle"
              className="min-[750px]:h-[558px] min-[750px]:w-[558px] w-[320px] h-[320px]  rounded-[50%] bg-[#ff000000]  border-[1px] border-[#fffffffa] absolute opacity-[1] z-10"
            >
              {/* first small circle */}
              <a
                href="https://discord.gg/ktg8PGt8"
                target="_blank"
                className="z-[10] cursor-pointer h-[35px] w-[35px] rounded-[50%] bg-yellow  border-[1px] border-[#ffffff75] absolute top-[5%] min-[750px]:left-[18.5%] left-[15%] flex justify-center items-center"
              >
                <BiLogoDiscordAlt className="text-[#fff]"></BiLogoDiscordAlt>
                <div className="h-[35px] z-10 w-[35px] rounded-[50%] bg-[#fff0]  border-[1px] border-[#ffffff75] absolute opacity-[1] absolute  animate-ping scale-50"></div>
              </a>

              {/* second small circle */}
              <a
                href="https://github.com/Manu-ESD"
                target="_blank"
                className="h-[35px] w-[35px] rounded-[50%] bg-yellow  border-[1px] border-[#ffffff75] absolute top-[25%] min-[750px]:left-[1.5%] left-[-1%] flex justify-center items-center"
              >
                <BsGithub className="text-[#fff]"></BsGithub>
                <div className="h-[35px] w-[35px] rounded-[50%] bg-[#fff0]  border-[1px] border-[#ffffff75] absolute opacity-[1] absolute animate-ping scale-50"></div>
              </a>
              {/* third small circle  */}
              <a
                href="https://www.linkedin.com/in/venkata-manohar-g-a76213292"
                target="_blank"
                className="h-[35px] w-[35px] rounded-[50%] bg-yellow  border-[1px] border-[#ffffff75] absolute top-[50%] min-[750px]:left-[-3.5%] left-[-5%] relative flex justify-center items-center"
              >
                <BiLogoLinkedinSquare className="text-[#fff]"></BiLogoLinkedinSquare>
                <div className="h-[35px] w-[35px] rounded-[50%] bg-[#fff0]  border-[1px] border-[#ffffff75] absolute opacity-[1] absolute animate-ping scale-50"></div>
              </a>
            </div>
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeIn", delay: 1 }}
              src={ProfileImage}
              className=" min-[750px]:h-[546px] h-[260px] absolute rounded-[50%] z-20 opacity-100"
              style={
                {
                  // border: "2px solid red",
                  // width: "fit-content",
                  // backgroundColor: "#fff0",
                  // borderBottomRightRadius: "10rem",
                }
              }
            ></motion.img>
            <div className="min-[750px]:h-[516px] min-[750px]:w-[516px]  w-[260px] h-[260px]  rounded-[50%] bg-[#00f0]  border-[1px]  border-[#ffffffe6] absolute opacity-[1]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
