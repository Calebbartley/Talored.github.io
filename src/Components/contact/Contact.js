import emailjs from "emailjs-com";
import React from "react";

import { Button, Card, Form } from "react-bootstrap";
import "./Contact.css";

function Contact() {
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_6qlm9z9', e.target, 'user_ONxwoCFZkXGClVdKMS20G')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
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
        <Form className="contact-form" onSubmit={sendEmail}>
        <h4>
        Start you fantasy with a custom story or Book me for your next event down below
        </h4>
        <p>
        Send me a message!
        </p>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="name"
              placeholder="name"
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email Address:</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Message :</Form.Label>
            <Form.Control
              type="text"
              as="textarea"
              rows="8"

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
