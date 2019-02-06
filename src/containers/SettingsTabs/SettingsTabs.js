import React, { Component } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";
import classes from "./SettingsTabs.module.css";
import "./SettingsTabs.css";

class SettingsTabs extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <Container>
        <Row>
          <Col md="2">
            <Nav tabs vertical className={classes.Nav}>
              <NavItem>
                <NavLink
                  className={
                    classnames({ active: this.state.activeTab === "1" }) +
                    classes.NavLink
                  }
                  onClick={() => {
                    this.toggle("1");
                  }}
                >
                  Orders
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={
                    classnames({ active: this.state.activeTab === "2" }) +
                    classes.NavLink
                  }
                  onClick={() => {
                    this.toggle("2");
                  }}
                >
                  Cars
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={
                    classnames({ active: this.state.activeTab === "3" }) +
                    classes.NavLink
                  }
                  onClick={() => {
                    this.toggle("3");
                  }}
                >
                  Verify account
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md="10">
            <TabContent
              activeTab={this.state.activeTab}
              className={classes.Tab_Content}
            >
              <TabPane tabId="1">Hello 1</TabPane>
              <TabPane tabId="2">Hello 2</TabPane>
              <TabPane tabId="3">Hello 3</TabPane>
            </TabContent>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SettingsTabs;
