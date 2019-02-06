import React from "react";
import ContactForm from "./ContactForm/ContactForm";
import classes from "./ContactPage.module.css";
import Title from "../Title/Title";
import { Container } from "reactstrap";

const ContactPage = () => {
  return (
    <Container fluid={true}>
      <div className={classes.ContactPage}>
        <div className={classes.ContactPage_Wrapper}>
          <Title>Contact</Title>
          <ContactForm />
        </div>
      </div>
    </Container>
  );
};

export default ContactPage;
