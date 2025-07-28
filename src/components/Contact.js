
// export default Contact;
import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { MdOutlineEmail, MdOutlinePhone, MdOutlineMessage } from "react-icons/md";
import "./Contact.css";
import emailjs from "emailjs-com";
 import {useRef} from "react";



function Contact() {
    
const form=useRef();
    const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_bppu6eu",    // From EmailJS dashboard
      "template_lozif5t",   // From EmailJS dashboard
      form.current,
      "CgZdgjTD6baIklX6j"        // From EmailJS dashboard
    )
    .then(
      (result) => {
        alert("Message sent! 🎉");
        form.current.reset();
      },
      (error) => {
        alert("Failed to send message, please try again.");
      }
    );
  };
return (
    <Container className="mt-5" style={{ maxWidth: 900 }}>
      <div className="contact-title">
        Let’s Connect
      </div>
      <p style={{ textAlign: "center", color: "#6c6f8f" }}>
        <span className="contact-icon" style={{fontSize:"1.3rem",marginRight:8,background:"none"}}>☕</span>
        Let's discuss your next amazing project
      </p>

      {/* Contact info cards row */}
      <div style={{
        display: "flex",
        gap: "2.5rem",
        justifyContent: "center",
        margin: "2rem 0",
        flexWrap: "wrap"
      }}>
        {/* Email Card */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "#fdfdff",
            borderRadius: "1.5rem",
            boxShadow: "0 4px 24px #c7bbfa24",
            padding: "2rem 2.5rem",
            minWidth: 320,
            maxWidth: 350,
            marginBottom: "1rem",
            transition: "box-shadow 0.3s"
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 72,
              height: 72,
              borderRadius: "50%",
              marginRight: "1.5rem",
              fontSize: "2.5rem",
              color: "#fff",
              background: "linear-gradient(135deg, #647dee 30%, #000080 100%)",
              boxShadow: "0 2px 12px #33ffff",
              transition: "background 0.3s, box-shadow 0.3s"
            }}
          >
            <MdOutlineEmail />
          </div>
          <div>
            <div style={{ color: "#000080", fontWeight: 700, fontSize: "1.4rem", marginBottom: "0.2rem" }}>Email</div>
            <div style={{ color: "#33ffff", fontSize: "1.22rem", fontWeight: 600 }}>Betimuler16@gmail.com</div>
          </div>
        </div>
        {/* Phone Card */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "#fdfdff",
            borderRadius: "1.5rem",
            boxShadow: "0 4px 24px #c7bbfa24",
            padding: "2rem 2.5rem",
            minWidth: 320,
            maxWidth: 350,
            marginBottom: "1rem",
            transition: "box-shadow 0.3s"
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 72,
              height: 72,
              borderRadius: "50%",
              marginRight: "1.5rem",
              fontSize: "2.5rem",
              color: "#fff",
              background: "linear-gradient(135deg, #647dee, #000080 100%)",
              boxShadow: "0 2px 12px #33ffff",
              transition: "background 0.3s, box-shadow 0.3s"
            }}
          >
            <MdOutlinePhone />
          </div>
          <div>
            <div style={{ color: "#000080", fontWeight: 500, fontSize: "1.4rem", marginBottom: "0.2rem" }}>Phone</div>
            <div style={{ color: "#33ffff", fontSize: "1.22rem", fontWeight: 600 }}>+251955000433</div>
          </div>
        </div>
      </div>

      {/* Contact form */}
      <div className="contact-card">
        <Form className="contact-form" ref={form} onSubmit={sendEmail}>
          <Form.Group className="mb-3">
            <Form.Label>
              <MdOutlineEmail className="contact-icon" /> 
            </Form.Label>
            <Form.Control type="email" placeholder="Enter your email" name="user_email" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>
              <MdOutlinePhone className="contact-icon" /> 
            </Form.Label>
            <Form.Control type="text" placeholder="Enter your phone number" name="user_phone" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>
              <MdOutlineMessage className="contact-icon" /> 
            </Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Type your message..." name="message" />
          </Form.Group>
          <div style={{ textAlign: "center" }}>
            <Button className="mt-2" type="submit">
              ➤ Send Message
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
}



export default Contact;
