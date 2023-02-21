import React from "react";
import Aboutpage from "../Components/Aboutpage";
import Futter from "../Components/Futter";
import Homepage from "../Components/Homepage";
import Projects from "../Components/Projects";
import Right from "../Components/Right";
import Skills from "../Components/Skills";

const Landingpag = () => {
  return (
    <div>
      <Homepage />
      <Aboutpage />
      <Skills />
      <Projects />
      <Futter />
      <Right/>
    </div>
  );
};

export default Landingpag;
