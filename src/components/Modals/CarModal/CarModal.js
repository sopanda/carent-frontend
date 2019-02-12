import React, { Component } from "react";
import { Modal, ModalBody, ModalFooter } from "reactstrap";
import ReactDOM from "react-dom";
import classes from "./CarModal.module.css";
import MyButton from "../../MyButton/MyButton";

class CarModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      car: null
    };
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
      console.log(this.props);
    }
  };

  render() {
    const { car } = this.state;
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
              <span className={classes.CarModel}>{" " + car.model}</span> from
              your list?
            </ModalBody>
            <ModalFooter className={classes.ModalFooter}>
              <MyButton
                onClick={() => this.handleDeleteCar(car.id, car.status)}
                title={"Delete car"}
              />
              <MyButton onClick={this.toggle} title={"Cancel"} />
            </ModalFooter>
          </Modal>,
          document.getElementById("portal")
        )
      : null;
  }
}

export default CarModal;
