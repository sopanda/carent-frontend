import React, { Component, Fragment } from "react";
import classes from "./Toolbar.css";
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
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      home: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

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
          </Nav>
        </Collapse>
      </Fragment>
    );

    return (
      <Container fluid={true} className={classes.Toolbar}>
        <Navbar dark expand="md" className={classes.Navbar}>
          <NavbarBrand tag={navLink} exact to="/" className={classes.Brand}>
            Carent
          </NavbarBrand>
          {navbarToggler}
        </Navbar>
      </Container>
    );
  }
}

export default withRouter(Toolbar);
