import React, { Component } from "react";
import Select from "react-select";
import styled from "styled-components";

const CarSelector = styled(Select)`
  & > div {
    background: #fff;
    border-color: #48a1e3;
  }

  &:nth-child(2) {
    color: #212529;
  }
`;

class CarSelection extends Component {
  state = {
    selectedOption: null
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    this.props.handleCarId(selectedOption);
  };
  render() {
    const { selectedOption } = this.state;
    const { options } = this.props;
    let cars = [];
    if (options) {
      options.map(car => {
        if (car.status === "pending") {
          cars.push({ value: car.id, label: car.model });
        }
        return null;
      });
    }

    return (
      <CarSelector
        value={selectedOption}
        onChange={this.handleChange}
        options={cars}
      />
    );
  }
}

export default CarSelection;
