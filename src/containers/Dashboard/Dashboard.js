import React, { Component } from "react";
import SettingsTabs from "./SettingsTabs/SettingsTabs";
import { Container, Row, Col } from "reactstrap";
import classes from "./Dashboard.module.css";

class Dashboard extends Component {
  render() {
    return (
      <Container>
        <div className={classes.Dashboard_Wrapper} />
        <Row>
          <Col>
            <SettingsTabs />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Dashboard;
