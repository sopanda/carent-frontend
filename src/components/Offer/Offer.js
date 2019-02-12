import React, { Component } from "react";
import OfferDescription from "./OfferDescription/OfferDescription";
import UserWidget from "./UserWidget/UserWidget";
import { Container, Col, Row } from "reactstrap";
import Comments from "../Comments/Comments";
import classes from "./Offer.module.css";
import { connect } from "react-redux";
import { fetchOfferById } from "../../actions/offer.actions";
import Spinner from "../Spinner/Spinner";

class Offer extends Component {
  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.onFetchOfferById(id);
  }

  shouldComponentUpdate = nextProps => {
    return nextProps.offer !== this.props.offer;
  };

  render() {
    const { offer } = this.props;
    return offer ? (
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
    ) : (
      <Spinner />
    );
  }
}

const mapStateToProps = state => {
  return {
    offer: state.offer.offerInfo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchOfferById: id => dispatch(fetchOfferById(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Offer);
