import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiJupyter,
  // SiGoogle,
  SiGit,
} from "react-icons/si";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack  />
        
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
        
      </Col>
       {/* <Col xs={4} md={2} className="tech-icons">
        <Si />
        
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
        
      </Col>
    </Row>
  );
}

export default Toolstack;
