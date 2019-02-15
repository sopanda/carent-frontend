import React, { Component } from "react";
import { Modal, ModalBody, ModalFooter } from "reactstrap";
import ReactDOM from "react-dom";
import classes from "./CommentCreationModal.module.css";
import CommentCreation from "../../CommentCreation/CommentCreation";

class CommentCreationModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      car: null
    };
  }

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

  render() {
    return ReactDOM.createPortal(
      <Modal
        isOpen={this.state.modal}
        toggle={this.toggle}
        centered={true}
        className={classes.Modal}
      >
        <ModalBody className={classes.ModalBody}>
          <CommentCreation toggleModal={this.toggle} />
        </ModalBody>
      </Modal>,
      this.root
    );
  }
}

export default CommentCreationModal;
