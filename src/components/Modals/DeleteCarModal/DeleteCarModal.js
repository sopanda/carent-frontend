import React, { Component } from "react";
import { Modal, ModalBody, ModalFooter } from "reactstrap";
import ReactDOM from "react-dom";
import classes from "./DeleteCarModal.module.css";
import MyButton from "../../MyButton/MyButton";
import { toast, ToastContainer } from "react-toastify";

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
            <ToastContainer />
          </Modal>,
          this.root
        )
      : null;
  }
}

export default DeleteCarModal;
