import React, { Component, Fragment } from "react";
import UserWidget from "../Offer/UserWidget/UserWidget";
import Comments from "../Comments/Comments";
import { connect } from "react-redux";
import fetchUser from "../../actions/user.actions";
import Spinner from "../Spinner/Spinner";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";

const UserWidgetProfile = styled(UserWidget)`
  margin: 20px 0;
`;

class UserProfile extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.onFetchInfo(id);
  }

  shouldComponentUpdate = nextProps => {
    return (
      nextProps.user !== this.props.user ||
      nextProps.reviews !== this.props.reviews
    );
  };

  render() {
    const { user, reviews, isFetchedUser, isFetchedReviews } = this.props;
    return isFetchedUser && isFetchedReviews ? (
      <Fragment>
        <Container>
          <Row>
            <Col md="8">
              <Comments reviews={reviews} />
            </Col>
            <Col md="4">
              <UserWidgetProfile owner={user} />
            </Col>
          </Row>
        </Container>
      </Fragment>
    ) : (
      <Spinner />
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.userInfo,
    reviews: state.user.userReviews,
    isFetchedUser: state.user.fetchedUser,
    isFetchedReviews: state.user.fetchedUserReviews
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchInfo: id => dispatch(fetchUser(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
