import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
  Container
} from "reactstrap";
import classes from "./Comment.module.css";

const Comment = props => {
  return (
    <Card className={classes.CommentBox}>
      <Container>
        <Row>
          <Col md="3" className={classes.UserImageWrapper}>
            <div className={classes.UserImage} />
          </Col>
          <Col md="9">
            <CardBody className={classes.CommentBody}>
              <CardTitle>{props.author}</CardTitle>
              <CardSubtitle>Account status: Verified</CardSubtitle>
              <CardText>{props.children}</CardText>
            </CardBody>
          </Col>
        </Row>
      </Container>
    </Card>
  );
};

export default Comment;
