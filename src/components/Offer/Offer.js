import React, { Component, Fragment } from "react";
import OfferDescription from "./OfferDescription/OfferDescription";
import UserWidget from "./UserWidget/UserWidget";
import { Container, Col, Row } from "reactstrap";

class Offer extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="8">
            <OfferDescription />
          </Col>
          <Col md="4">
            <UserWidget />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Offer;
