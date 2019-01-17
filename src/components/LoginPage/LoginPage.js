import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userActions } from "../../actions";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Input,
  Button,
  Row
} from "reactstrap";
import classes from "./LoginPage.css";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    // reset login status
    this.props.dispatch(userActions.logout());
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
    const { dispatch } = this.props;
    if (username && password) {
      dispatch(userActions.login(username, password));
    }
  };

  render() {
    const { username, password, submitted } = this.state;
    return (
      <Container fluid={true} className={classes.LoginPage}>
        <Row className="h-100 justify-content-center align-items-center">
          <Col className={classes.LoginPage_Wrapper}>
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
                <Button>Submit</Button>
                <Link to="/register">
                  <Button>Register</Button>
                </Link>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  return {
    loggingIn
  };
}

export default connect(mapStateToProps)(LoginPage);
