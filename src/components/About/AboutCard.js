import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kuraba Satheesh</span> from{" "}
            <span className="purple">Anantapur, Andhra Pradesh, India.</span>
            <br />
            I am currently pursuing my Bachelor of Technology in Computer Science and Engineering at Rajiv Gandhi University of Knowledge Technologies.
            <br />
            I am passionate about Data Science, Machine Learning, and Artificial Intelligence,
            and I love building intelligent systems that solve real-world problems.
            <br />
            I have experience working with tools and frameworks like Python, FastAPI, React, TensorFlow, Scikit-learn, and Power BI.
            <br />
            <br />
            Apart from coding, some other activities that I enjoy include:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Continuous Learning
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code with purpose, learn with passion, and build for impact!"
          </p>
          <footer className="blockquote-footer">Kuraba Satheesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
