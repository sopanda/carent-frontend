import React, { Component } from "react";
import { Container, Row, Col, Form, Label, FormGroup, Input } from "reactstrap";
import Title from "../Title/Title";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import classes from "./NewOrder.module.css";
import setMinutes from "date-fns/setMinutes";
import setHours from "date-fns/setHours";
import styled from "styled-components";
import CarSelection from "../CarSelection/CarSelection";
import moment from "moment";
import MyButton from "../MyButton/MyButton";
import { withRouter } from "react-router-dom";
import { createOffer } from "../../actions/offer.actions";
import { toast, ToastContainer } from "react-toastify";

const DatePickerCustom = styled(DatePicker)`
  margin-left: 20px;
  &::placeholder {
    color: #48a1e3;
    font-size: 16px;
  }
  width: 220px;
  background-color: #082336;
  border-color: #48a1e3;
  color: #48a1e3;
  padding: 4px;
  border-radius: 7px;
`;

class NewOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      start_date: null,
      end_date: null,
      description: "",
      carId: null
    };
  }

  handleChangeStart = date => {
    this.setState({
      start_date: date
    });
  };

  handleChangeEnd = date => {
    this.setState({
      end_date: date
    });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleCar = ({ value }) => {
    this.setState({ carId: value });
  };

  notify = () => {
    toast.error("Please, fill all fields", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { start_date, end_date, description, carId } = this.state;
    if (start_date && end_date && description && carId) {
      let order = {
        start_date: moment(start_date).format("DD/MM/YYYY HH:mm"),
        end_date: moment(end_date).format("DD/MM/YYYY HH:mm"),
        description: description
      };
      console.log(order);
      this.props.OnCreateOffer(carId, order);
    } else {
      this.notify();
    }
  };

  render() {
    const { submitted, start_date, end_date, description } = this.state;
    const { myCars } = this.props;
    return (
      <Container fluid={true}>
        <Row>
          <div className={classes.NewOrder_Wrapper}>
            <Title>Create new order</Title>
            <Form onSubmit={this.handleSubmit}>
              <Container>
                <Row>
                  <Col md="12">
                    <FormGroup>
                      <Label for="start_date">From</Label>
                      <DatePickerCustom
                        selected={this.state.start_date}
                        onChange={this.handleChangeStart}
                        placeholderText="Choose start date"
                        showTimeSelect
                        timeFormat="HH:mm"
                        injectTimes={[
                          setHours(setMinutes(new Date(), 1), 0),
                          setHours(setMinutes(new Date(), 5), 12),
                          setHours(setMinutes(new Date(), 59), 23)
                        ]}
                        dateFormat="MMMM d, yyyy h:mm aa"
                      />
                      {submitted && !start_date && (
                        <div className="help-block">start_date is required</div>
                      )}
                    </FormGroup>
                    <FormGroup>
                      <Label for="end_date">Till</Label>
                      <DatePickerCustom
                        selected={this.state.end_date}
                        onChange={this.handleChangeEnd}
                        showTimeSelect
                        placeholderText="Choose end date"
                        timeFormat="HH:mm"
                        injectTimes={[
                          setHours(setMinutes(new Date(), 1), 0),
                          setHours(setMinutes(new Date(), 5), 12),
                          setHours(setMinutes(new Date(), 59), 23)
                        ]}
                        dateFormat="MMMM d, yyyy h:mm aa"
                      />
                      {submitted && !end_date && (
                        <div className="help-block">end_date is required</div>
                      )}
                    </FormGroup>
                    <FormGroup>
                      <Label>Choose available car</Label>
                      <CarSelection
                        options={myCars}
                        handleCarId={this.handleCar}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="description">Order description</Label>
                      <Input
                        type="textarea"
                        name="description"
                        placeholder="Write description"
                        value={description}
                        onChange={this.handleChange}
                        className={classes.NewOrder_Input}
                      />
                    </FormGroup>
                    <MyButton
                      title="Create order"
                      className={classes.Create_Button}
                    />
                    w
                  </Col>
                </Row>
              </Container>
            </Form>
          </div>
        </Row>
        <ToastContainer />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    myCars: state.cars.myCars
  };
};

const mapDispatchToProps = dispatch => {
  return {
    OnCreateOffer: (id, order) => dispatch(createOffer(id, order))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NewOrder)
);
