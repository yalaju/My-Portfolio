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
            <a
              href="https://trad-express-project.vercel.app/"
              target={`_blank`}
            >
              <img src={tred} alt="" width={"90%"} height={"99%"} />
            </a>

            <div className="firstweb">
              <h1
                style={{ fontSize: "30px", color: "rgb(156 163 175)" }}
                className="pro1h1"
              >
                TradExpress_web
              </h1>
              <div style={{ paddingTop: "2%" }}>
                <a
                  href="https://github.com/yalaju/TradExpress-Project"
                  target={`_blank`}
                >
                  <button className="button">view code</button>
                </a>
              </div>
            </div>
          </div>

          <div className="proimg2">
            <a href="https://task-duty.vercel.app/" target={`_blank`}>
              <img src={task} alt="" width={"90%"} height={"100%"} />
            </a>

            <div className="firstweb">
              <h1
                style={{ fontSize: "30px", color: "rgb(156 163 175)" }}
                className="pro1h1"
              >
                TaskDuty_web
              </h1>
              <div style={{ paddingTop: "2%" }}>
                <a href="https://github.com/yalaju/TaskDuty" target={`_blank`}>
                  <button className="button">view code</button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="proimg1">
            <a
              href="https://rccg-tabernacle-of-god.vercel.app/index-2.html"
              target={`_blank`}
            >
              <img src={rccg} alt="" width={"88%"} height={"99%"} />
            </a>
            <div className="firstweb">
              <h1
                style={{ fontSize: "30px", color: "rgb(156 163 175)" }}
                className="pro1h1"
              >
                RCCG_TOG_Web
              </h1>
              <div style={{ paddingTop: "2%" }}>
                <a
                  href="https://github.com/yalaju/RCCG-TABERNACLE-OF-GOD."
                  target={`_blank`}
                >
                  <button className="button">view code</button>
                </a>
              </div>
            </div>
          </div>
          <div className="proimg2">
            <a href="https://fylo-zeta-five.vercel.app/" target={`_blank`}>
              <img src={foly} alt="" width={"88%"} height={"103%"} />
            </a>
            <div className="firstweb">
              <h1
                style={{ fontSize: "30px", color: "rgb(156 163 175)" }}
                className="pro1h1"
              >
                Fylo_Web
              </h1>
              <div style={{ paddingTop: "2%" }}>
                <a href="https://github.com/yalaju/fylo" target={`_blank`}>
                  <button className="button">view code</button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="proimg1">
            <a
              href="https://rock-paper-scissors-yalaju.vercel.app/"
              target={`_blank`}
            >
              <img src={rock} alt="" width={"88%"} height={"103%"} />
            </a>
            <div className="firstweb">
              <h1
                style={{ fontSize: "30px", color: "rgb(156 163 175)" }}
                className="pro1h1"
              >
                Rock-Paper-Scissors_Game
              </h1>
              <div style={{ paddingTop: "2%" }}>
                <a
                  href="https://github.com/yalaju/Rock-Paper-Scissors-"
                  target={`_blank`}
                >
                  <button className="button">view code</button>
                </a>
              </div>
            </div>
          </div>
          <div className="proimg2">
            <a
              href="https://random-advice-generator-hazel.vercel.app/"
              target={`_blank`}
            >
              <img src={advice} alt="" width={"88%"} height={"103%"} />
            </a>
            <div className="firstweb">
              <h1
                style={{ fontSize: "30px", color: "rgb(156 163 175)" }}
                className="pro1h1"
              >
                Advice_Generator
              </h1>
              <div style={{ paddingTop: "2%" }}>
                <a
                  href="https://github.com/yalaju/Random-Advice-Generator"
                  target={`_blank`}
                >
                  <button className="button">view code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
