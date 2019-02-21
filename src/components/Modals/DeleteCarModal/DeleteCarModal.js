import React, { Component } from "react";
import { Modal, ModalBody, ModalFooter, Row, Col } from "reactstrap";
import ReactDOM from "react-dom";
import classes from "./DeleteCarModal.module.css";
import MyButton from "../../MyButton/MyButton";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";

class DeleteCarModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      car: null
    };
  }

  notify = () => {
    toast.error("You can't delete car if it's in use", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false
    });
  };

  componentWillMount() {
    this.root = document.createElement("div");
    document.body.appendChild(this.root);
  }

  componentWillUnmount() {
    document.body.removeChild(this.root);
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  handleCar = car => {
    this.setState({ car: car });
  };

  handleDeleteCar = (id, status) => {
    if (status !== "in use") {
      this.props.deleteCarById(id);
      this.toggle();
    } else {
      this.notify();
      this.toggle();
    }
  };

  render() {
    const { car } = this.state;
    const {
      model,
      color,
      child_seat,
      fuel_type,
      doors,
      year,
      status,
      mileage,
      photo,
      transmission,
      air_conditioner,
      id
    } = car || "";

    return car
      ? ReactDOM.createPortal(
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            centered={true}
            className={classes.Modal}
          >
            <ModalBody className={classes.ModalBody}>
              Do you want to delete
              <span className={classes.CarModel}>{" " + model}</span> from your
              list? <br />
              <img
                src={
                  photo
                    ? photo
                    : "http://www.herronauto.ie/wp-content/themes/SKU-WP-1/assets/images/no_photo.png"
                }
                alt="Car"
                className={classes.Car_Image}
              />
              <div className={classes.Car_Attribute_Wrapper}>
                <Row>
                  <Col xs="12" md="6">
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
                    <div className={classes.Car_Attribute}>
                      Fuel : {fuel_type}
                    </div>
                    <div className={classes.Car_Attribute}>
                      Mileage : {mileage}
                    </div>
                    <div className={classes.Car_Attribute}>Year : {year}</div>
                  </Col>
                </Row>
              </div>
            </ModalBody>
            <ModalFooter className={classes.ModalFooter}>
              <Link to={`/cars/${id}`}>
                <MyButton title={"Show car page"} />
              </Link>
              <MyButton
                onClick={() => this.handleDeleteCar(car.id, status)}
                title={"Delete car"}
              />
              <MyButton onClick={this.toggle} title={"Cancel"} />
            </ModalFooter>
            <ToastContainer />
          </Modal>,
          this.root
        )
      : null;
  }
}

export default DeleteCarModal;
