import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  Container,
  Form,
  FormGroup,
  CustomInput,
  InputGroup,
  Input,
  Row,
  Col,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import Title from "../Title/Title";
import MyButton from "../MyButton/MyButton";
import classes from "./NewCar.module.css";
import styled from "styled-components";
import { createNewCar, setCarPhoto } from "../../actions/cars.actions";
import { SettingsTitle } from "../SettingsTitle/SettingsTitle";
// import CarAddressGeo from "../CarAddressGeo/CarAddressGeo";

const UploadButton = styled(MyButton)`
  max-width: fit-content;
  margin: 0;
  border-radius: 0;
`;

const UploadInput = styled(CustomInput)`
  max-width: 250px;
  .custom-file-label::after {
    display: none;
  }
`;
const Toggler = styled(DropdownToggle)`
  margin-left: 20px;
  color: #001220 !important;
  background-color: #3de6af !important;
  border: none !important;
`;

class NewCar extends Component {
  constructor(props) {
    super(props);
    const { latitude, longitude } = this.props.location;
    this.state = {
      car: {
        model: "",
        color: "",
        child_seat: false,
        fuel_type: "diesel",
        doors: 4,
        daily_price: "",
        year: "",
        mileage: "",
        transmission: "auto",
        latitude: latitude,
        longitude: longitude,
        air_conditioner: false
      },
      submitted: false,
      allow_photo: false,
      selectedPhotoName: "Click to choose car photo",
      photo: null
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      car: {
        ...prevState.car,
        [name]: value
      }
    }));
  };

  photoUploadHandler = () => {
    const { photo, selectedPhotoName } = this.state;
    const { id } = this.props.newCar;
    console.log(id);
    if (photo) {
      let fd = new FormData();
      fd.append("photo", photo, selectedPhotoName);
      this.props.onUploadCarPhoto(id, fd);
      this.setState({ photo: null, selectedPhotoName: "Your photo uploaded" });
      this.props.history.push("/dashboard");
    }
  };

  photoSelectedHandler = e => {
    this.setState({
      selectedPhotoName: e.target.files[0].name,
      photo: e.target.files[0]
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { car } = this.state;
    this.props.onCreateNewCar(car);
    this.setState({ allow_photo: true });
  };

  selectChildSeat = e => {
    const { innerText } = e.target;
    if (innerText === "yes") {
      this.setState(prevState => ({
        car: {
          ...prevState.car,
          child_seat: true
        }
      }));
    } else {
      this.setState(prevState => ({
        car: {
          ...prevState.car,
          child_seat: false
        }
      }));
    }
  };

  selectAirCon = e => {
    const { innerText } = e.target;
    if (innerText === "yes") {
      this.setState(prevState => ({
        car: {
          ...prevState.car,
          air_conditioner: true
        }
      }));
    } else {
      this.setState(prevState => ({
        car: {
          ...prevState.car,
          air_conditioner: false
        }
      }));
    }
  };

  selectDoors = e => {
    const { innerText } = e.target;
    this.setState(prevState => ({
      car: {
        ...prevState.car,
        doors: parseInt(innerText)
      }
    }));
  };

  selectTransmission = e => {
    const { innerText } = e.target;
    this.setState(prevState => ({
      car: {
        ...prevState.car,
        transmission: innerText
      }
    }));
  };

  selectFuelType = e => {
    const { innerText } = e.target;
    this.setState(prevState => ({
      car: {
        ...prevState.car,
        fuel_type: innerText
      }
    }));
  };

  render() {
    const {
      model,
      color,
      child_seat,
      fuel_type,
      doors,
      daily_price,
      year,
      mileage,
      transmission,
      submitted,
      air_conditioner
    } = this.state.car;

    return (
      <Container fluid={true}>
        <Row>
          <Col>
            <div className={classes.NewCar_Wrapper}>
              <Title>Create new car</Title>
              {!this.state.allow_photo ? (
                <Form onSubmit={this.handleSubmit}>
                  <Container>
                    <Row>
                      <Col sm="12" md="8">
                        <FormGroup>
                          <Input
                            type="text"
                            name="model"
                            placeholder="Model"
                            value={model}
                            onChange={this.handleChange}
                            className={
                              classes.NewCar_Input + " form-control-lg"
                            }
                          />
                          {submitted && !model && (
                            <div className="help-block">model is required</div>
                          )}
                        </FormGroup>
                        <FormGroup>
                          <Input
                            type="text"
                            name="color"
                            placeholder="Color"
                            value={color}
                            onChange={this.handleChange}
                            className={
                              classes.NewCar_Input + " form-control-lg"
                            }
                          />
                          {submitted && !color && (
                            <div className="help-block">color is required</div>
                          )}
                        </FormGroup>
                        <FormGroup>
                          <Input
                            type="number"
                            name="daily_price"
                            placeholder="Daily price"
                            value={daily_price}
                            onChange={this.handleChange}
                            className={
                              classes.NewCar_Input + " form-control-lg"
                            }
                          />
                          {submitted && !daily_price && (
                            <div className="help-block">
                              daily_price is required
                            </div>
                          )}
                        </FormGroup>
                        <FormGroup>
                          <Input
                            type="number"
                            name="year"
                            placeholder="Production year"
                            value={year}
                            onChange={this.handleChange}
                            className={
                              classes.NewCar_Input + " form-control-lg"
                            }
                          />
                          {submitted && !year && (
                            <div className="help-block">year is required</div>
                          )}
                        </FormGroup>
                        <FormGroup>
                          <Input
                            type="number"
                            name="mileage"
                            placeholder="Mileage"
                            value={mileage}
                            onChange={this.handleChange}
                            className={
                              classes.NewCar_Input + " form-control-lg"
                            }
                          />
                          {submitted && !mileage && (
                            <div className="help-block">
                              mileage is required
                            </div>
                          )}
                        </FormGroup>
                      </Col>
                      <Col sm="12" md="4">
                        <FormGroup>
                          <label>Child seat</label>
                          <UncontrolledButtonDropdown
                            className={classes.Dropdown}
                          >
                            <Toggler caret>{child_seat ? "yes" : "no"}</Toggler>
                            <DropdownMenu>
                              <DropdownItem onClick={this.selectChildSeat}>
                                yes
                              </DropdownItem>
                              <DropdownItem onClick={this.selectChildSeat}>
                                no
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledButtonDropdown>
                          {submitted && !child_seat && (
                            <div className="help-block">
                              child_seat is required
                            </div>
                          )}
                        </FormGroup>
                        <FormGroup>
                          <label>Air condition</label>
                          <UncontrolledButtonDropdown
                            className={classes.Dropdown}
                          >
                            <Toggler caret>
                              {air_conditioner ? "yes" : "no"}
                            </Toggler>
                            <DropdownMenu>
                              <DropdownItem onClick={this.selectAirCon}>
                                yes
                              </DropdownItem>
                              <DropdownItem onClick={this.selectAirCon}>
                                no
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledButtonDropdown>
                          {submitted && !air_conditioner && (
                            <div className="help-block">
                              child_seat is required
                            </div>
                          )}
                        </FormGroup>
                        <FormGroup>
                          <label>Fuel type</label>
                          <UncontrolledButtonDropdown
                            className={classes.Dropdown}
                          >
                            <Toggler caret>{fuel_type}</Toggler>
                            <DropdownMenu>
                              <DropdownItem onClick={this.selectFuelType}>
                                diesel
                              </DropdownItem>
                              <DropdownItem onClick={this.selectFuelType}>
                                gas
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledButtonDropdown>
                          {submitted && !fuel_type && (
                            <div className="help-block">
                              fuel_type is required
                            </div>
                          )}
                        </FormGroup>
                        <FormGroup>
                          <label>Doors</label>
                          <UncontrolledButtonDropdown
                            className={classes.Dropdown}
                          >
                            <Toggler caret>{doors}</Toggler>
                            <DropdownMenu>
                              <DropdownItem onClick={this.selectDoors}>
                                2
                              </DropdownItem>
                              <DropdownItem onClick={this.selectDoors}>
                                4
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledButtonDropdown>
                          {submitted && !doors && (
                            <div className="help-block">doors is required</div>
                          )}
                        </FormGroup>
                        <FormGroup>
                          <label>Transmission</label>
                          <UncontrolledButtonDropdown
                            className={classes.Dropdown}
                          >
                            <Toggler caret>{transmission}</Toggler>
                            <DropdownMenu>
                              <DropdownItem onClick={this.selectTransmission}>
                                manual
                              </DropdownItem>
                              <DropdownItem onClick={this.selectTransmission}>
                                semi-auto
                              </DropdownItem>
                              <DropdownItem onClick={this.selectTransmission}>
                                auto
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledButtonDropdown>
                          {submitted && !transmission && (
                            <div className="help-block">
                              transmission is required
                            </div>
                          )}
                        </FormGroup>
                      </Col>
                    </Row>
                    <div className={classes.NewCar_ButtonGroup}>
                      <MyButton title="Create new car" />
                      <MyButton title="Cancel" />
                    </div>
                  </Container>
                </Form>
              ) : (
                <Col>
                  <Container>
                    <SettingsTitle>Please upload car photo</SettingsTitle>
                    <InputGroup>
                      <UploadInput
                        type="file"
                        id="car"
                        name="photo"
                        onChange={this.photoSelectedHandler}
                        label={this.state.selectedPhotoName}
                      />
                      <UploadButton
                        title="Upload document"
                        onClick={this.photoUploadHandler}
                      />
                    </InputGroup>
                    {/*<CarAddressGeo />*/}
                  </Container>
                </Col>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    location: state.user.myLocation,
    newCar: state.cars.newCar
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCreateNewCar: car => dispatch(createNewCar(car)),
    onUploadCarPhoto: (id, photo) => dispatch(setCarPhoto(id, photo))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NewCar)
);
