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
import classes from "./OrderDescription.module.css";

const OrderDescription = props => {
  const {
    model,
    start_date,
    end_date,
    photo,
    color,
    air_conditioner,
    child_seat,
    fuel_type,
    doors,
    daily_price,
    description,
    year,
    mileage,
    transmission
  } = props.offer;
  const { road, house_number, city, postcode } = props.offer.address;
  return (
    <Fragment>
      <Card className={classes.Card}>
        <CardImg
          top
          width="100%"
          src={
            photo
              ? photo
              : "http://www.herronauto.ie/wp-content/themes/SKU-WP-1/assets/images/no_photo.png"
          }
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>{model}</CardTitle>
          <CardSubtitle>
            {`Available: ${start_date} - ${end_date}`} <br />
            {`Price: ${daily_price}$ per day`} <br />
            {`Pick up address: ${road} ${house_number}, ${city}, ${postcode} `}
          </CardSubtitle>
          <div className={classes.Columns_Wrapper}>
            <Row>
              <Col xs="12" md="6">
                <div className={classes.Car_Attribute}>Model : {model}</div>
                <div className={classes.Car_Attribute}>Doors : {doors}</div>
                <div className={classes.Car_Attribute}>Color : {color}</div>
                <div className={classes.Car_Attribute}>
                  Air conditioner : {air_conditioner ? "yes" : "no"}
                </div>
                <div className={classes.Car_Attribute}>
                  Kid chair : {child_seat ? "yes" : "no"}
                </div>
              </Col>
              <Col xs="12" md="6">
                <div className={classes.Car_Attribute}>
                  Transmission : {transmission}
                </div>
                <div className={classes.Car_Attribute}>Fuel : {fuel_type}</div>
                <div className={classes.Car_Attribute}>Mileage : {mileage}</div>
                <div className={classes.Car_Attribute}>Year : {year}</div>
              </Col>
            </Row>
          </div>
          <CardText className={classes.Summary}>
            Offer description: <br /> {description}
          </CardText>
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default OrderDescription;
