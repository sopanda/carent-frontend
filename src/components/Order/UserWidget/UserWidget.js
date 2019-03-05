import React, { Fragment, Component } from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import classes from "./UserWidget.module.css";
import MyButton from "../../MyButton/MyButton";
import { connect } from "react-redux";
import { sendRequest } from "../../../actions/request.actions";
import { toast, ToastContainer } from "react-toastify";
import { NavLink } from "../../NavLink/NavLink";

class UserWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sent: false
    };
  }

  shouldComponentUpdate = nextProps => {
    return nextProps.owner !== this.props.owner;
  };

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
    const {
      photo,
      id,
      first_name,
      last_name,
      email,
      phone_number,
      verified
    } = this.props.owner;

    return (
      <Fragment>
        <Card className={classes.UserWidget_Card + " " + this.props.className}>
          <CardBody>
            <div
              style={{
                backgroundImage: photo
                  ? `url(${photo})`
                  : `url("https://liains.com/wp-content/uploads/sites/13/2015/07/no-image-300x300.png")`
              }}
              className={classes.Profile_Image}
            />
            <CardTitle>
              <NavLink
                to={`/users/${id}`}
              >{`${first_name} ${last_name}`}</NavLink>
            </CardTitle>
            <CardSubtitle>
              {`Email: ${email}`} <br /> {`Phone: ${phone_number}`} <br />{" "}
              {`Account status: ${verified ? "verified" : "unverified"}`}
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
