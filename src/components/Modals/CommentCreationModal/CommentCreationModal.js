import React, { Component } from "react";
import { Modal, ModalBody } from "reactstrap";
import ReactDOM from "react-dom";
import classes from "./CommentCreationModal.module.css";
import CommentCreation from "../../CommentCreation/CommentCreation";

class CommentCreationModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      data: null,
      type: null
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

  handleOrder = (order, type) => {
    this.setState({ data: order, type: type });
  };

  render() {
    const { data, type } = this.state;
    return ReactDOM.createPortal(
      <Modal
        isOpen={this.state.modal}
        toggle={this.toggle}
        centered={true}
        className={classes.Modal}
      >
        <ModalBody className={classes.ModalBody}>
          <CommentCreation toggleModal={this.toggle} data={data} type={type} />
        </ModalBody>
      </Modal>,
      this.root
    );
  }
}

export default CommentCreationModal;
