import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/user.actions";
import { Container, Form, FormGroup, Input } from "reactstrap";
import classes from "./LoginPage.module.css";
import MyButton from "../MyButton/MyButton";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
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
    const { username, password } = this.state;
    if (username && password) {
      let user = { username: username, password: password };
      console.log(user);
      this.props.onLogin(user);
    }
  };

  render() {
    const { username, password, submitted } = this.state;
    return (
      <Container fluid={true}>
        <div className={classes.LoginPage_Wrapper}>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Input
                type="email"
                name="username"
                placeholder="Username"
                value={username}
                onChange={this.handleChange}
                className={classes.LoginPage_Input + " form-control-lg"}
              />
              {submitted && !username && (
                <div className="help-block">Username is required</div>
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
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.authentication.loggedIn
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
