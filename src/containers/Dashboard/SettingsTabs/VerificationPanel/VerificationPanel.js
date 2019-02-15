import React, { Component } from "react";
import UserWidget from "../../../../components/Order/UserWidget/UserWidget";
import styled from "styled-components";
import { CustomInput, Row, Col, InputGroup } from "reactstrap";
import MyButton from "../../../../components/MyButton/MyButton";
import { SettingsTitle } from "../../../../components/SettingsTitle/SettingsTitle";

const Wrapper = styled.div`
  padding: 20px;
`;

const UploadingWrapper = styled.div`
  margin-bottom: 20px;
`;

const UploadInput = styled(CustomInput)`
  max-width: 200px;
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
      file: null
    };
  }

  fileSelectedHandler = e => {
    this.setState({
      selectedFileName: e.target.files[0].name,
      file: e.target.files[0]
    });
  };

  fileUploadHandler = () => {
    console.log(this.state.file);
  };

  render() {
    const { selectedFileName } = this.state;
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
          </Col>
          <Col md="4" sm="12">
            <UserWidget owner={user} />
          </Col>
        </Row>
      </Wrapper>
    );
  }
}

export default VerificationPanel;
