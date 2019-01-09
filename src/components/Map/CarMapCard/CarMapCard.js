import React, { Component, Fragment } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";
import CarImageTmp from "../../../assets/cars/audiA6.jpg";
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
            <CardText className={classes.Description}>
              Owner: Mike Harisson <br />
              Status: Available <br />
              Price: 50$ per day
            </CardText>
            <Button>Book car</Button>
          </CardBody>
        </Card>
      </Fragment>
    );
  }
}

export default CarMapCard;
