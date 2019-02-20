import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import MyButton from "../MyButton/MyButton";
import { Form, FormGroup, Input } from "reactstrap";
import classes from "./RegisterPage.module.css";
import Title from "../Title/Title";
import { register } from "../../actions/user.actions";

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        first_name: "",
        last_name: "",
        email: "",
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
    if (
      user.first_name &&
      user.last_name &&
      user.username &&
      user.password &&
      user.email
    ) {
      this.props.onRegister(user);
    }
  };

  render() {
    const { user, submitted } = this.state;
    return (
      <div className={classes.Overlay}>
        <div className={classes.RegisterPage_Wrapper}>
          <Title>Registration</Title>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Input
                type="text"
                name="first_name"
                placeholder="First name"
                value={user.firstName}
                onChange={this.handleChange}
                className={classes.RegisterPage_Input + " form-control-lg"}
              />
              {submitted && !user.first_name && (
                <div className="help-block">First Name is required</div>
              )}
            </FormGroup>
            <FormGroup>
              <Input
                type="text"
                name="last_name"
                placeholder="Last name"
                value={user.lastName}
                onChange={this.handleChange}
                className={classes.RegisterPage_Input + " form-control-lg"}
              />
              {submitted && !user.last_name && (
                <div className="help-block">Last Name is required</div>
              )}
            </FormGroup>
            <FormGroup>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={user.email}
                onChange={this.handleChange}
                className={classes.RegisterPage_Input + " form-control-lg"}
              />
              {submitted && !user.email && (
                <div className="help-block">Email is required</div>
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
              <MyButton title="Register" />
              <Link to="/login">
                <MyButton title="Cancel" />
              </Link>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    registering: state.registration.registering,
    registered: state.registration.registered
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onRegister: user => dispatch(register(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterPage);
