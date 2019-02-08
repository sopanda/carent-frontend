import React, { Fragment } from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import classes from "./UserWidget.module.css";
import MyButton from "../../MyButton/MyButton";

const UserWidget = props => {
  return (
    <Fragment>
      <Card className={classes.UserWidget_Card + " " + props.className}>
        <CardBody>
          <div className={classes.Image} />
          <CardTitle>
            {/*`${props.owner.first_name} ${props.owner.last_name}`*/}
            Mr Kevin Jackson
          </CardTitle>
          <CardSubtitle>
            {/*`@${props.owner.username}`*/}
            Account status: Verified
          </CardSubtitle>
          {props.btnTitle && (
            <div className={classes.SendBtn}>
              <MyButton title={props.btnTitle} />
            </div>
          )}
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default UserWidget;
