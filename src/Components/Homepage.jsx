import React from "react";
import "../styles/Homepage.css";
import cv from "../images/SAM'S RESUME 1.pdf";

const Homepage = () => {
  return (
    <div className="home01 ">
      <div className="home0 ">
        <div className="homepag" id="home">
          <div className="homebody">
            <h3
              style={{
                // color: "rgb(255 87 87)"
                color: "red",
              }}
            >
              {" "}
              <b>Hello I'm</b>{" "}
            </h3>
            <h1
              className="myname"
              style={{ color: " white", fontFamily: "-moz-initial" }}
            >
              {" "}
              <b>Samuel Iyalaju</b>{" "}
            </h1>
            <h1
              style={{
                color: "rgb(136 146 176",
                fontFamily: "-moz-initial",
                // width: "80%",
              }}
            >
              {" "}
              <b>A Full-Stack Developer.</b>{" "}
            </h1>
            <p style={{ color: "rgb(136 146 176)", width: "100%" }}>
              I'm a Full-Stack developer specializing in building
              {/* (and occasionally
          designing) */}
              exceptional digital experiences. Currently, I'm focused on
              building responsive web applications.
            </p>
            <a href="#project" style={{ textDecoration: "none" }}>
              <p className="view-project"> --&gt;View_Project&lt;--</p>
            </a>
          </div>

          <div className="homeimgflex"></div>

          <div className="fixedbody">
            <div class="email-icon">
              <a
                href="https://www.linkedin.com/in/samuel-yalaju-611039262/"
                target={`_blank`}
              >
                {/* <i class="fa-envelope">
            <i class="bi-linkedin">samuel</i>
          </i> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  // fill="currentColor"
                  // class="bi bi-linkedin"
                  viewBox="0 0 16 16"
                  style={{ color: "white" }}
                  href="https://www.linkedin.com/in/samuel-yalaju-611039262/"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </a>
            </div>

            <div class="mail-icon">
              <a href="https://github.com/yalaju" target={`_blank`}>
                {/* <i class="fa-envelope">
            <i class="bi-linkedin">samuel</i>
          </i> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  // fill="currentColor"
                  // class="bi bi-github"
                  viewBox="0 0 16 16"
                  style={{ color: "white" }}
                  href="https://github.com/yalaju"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
            </div>

            <div class="ail-icon">
              <a href="mailto:yalajusamuel8@gmail.com">
                {/* <i class="fa-envelope">
            <i class="bi-linkedin">samuel</i>
          </i> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  // class="bi bi-envelope-at-fill"
                  viewBox="0 0 16 16"
                  style={{ color: "white" }}
                >
                  <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z" />
                  <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z" />
                </svg>
              </a>
            </div>

            <div class="il-icon">
              <a href={cv} target={`_blank`}>
                {/* <i class="fa-envelope">
            <i class="bi-linkedin">samuel</i>
          </i> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  class="bi bi-person-lines-fill"
                  viewBox="0 0 16 16"
                  style={{ color: "white" }}
                >
                  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
