import React, { Component } from "react";
import { Modal, ModalBody, ModalFooter } from "reactstrap";
import ReactDOM from "react-dom";
import classes from "./VerifyModal.module.css";
import MyButton from "../../MyButton/MyButton";

class VerifyModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      user_id: null,
      doc: null
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

  handleData = (user_id, doc) => {
    this.setState({ user_id, doc });
  };

  handleReject = id => {
    this.props.rejectUser(id);
    this.toggle();
  };

  handleVerify = id => {
    this.props.verifyUser(id);
    this.toggle();
  };

  render() {
    const { user_id, doc } = this.state;

    return ReactDOM.createPortal(
      <Modal
        isOpen={this.state.modal}
        toggle={this.toggle}
        centered={true}
        className={classes.Modal}
      >
        <ModalBody className={classes.ModalBody}>
          <img src={doc} alt="doc" className={classes.Image} />
        </ModalBody>
        <ModalFooter className={classes.ModalFooter}>
          <MyButton
            title={"Verify"}
            onClick={() => this.handleVerify(user_id)}
          />
          <MyButton
            title={"Reject"}
            onClick={() => this.handleReject(user_id)}
          />
          <MyButton onClick={this.toggle} title={"Cancel"} />
        </ModalFooter>
      </Modal>,
      this.root
    );
  }
}

export default VerifyModal;
