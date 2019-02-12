import React, { Fragment, Component } from "react";
import MyTable from "../../../../components/MyTable/MyTable";
import MyButton from "../../../../components/MyButton/MyButton";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NewCar = styled(MyButton)`
  max-width: fit-content;
  float: right;
`;

// const cars = [
//   {
//     id: 1,
//     car: "Audi A6",
//     status: "in use"
//   },
//   {
//     id: 2,
//     car: "Subaru Imperia",
//     status: "available"
//   },
//   {
//     id: 3,
//     car: "Ferrari",
//     status: "in use"
//   }
// ];

class CarsPanel extends Component {
  render() {
    return (
      <Fragment>
        <MyTable data={this.props.cars} type="cars" />
        <Link to="/new_car">
          <NewCar title="Create new car" />
        </Link>
      </Fragment>
    );
  }
}

export default CarsPanel;
