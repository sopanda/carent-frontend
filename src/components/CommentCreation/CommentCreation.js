import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Input } from "reactstrap";
import { connect } from "react-redux";
import classes from "./CommentCreation.module.css";
import StarRatingComponent from "react-star-rating-component";
import MyButton from "../MyButton/MyButton";
import { addCarComment, addRenterComment } from "../../actions/comment.actions";

const Stars = styled(StarRatingComponent)`
  font-size: 26px;
`;

class CommentCreation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
      rating: 0
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onStarClick = nextValue => {
    this.setState({ rating: nextValue });
  };

  onCommentSend = () => {
    const {
      data,
      type,
      onRenterComment,
      onCarComment,
      toggleModal
    } = this.props;
    const { rating, comment } = this.state;
    let preparedComment = { rating: rating, text: comment };
    if (type === "orders") {
      onCarComment(data.id, preparedComment);
      toggleModal();
    }
    if (type === "loans") {
      onRenterComment(data.renter.id, preparedComment);
      toggleModal();
    }
  };

  render() {
    const { rating } = this.state;
    return (
      <Fragment>
        <div className={classes.CommentCreation}>
          <Stars
            name="rate1"
            starCount={5}
            emptyStarColor="#001220"
            starColor="#3de6af"
            value={rating}
            onStarClick={this.onStarClick}
          />
          <Input
            type="textarea"
            name="comment"
            placeholder="Your comment"
            value={this.state.comment}
            onChange={this.handleChange}
            className={classes.Comment_Input}
          />
          <div className={classes.Buttons}>
            <MyButton
              title={"Send comment"}
              onClick={() => this.onCommentSend()}
            />
            <MyButton onClick={this.props.toggleModal} title={"Cancel"} />
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCarComment: (car_id, comment) => dispatch(addCarComment(car_id, comment)),
    onRenterComment: (renter_id, comment) =>
      dispatch(addRenterComment(renter_id, comment))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CommentCreation);
