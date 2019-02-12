import React, { Fragment } from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import classes from "./UserWidget.module.css";
import MyButton from "../../MyButton/MyButton";
import { Link } from "react-router-dom";
import Spinner from "../../Spinner/Spinner";
import styled from "styled-components";

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

const UserWidget = props => {
  return props.owner ? (
    <Fragment>
      <Card className={classes.UserWidget_Card + " " + props.className}>
        <CardBody>
          <div className={classes.Image} />
          <CardTitle>
            <NavLink to={`/users/${props.owner.id}`}>{`${
              props.owner.first_name
            } ${props.owner.last_name}`}</NavLink>
          </CardTitle>
          <CardSubtitle>
            {`Email: ${props.owner.email}`} <br /> {`Account status: Verified`}
          </CardSubtitle>
          {props.btnTitle && (
            <div className={classes.SendBtn}>
              <MyButton title={props.btnTitle} />
            </div>
          )}
        </CardBody>
      </Card>
    </Fragment>
  ) : (
    <Spinner />
  );
};

export default UserWidget;
