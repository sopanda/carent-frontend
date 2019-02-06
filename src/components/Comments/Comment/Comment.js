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
import classes from "./Comment.css";

const Comment = props => {
  return (
    <Card className={classes.CommentBox}>
      <Container>
        <Row>
          <Col md="2" className={classes.UserImageWrapper}>
            <div className={classes.UserImage} />
          </Col>
          <Col md="10">
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
