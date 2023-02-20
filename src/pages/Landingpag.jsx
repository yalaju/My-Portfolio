import React from "react";
import Aboutpage from "../Components/Aboutpage";
import Futter from "../Components/Futter";
import Homepage from "../Components/Homepage";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";

const Landingpag = () => {
  return (
    <div>
      <Homepage />
      <Aboutpage />
      <Skills />
      <Projects />
      <Futter/>
    </div>
  );
};

export default Landingpag;
