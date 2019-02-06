import React, { Component } from "react";
import SettingsTabs from "../SettingsTabs/SettingsTabs";
import { Container, Row, Col } from "reactstrap";
import UserWidget from "../../components/Offer/UserWidget/UserWidget";
import classes from "./Dashboard.css";

class Dashboard extends Component {
  render() {
    return (
      <Container>
        <div className={classes.Dashboard_Wrapper} />
        <Row>
          <Col md="9">
            <SettingsTabs />
          </Col>
          <Col md="3">
            <UserWidget />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Dashboard;
