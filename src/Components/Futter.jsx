import React from "react";
import "../styles/futter.css";
import futimg from "../images/futter-img-22.jpg";
import cv from "../images/resume.pdf";

const Futter = () => {
  return (
    <div className="futter01">
      <div className="futter0">
        <div id="contact">
          <div className="futterbody">
            {/* <div className="futterbody2"> */}
            <div className="inner">
              <h1
                style={{
                  color: "white",
                  fontFamily: "-moz-initial",
                  textAlign: "start",
                }}
              >
                CONTACT
              </h1>
              <div className="futterline"></div>
              <h2
                style={{
                  color: "rgb(156 163 175)",
                  fontFamily: "-moz-initial",
                  textAlign: "start",
                  // padding: "2% 0% %",
                  padding: "2% 0% -30% 0%",
                }}
              >
                Get In Touch
              </h2>

              <div className="futtemp">
                <div className="contflex1">
                  <img src={futimg} alt="" />
                  <h4
                    style={{
                      color: "rgb(156 163 175)",
                      fontFamily: "-moz-initial",
                      textAlign: "start",
                    }}
                  >
                    Iyalaju Samuel <br />
                  </h4>
                  <p
                    style={{
                      color: "rgb(156 163 175)",
                      fontFamily: "-moz-initial",
                      textAlign: "start",
                    }}
                  >
                    A Full-Stack Developer
                    <br />
                    <br />
                    I am available for freelance, part-time or full-time
                    <br /> positions. Contact me and let's talk.
                  </p>
                </div>

                {/* vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv */}

                <div className="secondflexbody">
                  <div className="secondflex">
                    <div className="contflex2">
                      <a
                        href="https://www.linkedin.com/in/samuel-yalaju-611039262/"
                        target={`_blank`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="90"
                          height="51"
                          fill="currentColor"
                          class="bi bi-linkedin"
                          viewBox="0 0 16 16"
                          color="blue"
                          style={{
                            paddingLeft: "",
                            backgroundColor: "white",
                            width: "55px",
                            height: "55px",
                            borderRadius: "50px",
                          }}
                        >
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                        </svg>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/samuel-yalaju-611039262/"
                        target={`_blank`}
                        style={{ textDecoration: "none" }}
                      >
                        <h2
                          style={{ color: "white", fontFamily: "-moz-initial" }}
                        >
                          Linkedin
                        </h2>
                      </a>
                    </div>
                    <br />
                    <div className="contflex2">
                      <a
                        href="https://github.com/yalaju"
                        target={`_blank`}
                        style={{ textDecoration: "none" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="90"
                          height="51"
                          fill="currentColor"
                          class="bi bi-github"
                          viewBox="0 0 16 16"
                          // color="white"
                          color="white"
                          style={{
                            paddingLeft: "",
                            backgroundColor: "black",
                            width: "50px",
                            height: "50px",
                            borderRadius: "25px",
                          }}
                        >
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                      </a>
                      <a
                        href="https://github.com/yalaju"
                        target={`_blank`}
                        style={{ textDecoration: "none" }}
                      >
                        <h2
                          style={{ color: "white", fontFamily: "-moz-initial" }}
                        >
                          Github
                        </h2>
                      </a>
                      -
                    </div>
                    <br />
                    <div className="contflex2">
                      <a
                        href="mailto:yalajusamuel8@gmail.com"
                        target={`_blank`}
                        style={{ textDecoration: "none" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="90"
                          height="51"
                          fill="currentColor"
                          class="bi bi-envelope"
                          viewBox="0 0 16 16"
                          color="red"
                          // style={{ paddingTop: "11" }}
                          style={{
                            paddingLeft: "",
                            backgroundColor: "white",
                            width: "50px",
                            height: "50px",
                            borderRadius: "50px",
                            paddingTop: "0px",
                          }}
                        >
                          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                        </svg>
                      </a>
                      <a
                        href="mailto:yalajusamuel8@gmail.com"
                        target={`_blank`}
                        style={{ textDecoration: "none" }}
                      >
                        <h2
                          style={{ color: "white", fontFamily: "-moz-initial" }}
                        >
                          Send_a_mail
                        </h2>
                      </a>
                    </div>

                    <br />

                    <div className="contflex2">
                      <a href="https://wa.me/2348125338713" target={`_blank`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="90"
                          height="51"
                          fill="currentColor"
                          class="bi bi-whatsapp"
                          viewBox="0 0 16 16"
                          color="white"
                          // style={{ paddingTop: "11" }}
                          style={{
                            paddingLeft: "",
                            backgroundColor: "green",
                            width: "50px",
                            height: "50px",
                            borderRadius: "25px",
                          }}
                        >
                          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                        </svg>
                      </a>
                      <a
                        href="https://wa.me/2348125338713 "
                        target={`_blank`}
                        style={{ textDecoration: "none" }}
                      >
                        <h2
                          style={{ color: "white", fontFamily: "-moz-initial" }}
                        >
                          Message_Me
                        </h2>
                      </a>
                    </div>

                    <br />

                    <div className="contflex2">
                      <a href={cv} target={`_blank`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="90"
                          height="51"
                          fill="currentColor"
                          class="bi bi-person-lines-fill"
                          viewBox="0 0 16 16"
                          color="white"
                          // style={{ paddingTop: "11" }}
                          style={{
                            paddingLeft: "",
                            backgroundColor: "orange",
                            width: "50px",
                            height: "50px",
                            borderRadius: "25px",
                          }}
                        >
                          <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
                        </svg>
                      </a>
                      <a
                        href={cv}
                        style={{ textDecoration: "none" }}
                        target={`_blank`}
                      >
                        <h2
                          style={{ color: "white", fontFamily: "-moz-initial" }}
                        >
                          Resume
                        </h2>
                      </a>
                    </div>

                    <br />

                    <div className="contflex2">
                      <a href="tel:+2348125338713">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="90"
                          height="51"
                          fill="currentColor"
                          class="bi bi-telephone-outbound-fill"
                          viewBox="0 0 16 16"
                          color="rgb(40, 136, 31)"
                          // style={{ paddingTop: "11" }}
                          style={{
                            paddingLeft: "",
                            backgroundColor: "white",
                            width: "50px",
                            height: "50px",
                            borderRadius: "50px",
                          }}
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z"
                          />
                        </svg>
                      </a>
                      <a
                        href="tel:+2348125338713"
                        style={{ textDecoration: "none" }}
                      >
                        <h2
                          style={{ color: "white", fontFamily: "-moz-initial" }}
                        >
                          Call_Me
                        </h2>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Futter;
