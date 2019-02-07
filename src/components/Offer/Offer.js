import React, { Component } from "react";
import OfferDescription from "./OfferDescription/OfferDescription";
import UserWidget from "./UserWidget/UserWidget";
import { Container, Col, Row } from "reactstrap";
import Comments from "../Comments/Comments";
import classes from "./Offer.module.css";

class Offer extends Component {
  render() {
    return (
      <Container>
        <div className={classes.Offer_Wrapper}>
          <Row>
            <Col md="8">
              <OfferDescription />
              <Comments />
            </Col>
            <Col md="4">
              <UserWidget btnTitle="Send request" />
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

export default Offer;
