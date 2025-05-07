import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/R200382.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            My journey in programming began with curiosity and quickly evolved into a deep passion for learning and building impactful solutions.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Python and Java </b>
              </i>
              and I have a strong foundation in Data Science and Artificial Intelligence.
              <br />
              <br />
              My fields of interest include developing intelligent systems using &nbsp;
              <i>
                <b className="purple">Machine Learning, Deep Learning </b> and
                creating impactful solutions in areas like{" "}
                <b className="purple">
                Data Processing and Educational Technology.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I channel my passion into building end-to-end products using frameworks like
              <b className="purple">FastAPI </b> and tools like
              <i>
                <b className="purple">
                  {" "}
                  Power BI
                </b>
              </i>
              &nbsp; for rich data visualization. I also enjoy working with libraries such as
              <i>
                <b className="purple"> TensorFlow, Scikit-learn, Pandas, and NumPy </b>
                to bring data-driven insights to life.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
          <Tilt>
          <img
              src={myImg}
              alt="avatar"
              style={{ width: "300px", borderRadius: "50%" }}
            />
          </Tilt>

          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/satheeshk50"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/KurabaSath43436"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/satheesh-kuraba/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
