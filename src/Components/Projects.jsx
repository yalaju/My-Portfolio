import React from "react";
import "../styles/Project.css";
import tred from "../images/tradex-img22.png";
import task from "../images/Task-img22.png";
import rccg from "../images/Rccg-img.png";
import foly from "../images/foly-img.png";
import rock from "../images/rock-img.png";
import advice from "../images/advice=-mg.png";

const Projects = () => {
  return (
    <div id="project">
      <div className="projectbody">
        <h1
          style={{
            color: "white",
            fontFamily: "-moz-initial",
            textAlign: "start",
          }}
        >
          PROJECTS
        </h1>
        <div className="projectline"></div>
        <h2
          style={{
            color: "rgb(156 163 175)",
            fontFamily: "-moz-initial",
            textAlign: "start",
            // padding: "2% 0% %",
            padding: "2% 0% -30% 0%",
          }}
        >
          What I've Built
        </h2>
        <div className="project">
          <div className="proimg1">
            <a href="https://trad-express-project.vercel.app/">
              <img src={tred} alt="" width={"90%"} height={"109%"} />
            </a>
          </div>

          <div className="proimg2">
            <img src={task} alt="" width={"90%"} height={"113%"} />
          </div>
        </div>

        <div className="project">
          <div className="proimg1">
            <a href="https://rccg-tabernacle-of-god.vercel.app/index-2.html">
              <img src={rccg} alt="" width={"88%"} height={"109%"} />
            </a>
          </div>
          <div className="proimg2">
            <a href="https://fylo-zeta-five.vercel.app/">
              <img src={foly} alt="" width={"88%"} height={"113%"} />
            </a>
          </div>
        </div>

        <div className="project">
          <div className="proimg1">
            <a href="https://rock-paper-scissors-yalaju.vercel.app/">
              <img src={rock} alt="" width={"88%"} height={"113%"} />
            </a>
          </div>
          <div className="proimg2">
            <a href="https://random-advice-generator-hazel.vercel.app/">
              <img src={advice} alt="" width={"88%"} height={"113%"} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
