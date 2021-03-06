import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/user.actions";
import { Form, FormGroup, Input } from "reactstrap";
import classes from "./LoginPage.module.css";
import MyButton from "../MyButton/MyButton";
import Spinner from "../Spinner/Spinner";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      submitted: false
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ submitted: true });
    const { email, password } = this.state;
    if (email && password) {
      let user = { auth: { email: email, password: password } };
      this.props.onLogin(user);
    }
  };

  render() {
    const { email, password, submitted, loggingIn } = this.state;
    return !loggingIn ? (
      <div className={classes.Overlay}>
        <div className={classes.LoginPage_Wrapper}>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={this.handleChange}
                className={classes.LoginPage_Input + " form-control-lg"}
              />
              {submitted && !email && (
                <div className="help-block">Email is required</div>
              )}
            </FormGroup>
            <FormGroup>
              <Input
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
                placeholder="Password"
                className={classes.LoginPage_Input + " form-control-lg"}
              />
              {submitted && !password && (
                <div className="help-block">Password is required</div>
              )}
            </FormGroup>
            <div className={classes.LoginPage_ButtonGroup}>
              <MyButton title="Submit" />
              <Link to="/register">
                <MyButton title="Register" />
              </Link>
            </div>
          </Form>
        </div>
      </div>
    ) : (
      <Spinner />
    );
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.authentication.loggedIn,
    loggingIn: state.authentication.loggingIn
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: user => dispatch(login(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
