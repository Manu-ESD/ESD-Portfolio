import React from "react";
import styled from "styled-components";

const sICon = (SkillIcon) => styled(SkillIcon)`
  color: #fff;
  width: 40%;
  height: 40%;
`;

const SkillCard = ({ SkillIcon, skillName }) => {
  const StyledICON = sICon(SkillIcon);

  return (
    <div>
      <div className="skillcard h-[100px] w-[100px] border-[1px] rounded-md bg-[#111117] border-[#0c0c10] flex justify-center items-center relative overflow-hidden hover:scale-105 z-50 duration-500">
        <StyledICON></StyledICON>
        <div className="CCircles h-[10vh] w-[10vh]  flex justify-center items-center absolute top-[-5vh] sm:top-[-25%] left-[-5vh] sm:left-[-25px]">
          <div className="h-[6vh] w-[6vh] rounded-[50%] bg-[#ffffff00] border-[1px] border-[#ffffff30] absolute  opacity-[1]"></div>
          <div className="h-[5vh] w-[5vh] rounded-[50%] bg-[#ff00]  border-[1px] border-[#ffffff30] absolute opacity-[1]"></div>
          <div className="h-[4vh] w-[4vh] rounded-[50%] bg-[#00f0]  border-[1px] border-[#ffffff30] absolute opacity-[1]"></div>
        </div>
      </div>
      <p
        className="text-[0.75rem] text-center text-[#fff] mt-1 font-thin"
        style={{ fontFamily: "Manrope" }}
      >
        {skillName}
      </p>
    </div>
  );
};

export default SkillCard;
