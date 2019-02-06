import React, { Component, Fragment } from "react";
import classes from "./Toolbar.module.css";
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

class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isLoggedIn: true // if true - show dashboard | false - hide
    };
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    let navbarToggler = (
      <Fragment>
        <NavbarToggler className={classes.IconToggle} onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className={classes.List + " ml-auto"} navbar>
            <NavItem>
              <NavLink tag={navLink} to="/about" exact className={classes.Link}>
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                tag={navLink}
                to="/contact"
                exact
                className={classes.Link}
              >
                Contact
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={navLink} to="/login" exact className={classes.Link}>
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
            {this.state.isLoggedIn && (
              <NavLink
                tag={navLink}
                to="/dashboard"
                exact
                className={classes.DashboardLink}
              >
                Dashboard
              </NavLink>
            )}
            {navbarToggler}
          </Navbar>
        </Container>
      </div>
    );
  }
}

export default withRouter(Toolbar);
