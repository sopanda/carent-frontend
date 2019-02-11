import React, { Component, Fragment } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  ListGroup,
  ListGroupItem
} from "reactstrap";
// import CarImageTmp from "../../../assets/cars/audiA6.jpg";
import { Link } from "react-router-dom";
import classes from "./CarMapCard.module.css";
import styled from "styled-components";
import MyButton from "../../MyButton/MyButton";
import { connect } from "react-redux";

const MyCard = styled(Card)`
  max-width: 234px;
  color: #082336;
  border: none !important;
  overflow-x: hidden;
`;

const Title = styled(CardTitle)`
  font-size: 16px;
  text-align: center;
  padding-top: 24px;
  text-transform: uppercase;
`;

const List = styled(ListGroup)`
  margin-bottom: 5px;
`;

const ListItem = styled(ListGroupItem)`
  border: none !important;
  padding: 5px !important;
`;

const MyLink = styled(Link)`
  display: block;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  position: absolute;
  right: 7px;
  bottom: -22px;
`;

const Hero = styled.div`
  position: relative;
`;

const Img = styled(CardImg)`
  max-width: 235px;
  height: auto;
`;

class CarMapCard extends Component {
  render() {
    const { model, daily_price, photo, start_date, end_date } = this.props.car;
    const { first_name, last_name } = this.props.car.owner;
    const { road, house_number } = this.props.car.address;
    return (
      <Fragment>
        <MyCard className={classes.Card}>
          <Hero>
            <Img alt="Car" src={photo} />
            <MyLink to="/offer">
              <MyButton title="Show offer" />
            </MyLink>
          </Hero>
          <CardBody className={classes.Card_Body}>
            <Title>{model}</Title>
            <CardText tag="div">
              <List>
                <ListItem>
                  <strong>Available</strong>
                  {`: ${start_date} - ${end_date}`}
                </ListItem>
                <ListItem>
                  <strong>Owner</strong>: {first_name + " " + last_name}
                </ListItem>
                <ListItem>
                  <strong>Price</strong>: {daily_price}$ per day
                </ListItem>
                <ListItem>
                  <strong>Address</strong>: {road + ", " + house_number}
                </ListItem>
              </List>
            </CardText>
          </CardBody>
        </MyCard>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    cars: state.cars.cars
  };
};

export default connect(
  mapStateToProps,
  null
)(CarMapCard);
