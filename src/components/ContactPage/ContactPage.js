import React from "react";
import ContactForm from "./ContactForm/ContactForm";
import classes from "./ContactPage.css";
import Title from "../Title/Title";
import { Row, Col, Container } from "reactstrap";

const ContactPage = () => {
  return (
    <Container fluid={true} className={classes.ContactPage}>
      <Row>
        <Col className={classes.ContactPage_Wrapper}>
          <Title>Contact</Title>
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
