import React, { Component, Fragment } from "react";
import UserWidget from "../Order/UserWidget/UserWidget";
import Comments from "../Comments/Comments";
import { connect } from "react-redux";
import fetchUser from "../../actions/user.actions";
import Spinner from "../Spinner/Spinner";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const Empty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const UserWidgetProfile = styled(UserWidget)`
  margin: 20px 0;
`;

class UserProfile extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.onFetchInfo(id);
  }

  /*magic*/
  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      const id = nextProps.match.params.id;
      this.props.onFetchInfo(id);
    }
  }

  render() {
    const { user, reviews, isFetchedUser, isFetchedReviews } = this.props;
    return isFetchedUser && isFetchedReviews ? (
      <Fragment>
        <Container>
          <Row>
            <Col md="8">
              {reviews.length !== 0 ? (
                <Comments reviews={reviews} />
              ) : (
                <Empty>Feedback box is empty</Empty>
              )}
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

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserProfile)
);
