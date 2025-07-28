import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import customer from "../../Assets/Projects/CUSTOMER.png";
import diseasePredict from "../../Assets/Projects/disease predict.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/AiCH.png";
import suicide from "../../Assets/Projects/suicide.png";
//  import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "#000080" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="AI-Based-Cheating-Detection-System-for-Online-Exams"
              description="Developed an AI-based proctoring system using computer vision and audio analysis to detect cheating behaviors, integrating deep learning models (CNNs, ResNet18) with a secure full-stack platform (React.js, Node.js, MongoDB, WebRTC) focused on privacy."
              ghLink="https://github.com/bethelhem-oss/AI-Based-Cheating-Detection-System-for-Online-Exams"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={customer}
              isBlog={false}
              title="Customer-Order-Management"
              description="Developed customer order management system in Java, allowing users to manage inventory, process orders."
              ghLink="https://github.com/bethelhem-oss/Customer-Order-Management-With-JAVA"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={diseasePredict}
              isBlog={false}
              title="Disease-Prediction"
              description="Developed a Python application that predicts possible diseases by analyzing symptoms provided as input using machine earning techniques."
              ghLink="https://github.com/bethelhem-oss/Disease-Prediction-using-python"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
