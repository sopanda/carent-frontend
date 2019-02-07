import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userActions } from "../../actions";
import MyButton from "../MyButton/MyButton";
import { Container, Form, FormGroup, Input } from "reactstrap";
import classes from "./RegisterPage.module.css";
import Title from "../Title/Title";

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        firstName: "",
        lastName: "",
        username: "",
        password: ""
      },
      submitted: false
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ submitted: true });
    const { user } = this.state;
    const { dispatch } = this.props;
    if (user.firstName && user.lastName && user.username && user.password) {
      dispatch(userActions.register(user));
    }
  };

  render() {
    const { user, submitted } = this.state;
    return (
      <Container fluid={true}>
        <div className={classes.RegisterPage}>
          <div className={classes.RegisterPage_Wrapper}>
            <Title>Registration</Title>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={user.firstName}
                  onChange={this.handleChange}
                  className={classes.RegisterPage_Input + " form-control-lg"}
                />
                {submitted && !user.firstName && (
                  <div className="help-block">First Name is required</div>
                )}
              </FormGroup>
              <FormGroup>
                <Input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={user.lastName}
                  onChange={this.handleChange}
                  className={classes.RegisterPage_Input + " form-control-lg"}
                />
                {submitted && !user.lastName && (
                  <div className="help-block">Last Name is required</div>
                )}
              </FormGroup>
              <FormGroup>
                <Input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={user.username}
                  onChange={this.handleChange}
                  className={classes.RegisterPage_Input + " form-control-lg"}
                />
                {submitted && !user.username && (
                  <div className="help-block">Username is required</div>
                )}
              </FormGroup>
              <FormGroup>
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={user.password}
                  onChange={this.handleChange}
                  className={classes.RegisterPage_Input + " form-control-lg"}
                />
                {submitted && !user.password && (
                  <div className="help-block">Password is required</div>
                )}
              </FormGroup>
              <div className={classes.RegisterPage_ButtonGroup}>
                <MyButton>Register</MyButton>
                <Link to="/login">
                  <MyButton>Cancel</MyButton>
                </Link>
              </div>
            </Form>
          </div>
        </div>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  const { registering } = state.registration;
  return {
    registering
  };
}

export default connect(mapStateToProps)(RegisterPage);
