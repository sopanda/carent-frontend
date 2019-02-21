import React, { PureComponent, Fragment } from "react";
import classes from "./Toolbar.module.css";
import { connect } from "react-redux";
import { logout } from "../../../actions/user.actions";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";
import { NavLink as navLink } from "react-router-dom";
import { withRouter } from "react-router";

class Toolbar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    const { onLogOut } = this.props;

    let navbarToggler = (
      <Fragment>
        <NavbarToggler className={classes.IconToggle} onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className={classes.List + " ml-auto"} navbar>
            <NavItem>
              <NavLink
                tag={navLink}
                to="/login"
                exact
                className={classes.Link}
                onClick={onLogOut}
              >
                Logout
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Fragment>
    );

    return (
      <div className={classes.Toolbar}>
        <Container>
          <Navbar dark expand="md" className={classes.Navbar}>
            <NavbarBrand tag={navLink} exact to="/" className={classes.Brand}>
              Carent
            </NavbarBrand>
            <NavLink
              tag={navLink}
              to="/dashboard"
              exact
              className={classes.DashboardLink}
            >
              Dashboard
            </NavLink>
            {navbarToggler}
          </Navbar>
        </Container>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogOut: () => dispatch(logout())
  };
};

const mapStateToProps = state => {
  return {
    currentUser: state.user.profile
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Toolbar));
