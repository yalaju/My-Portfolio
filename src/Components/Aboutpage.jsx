import React from "react";
import mypic from "../images/Mydarkimg.jpeg";
import laptop from "../images/NewLaptop.jpeg";
import "../styles/About.css";

const Aboutpage = () => {
  return (
    <div className="about-me" id="about">
      <div>
        <h1
          style={{
            color: "white",
            fontFamily: "-moz-initial",
            textAlign: "start",
          }}
        >
          ABOUT
        </h1>
        <div className="line"></div>
        <h1
          style={{
            color: "rgb(156 163 175)",
            fontFamily: "-moz-initial",
            textAlign: "start",
            padding: "2% 0%",
          }}
        >
          Who I Am
        </h1>
        <p
          className="about-cont"
          style={{ color: "rgb(156 163 175)", fontFamily: "-moz-initial" }}
        >
          As a Full-Stack Developer, my goal is to create websites that provide
          exceptional experiences. I'm constantly learning and enjoy mastering
          new design concepts and technologies. What drives me is building
          websites that solve problems and that people enjoy using repeatedly.{" "}
          <br />
          <br />
          When it comes to my work, I take great pride in delivering polished,
          professional, and high-quality products. I began my journey as a
          Full-Stack Developer at Tech Studio Academy, where I completed a
          five-month program and received my first certificate in web
          development.
          <br />
          <br />
          With over a year of experience in I.T and Web development, I'm
          passionate about the impact technology can have on individuals and
          organizations. I find it fascinating how tech products can save time,
          money, and streamline processes. It's truly magical!
        </p>
      </div>

      <div className="aboutimg"></div>
    </div>
  );
};

export default Aboutpage;
