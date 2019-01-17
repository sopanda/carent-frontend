import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const UserWidget = props => {
  return (
    <Fragment>
      <Card>
        <CardImg top alt="Owner Image" width="100%" />
        <CardBody>
          <CardTitle>
            {/*`${props.owner.first_name} ${props.owner.last_name}`*/}
          </CardTitle>
          <CardSubtitle>{/*`@${props.owner.username}`*/}</CardSubtitle>
          <Button>Contact</Button>
        </CardBody>
      </Card>
    </Fragment>
  );
};

UserWidget.propTypes = {
  owner: PropTypes.object.isRequired
};

export default UserWidget;
