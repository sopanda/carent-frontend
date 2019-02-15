import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Input } from "reactstrap";
import classes from "./CommentCreation.module.css";
import StarRatingComponent from "react-star-rating-component";
import MyButton from "../MyButton/MyButton";

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
            <MyButton title={"Send comment"} />
            <MyButton onClick={this.props.toggleModal} title={"Cancel"} />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default CommentCreation;
