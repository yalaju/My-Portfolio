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
          I am a Frontend Web Developer who loves making experiences that
          sticks. My passion for learning and my ability to learn quickly
          enabled me gain mastery over a wide range of design concepts and
          technologies. My drive is simple:Build good websites that solves a
          problem. Also, build websites that people would love to use and
          experience again. <br /> <br />
          I take pride in my work, and only deliver professional, clean,
          polished products.
          {/* Currently a student of the University of Lagos to
          gain my Bachelors Degree in Applied Physics and Electronics, */}
          I learnt
          frontend web development in Tech Studio Academy for three(3) months
          where I gained my first certificate in web development. <br />{" "}
          <br />
          Today, I have more than one(1) year of experience in I.T and Web
          development. I pivoted into I.T because it was fascinating to see how
          tech products could help individuals and organizations save time, save
          money and expedite processes. It's simply magical!
        </p>
      </div>

      <div className="aboutimg"></div>
    </div>
  );
};

export default Aboutpage;
