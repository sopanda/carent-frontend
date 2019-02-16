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
import styled from "styled-components";
import { Link } from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";

const CommentStar = styled(StarRatingComponent)`
  display: inline !important;
`;

const NavLink = styled(Link)`
  padding: 0 !important;
  color: #3de6af;
  &:hover {
    color: #32bb8d;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    text-decoration: none;
  }
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
