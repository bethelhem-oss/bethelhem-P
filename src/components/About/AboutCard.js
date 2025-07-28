import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Bethelhem Molla</span>
            {" "}from <span className="Blue">Mekelle, Tigray, Ethiopia.</span>
            <br />
            I am a <strong>Software Engineer</strong> with a focus on backend, web, and AI development.<br />
            Currently, I work at <strong>Minya Art Space (USAID sponsored)</strong> where I blend technology and creativity to support community programs and empower youth.<br />
            <br />
            My expertise includes architecting dynamic web solutions, developing AI-powered applications, and optimizing databases. I’ve worked with <strong>Python, Java, C++, JavaScript, PHP, Laravel, React.js, Node.js, Flask, Vue.js</strong>, and more.
            <br />
            <br />
            I earned my <strong>BSc in Computer Science</strong> from Mekelle University. My journey in tech is built on curiosity, impact, and resilience—not just academics.
            <br />
           
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Swimming
            </li>
          </ul>

          <p className="blockquote-footer">
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Bethelhem</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
