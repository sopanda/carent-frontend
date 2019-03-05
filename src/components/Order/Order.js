import React, { Component } from "react";
import OfferDescription from "./OrderDescription/OrderDescription";
import UserWidget from "./UserWidget/UserWidget";
import { Container, Col, Row } from "reactstrap";
import Comments from "../Comments/Comments";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchOffer } from "../../actions/offer.actions";
import Spinner from "../Spinner/Spinner";

const OfferWrapper = styled.div`
  padding: 30px 0;
`;

const WidgetWrapper = styled.div`
  @media only screen and (max-width: 767px) {
    margin-top: 20px;
    justify-content: center;
    display: flex;
  }
`;

class Order extends Component {
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
        <OfferWrapper>
          <Row>
            <Col md="8">
              <OfferDescription offer={offer} />
              <Comments reviews={reviews} />
            </Col>
            <Col md="4">
              <WidgetWrapper>
                <UserWidget
                  btnTitle="Send request"
                  owner={offer.owner}
                  carId={offer.id}
                />
              </WidgetWrapper>
            </Col>
          </Row>
        </OfferWrapper>
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
)(Order);
