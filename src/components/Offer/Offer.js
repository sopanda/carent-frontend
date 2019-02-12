import React, { Component } from "react";
import OfferDescription from "./OfferDescription/OfferDescription";
import UserWidget from "./UserWidget/UserWidget";
import { Container, Col, Row } from "reactstrap";
import Comments from "../Comments/Comments";
import classes from "./Offer.module.css";
import { connect } from "react-redux";
import { fetchOffer } from "../../actions/offer.actions";
import Spinner from "../Spinner/Spinner";

class Offer extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.onFetchInfo(id);
  }

  shouldComponentUpdate = nextProps => {
    return (
      nextProps.offer !== this.props.offer ||
      nextProps.reviews !== this.props.reviews
    );
  };

  render() {
    const { offer, reviews, isFetchedOffer, isFetchedReviews } = this.props;
    return isFetchedOffer && isFetchedReviews ? (
      <Container>
        <div className={classes.Offer_Wrapper}>
          <Row>
            <Col md="8">
              <OfferDescription offer={offer} />
              <Comments reviews={reviews} />
            </Col>
            <Col md="4">
              <UserWidget btnTitle="Send request" owner={offer.owner} />
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
    offer: state.offer.offerInfo,
    reviews: state.offer.reviewsInfo,
    isFetchedOffer: state.offer.fetchedOffer,
    isFetchedReviews: state.offer.fetchedReviews
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchInfo: id => dispatch(fetchOffer(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Offer);
