import React, { Component, Fragment } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import CarImageTmp from "../../../assets/cars/audiA6.jpg";
import { Link } from "react-router-dom";
import classes from "./CarMapCard.css";

export class CarMapCard extends Component {
  render() {
    return (
      <Fragment>
        <Card className={classes.Card}>
          <CardImg
            top
            alt="Car"
            src={CarImageTmp}
            className={classes.CarImage}
            width="100%"
          />
          <CardBody>
            <CardTitle>Audi A6, 2015, Diesel,</CardTitle>
            <CardSubtitle>270 W 43rd St, New York, NY 10036, </CardSubtitle>
            <CardText className={classes.Description}>
              Owner: Mike Harisson <br />
              Status: Available <br />
              Price: 50$ per day
            </CardText>
            <Link to="/offer">Show offer</Link>
          </CardBody>
        </Card>
      </Fragment>
    );
  }
}

export default CarMapCard;
