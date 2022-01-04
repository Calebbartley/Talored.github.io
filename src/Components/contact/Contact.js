import React from "react";
import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    console.log(`Email: ${email}, Name: ${name}`);
    e.preventDefault();
  };
  return (
    <div className="contact">
      <div>
        <Card className="contact-card">
          <Card.Body>
            ffsdfkkfsdfdsdf
          </Card.Body>
        </Card>
      </div>
      <Card style={{ width: "18rem" }} className="contact-card">
        <Form className="contact-form" onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email Address :</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Message :</Form.Label>
            <Form.Control
              type="text"
              as="textarea"
              rows={3}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit Email
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default Contact;
