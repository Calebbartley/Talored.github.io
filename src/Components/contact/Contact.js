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
        <Card>
          <Card.Header></Card.Header>
        </Card>
        <Card className="contact-card">
          <Card.Body>
            fill out the form below to contact me eafttgiiujdf fgdfsdf kj fgfd fdsdf sdlkhjhf wef h fdsdajkh  fdssss ffds fdksjdhh fdsaf  kjhkja fds ljhlkhjaf  fsfasddh  fdsdfa fdfkh klu l liku lkghjh gbklujahdf 
          </Card.Body>
        </Card>
      </div>
      <Card style={{ width: "18rem" }} className="contact-card">
        <Form className="contact-form" onSubmit={handleSubmit}>
        <h3>
        Want to Book me for your next event? 
        </h3>
        <p>
        Send me a message!
        </p>
        
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
