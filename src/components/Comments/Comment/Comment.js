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
import StarRatingComponent from "react-star-rating-component";
import { NavLink } from "../../NavLink/NavLink";
import styled from "styled-components";

const CommentStar = styled(StarRatingComponent)`
  display: inline !important;
`;

const Comment = props => {
  return (
    <Card className={classes.CommentBox}>
      <Container>
        <Row>
          <Col md="3" className={classes.UserImageWrapper}>
            <img
              src={
                props.author.photo
                  ? this.props.owner.photo
                  : "https://liains.com/wp-content/uploads/sites/13/2015/07/no-image-300x300.png"
              }
              alt="User"
            />
          </Col>
          <Col md="9">
            <CardBody className={classes.CommentBody}>
              <CardTitle>
                <NavLink to={`/users/${props.author.id}`}>
                  {props.author.first_name + " " + props.author.last_name}
                </NavLink>
                <CommentStar
                  name="rating"
                  emptyStarColor="#001220"
                  starColor="#3de6af"
                  starCount={5}
                  value={props.rating}
                  editing={false}
                />
              </CardTitle>
              <CardSubtitle>Account status: </CardSubtitle>
              <CardText>{props.children}</CardText>
            </CardBody>
          </Col>
        </Row>
      </Container>
    </Card>
  );
};

export default Comment;
