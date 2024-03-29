import React from "react";
import "../styles/Skills.css";
import html from "../images/html 22.webp";
import js from "../images/javascript 22.webp";
import react from "../images/react 22.webp";
import github from '../images/github-11.webp'
import git from '../images/git-11.webp'
import boot from '../images/bootstrap 11.webp'
import word from '../images/wordpress-11.webp'
import css from "../images/css222.webp";
import rest2 from "../images/django_img_2.png"
import phy from "../images/python_img_2.jpg"

const Skills = () => {
  return (
    <div className="skills01">
      <div className="skills0">
        <div id="skills" className="skillsbody" style={{}}>
          <h1
            style={{
              color: "white",
              fontFamily: "-moz-initial",
              textAlign: "start",
            }}
          >
            SKILLS
          </h1>
          <div className="skillsline"></div>
          <h2
            style={{
              color: "rgb(156 163 175)",
              fontFamily: "-moz-initial",
              textAlign: "start",
              // padding: "5% 0%",
            }}
          >
            What I Can Do
          </h2>

          <div className="skillsflex">
            <div className="skillsflex1">
              <img src={html} alt="" height={"70%"} />
              <p>HTML</p>
            </div>

            <div className="skillsflex2">
              <img src={css} alt="" height={"70%"} />
              <p>CSS</p>
            </div>

            <div className="skillsflex3">
              <img src={js} alt="" height={"70%"} />
              <p>Javascript</p>
            </div>

            <div className="skillsflex4">
              <img src={react} alt="" height={"70%"} />
              <p>React JS</p>
            </div>
          </div>

          <div className="skillsflex">
            <div className="skillsflex1" style={{ paddingTop: "20px" }}>
              <img src={boot} alt="" height={"70%"} />
              <p>bootstrap</p>
            </div>

            <div className="skillsflex2">
              <img src={github} alt="" height={"70%"} />
              <p>github</p>
            </div>

            <div className="skillsflex3">
              <img src={git} alt="" height={"70%"} />
              <p>git</p>
            </div>

            <div className="skillsflex4">
              <img src={word} alt="" height={"70%"} />
              <p>Wordpress</p>
            </div>
          </div>

          <div className="skillsflex">
            <div
              className="skillsflex2"
              style={{
                display: "flex",
                gap: "-10%",
                paddingBottom: "40px",
                paddingTop: "20px",
              }}
            >
              <img
                src={rest2}
                alt=""
                height={"100%"}
                width={"40%"}
                style={{ borderRadius: "40px" }}
              />
              <div style={{ paddingTop: "`0px" }}>
                <p>Django</p>
              </div>
            </div>

            {/* <div className="skillsflex2">
          <img src={github} alt="" height={"70%"} />
          <p>github</p>
        </div>*/}

            {/* <div className="skillsflex3">
          <img src={phy} alt="" height={"70%"} />
          <p>git</p>
        </div> */}

            <div className="skillsflex3">
              <img
                src={phy}
                alt=""
                height={"70%"}
                style={{ borderRadius: "20px" }}
              />
              <div style={{ paddingTop: "8px", paddingLeft: "20px" }}>
                <p>Python</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
