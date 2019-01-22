import React from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import classes from "./Comment.css";

const Comment = props => {
  return (
    <Card className={classes.CommentBox}>
      <div className={classes.UserImage} />
      <CardBody className={classes.CommentBody}>
        <CardTitle>{props.author}</CardTitle>
        <CardSubtitle>Account status: Verified</CardSubtitle>
        <CardText>{props.children}</CardText>
      </CardBody>
    </Card>
  );
};

export default Comment;
