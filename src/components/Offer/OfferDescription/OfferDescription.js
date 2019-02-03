import React, { Fragment } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col
} from "reactstrap";
import classes from "./OfferDescription.css";

const car = {
  model: "Focus",
  doors: "4",
  air: "yes",
  color: "white",
  year: "2007",
  country: "Germany",
  transmission: "manual",
  fuel: "diesel",
  kid_chair: "yes",
  mileage: "160000"
};

const OfferDescription = props => {
  return (
    <Fragment>
      <Card className={classes.Card}>
        <CardImg
          top
          width="100%"
          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Ford Focus</CardTitle>
          <CardSubtitle>
            Available: 14:30 | 26.02.2019 - 14:30 | 28.02.2019 <br />
            Price: 50$ per day
          </CardSubtitle>
          <div className={classes.Columns_Wrapper}>
            <Row>
              <Col>
                <div>Model : {car.model}</div>
                <div>Doors : {car.doors}</div>
                <div>Color : {car.color}</div>
                <div>Air conditioner : {car.air}</div>
                <div>Kid chair : {car.kid_chair}</div>
              </Col>
              <Col>
                <div>Country : {car.country}</div>
                <div>Transmission : {car.transmission}</div>
                <div>Fuel : {car.fuel}</div>
                <div>Mileage : {car.mileage}</div>
                <div>Year : {car.year}</div>
              </Col>
            </Row>
          </div>
          <CardText className={classes.Summary}>
            Lorem ipsum dolor sit amet, velit qualisque quo ut, pro debitis
            euripidis comprehensam ex. Mea pertinacia interpretaris te, vel at
            stet erat, novum invidunt ne vix. Exerci quodsi pro id, vero vidit
            munere pro ei. Duo populo integre vulputate et. Vitae delicata
            repudiare id nec, aperiri docendi verterem sed et, at magna eripuit
            mel. Ne diceret docendi rationibus ius. Veri error phaedrum mel ei.
            Vim diam democritum et. Usu soluta lucilius scripserit ex, cu agam
            quidam nec.
          </CardText>
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default OfferDescription;
