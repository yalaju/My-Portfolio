import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "../styles/Navbar1.css";

const Navbar1 = () => {
  // const style = {
  //   backgroundColor: "black",
  // };

  return (
    <div className="navbodyall">
      <Navbar
        className="navbar1"
        expand="lg"
      >
        <Container >
          <Navbar.Brand href="#home">
            {/* <a> */}
              {/* <img src={logo} alt="" /> */}
              <h1
                className="navlogo"
                style={{
                  color: "red",
                }}
              >
                {" "}
                <b> [Miicode] </b>{" "}
              </h1>
            {/* </a> */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="me-auto" >
              <a href="#home" className="nav1">
                {" "}
                HOME{" "}
              </a>

              <a href="#about" className="nav2"> ABOUT </a>

              <a href="#skills" className="nav3">
                {" "}
                SKILLS{" "}
              </a>
              <a href="#project" className="nav4">
                {" "}
                PROJECTS{" "}
              </a>

              <a href="#contact" className="nav5">
                {" "}
                CONTACT{" "}
              </a> 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbar1;
