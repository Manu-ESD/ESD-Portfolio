import { TypeAnimation } from "react-type-animation";

const DesignationReleave = () => {
  return (
    <TypeAnimation
      sequence={[
        "Full Stack Developer",
        1000,
        "Web Designer",
        1000,
        "Frontend Developer",
        1000,
        "ReactJS Developer",
        1000,
        "IoT Enthusiast",
        1000,
        "Tech Enthusiast",
        1000,
      ]}
      wrapper="span"
      speed={10}
      style={{
        fontSize: "1.4rem",
        display: "inline-block",
        color: "white",
        fontWeight: "bold",
        fontFamily: "serif",
      }}
      repeat={Infinity}
    />
  );
};

export default DesignationReleave;
