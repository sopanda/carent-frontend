import React, { Fragment } from "react";
// import PropTypes from "prop-types";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import classes from "./UserWidget.css";

const UserWidget = props => {
  return (
    <Fragment>
      <Card className={classes.UserWidget_Card}>
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

          <Button className={classes.Button}>Send request</Button>
        </CardBody>
      </Card>
    </Fragment>
  );
};

// UserWidget.propTypes = {
//   owner: PropTypes.object.isRequired
// };

export default UserWidget;
