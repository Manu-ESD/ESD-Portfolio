import React from "react";
import Nav from "./Nav";
import Home from "./Home";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";

const Spage = () => {
  return (
    <>
      <div className="mx-auto">
        <Home></Home>
        <Nav></Nav>
        <Experience></Experience>
        <Projects></Projects>
        <Contact></Contact>
      </div>
    </>
  );
};

export default Spage;
