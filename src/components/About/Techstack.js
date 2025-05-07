import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiPython, DiJava, DiGit } from "react-icons/di";
import { SiMongodb, SiTensorflow, SiScikitlearn, SiNumpy, SiPandas, SiMysql } from "react-icons/si";
import { FaBrain } from "react-icons/fa"; // For LLMs / AI-related
import { GiArtificialIntelligence } from "react-icons/gi"; // For Data Science

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython title="Python" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava title="Java" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb title="MongoDB" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow title="TensorFlow" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn title="Scikit-learn" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy title="NumPy" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas title="Pandas" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql title="MySQL" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit title="Git" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaBrain title="LLMs" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiArtificialIntelligence title="Data Science" />
      </Col>
    </Row>
  );
}

export default Techstack;
