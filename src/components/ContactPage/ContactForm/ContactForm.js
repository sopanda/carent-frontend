import React, { Component } from "react";
import { Form, FormGroup, Input } from "reactstrap";
import classes from "./ContactForm.module.css";
import MyButton from "../../MyButton/MyButton";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      msg: "",
      submitted: false
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { name, email, msg } = this.state;
    return (
      <Form onSubmit={this.handleSubmit} className={classes.ContactForm}>
        <FormGroup>
          <Input
            type="text"
            name="name"
            placeholder="Your name"
            value={name}
            onChange={this.handleChange}
            className={classes.ContactForm_Input}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="email"
            name="email"
            placeholder="Your email"
            value={email}
            onChange={this.handleChange}
            className={classes.ContactForm_Input}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="textarea"
            name="msg"
            placeholder="Your message"
            value={msg}
            onChange={this.handleChange}
            className={classes.ContactForm_Input}
          />
        </FormGroup>
        <div className={classes.ContactForm_Btn_Wrapper}>
          <MyButton title="Contact us" />
        </div>
      </Form>
    );
  }
}

export default ContactForm;
