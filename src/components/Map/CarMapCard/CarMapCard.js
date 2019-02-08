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
import CarImageTmp from "../../../assets/cars/audiA6.jpg";
import { Link } from "react-router-dom";
import classes from "./CarMapCard.module.css";
import styled from "styled-components";
import MyButton from "../../MyButton/MyButton";

const MyCard = styled(Card)`
  max-width: 234px;
  color: #082336;
  border: none !important;
  overflow-x: hidden;
`;

const Title = styled(CardTitle)`
  font-size: 16px;
  text-align: center;
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

export class CarMapCard extends Component {
  render() {
    return (
      <Fragment>
        <MyCard className={classes.Card}>
          <Hero>
            <Img alt="Car" src={CarImageTmp} />
            <MyLink to="/offer">
              <MyButton title="Show offer" />
            </MyLink>
          </Hero>
          <CardBody>
            <Title>Audi A6 </Title>
            <CardText tag="div">
              <List>
                <ListItem>
                  <strong>Owner</strong>: Mike Harisson
                </ListItem>
                <ListItem>
                  <strong>Status</strong>: Available
                </ListItem>
                <ListItem>
                  <strong>Price</strong>: 50$ per day
                </ListItem>
                <ListItem>
                  <strong>Address</strong>: 270 W 43rd St, New York, NY 10036
                </ListItem>
              </List>
            </CardText>
          </CardBody>
        </MyCard>
      </Fragment>
    );
  }
}

export default CarMapCard;
