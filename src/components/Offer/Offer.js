import React, { Component } from "react";
import OfferDescription from "./OfferDescription/OfferDescription";
import UserWidget from "./UserWidget/UserWidget";
import { Container, Col, Row } from "reactstrap";
import Comments from "../Comments/Comments";
import classes from "./Offer.css";

class Offer extends Component {
  render() {
    return (
      <Container className={classes.Offer_Wrapper}>
        <Row>
          <Col md="8">
            <OfferDescription />
            <Comments />
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
