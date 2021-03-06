import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Comment from "./Comment/Comment";

export default class Comments extends Component {
  shouldComponentUpdate = nextProps => {
    return nextProps.reviews !== this.props.reviews;
  };
  render() {
    const { reviews } = this.props;
    let comments =
      reviews.length !== 0
        ? reviews.map(comment => {
            return (
              <Comment
                author={comment.author}
                key={comment.id}
                rating={comment.rating}
              >
                {comment.text}
              </Comment>
            );
          })
        : null;
    return (
      <Row>
        <Col>{comments}</Col>
      </Row>
    );
  }
}
