import React, { Fragment, Component } from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import classes from "./UserWidget.module.css";
import MyButton from "../../MyButton/MyButton";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../../Spinner/Spinner";
import styled from "styled-components";
import { sendRequest } from "../../../actions/request.actions";
import { toast, ToastContainer } from "react-toastify";

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

class UserWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sent: false
    };
  }

  sendRequest = id => {
    this.props.onSendRequest(id);
    this.setState({ sent: true });
    this.notify();
  };

  notify = () => {
    toast.success("Request sent", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false
    });
  };

  render() {
    return this.props.owner ? (
      <Fragment>
        <Card className={classes.UserWidget_Card + " " + this.props.className}>
          <CardBody>
            <img
              src={
                this.props.owner.photo
                  ? this.props.owner.photo
                  : "https://liains.com/wp-content/uploads/sites/13/2015/07/no-image-300x300.png"
              }
              alt="Profile"
              className={classes.Profile_Image}
            />
            <CardTitle>
              <NavLink to={`/users/${this.props.owner.id}`}>{`${
                this.props.owner.first_name
              } ${this.props.owner.last_name}`}</NavLink>
            </CardTitle>
            <CardSubtitle>
              {`Email: ${this.props.owner.email}`} <br />{" "}
              {`Account status: Verified`}
            </CardSubtitle>
            {this.props.btnTitle && (
              <div className={classes.SendBtn}>
                <MyButton
                  title={this.props.btnTitle}
                  onClick={() => this.sendRequest(this.props.carId)}
                  disabled={this.state.sent ? true : false}
                />
              </div>
            )}
          </CardBody>
        </Card>
        <ToastContainer />
      </Fragment>
    ) : (
      <Spinner />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSendRequest: id => dispatch(sendRequest(id))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(UserWidget);
