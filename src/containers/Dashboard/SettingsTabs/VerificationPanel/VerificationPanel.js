import React, { Component } from "react";
import UserWidget from "../../../../components/Order/UserWidget/UserWidget";
import styled from "styled-components";
import { CustomInput, Row, Col, InputGroup } from "reactstrap";
import MyButton from "../../../../components/MyButton/MyButton";
import { SettingsTitle } from "../../../../components/SettingsTitle/SettingsTitle";
import { connect } from "react-redux";
import {
  setUserPhoto,
  uploadDocuments
} from "../../../../actions/user.actions";

const Wrapper = styled.div`
  padding: 20px;
`;

const UploadingWrapper = styled.div`
  margin-bottom: 20px;
`;

const UploadInput = styled(CustomInput)`
  max-width: 250px;
  .custom-file-label::after {
    display: none;
  }
`;

const UploadButton = styled(MyButton)`
  max-width: fit-content;
  margin: 0;
  border-radius: 0;
`;

class VerificationPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFileName: "Choose file",
      selectedPhotoName: "Choose your photo",
      file: null,
      photo: null
    };
  }

  fileSelectedHandler = e => {
    this.setState({
      selectedFileName: e.target.files[0].name,
      file: e.target.files[0]
    });
  };

  photoSelectedHandler = e => {
    this.setState({
      selectedPhotoName: e.target.files[0].name,
      photo: e.target.files[0]
    });
  };

  fileUploadHandler = () => {
    const { file, selectedFileName } = this.state;
    if (file) {
      let fd = new FormData();
      fd.append("document", file, selectedFileName);
      this.props.onUploadFile(fd);
      this.setState({ file: null, selectedFileName: "Your data uploaded" });
    }
  };

  photoUploadHandler = () => {
    const { photo, selectedPhotoName } = this.state;
    const { id } = this.props.user;
    if (photo) {
      let fd = new FormData();
      fd.append("photo", photo, selectedPhotoName);
      this.props.onUploadPhoto(id, fd);
      this.setState({ photo: null, selectedPhotoName: "Your photo uploaded" });
    }
  };

  render() {
    const { selectedFileName, selectedPhotoName } = this.state;
    const { user } = this.props;
    return (
      <Wrapper>
        <Row>
          <Col md="8" sm="12">
            <UploadingWrapper>
              <SettingsTitle>Please verify your account</SettingsTitle>
              <InputGroup>
                <UploadInput
                  type="file"
                  id="scans"
                  name="scans"
                  onChange={this.fileSelectedHandler}
                  label={selectedFileName}
                />
                <UploadButton
                  title="Upload document"
                  onClick={this.fileUploadHandler}
                />
              </InputGroup>
            </UploadingWrapper>
            <UploadingWrapper>
              <SettingsTitle>Please upload your profile photo</SettingsTitle>
              <InputGroup>
                <UploadInput
                  type="file"
                  id="photo"
                  name="photo"
                  onChange={this.photoSelectedHandler}
                  label={selectedPhotoName}
                />
                <UploadButton
                  title="Upload photo"
                  onClick={this.photoUploadHandler}
                />
              </InputGroup>
            </UploadingWrapper>
          </Col>
          <Col md="4" sm="12">
            <UserWidget owner={user} />
          </Col>
        </Row>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onUploadPhoto: (userId, photo) => dispatch(setUserPhoto(userId, photo)),
    onUploadFile: file => dispatch(uploadDocuments(file))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(VerificationPanel);
