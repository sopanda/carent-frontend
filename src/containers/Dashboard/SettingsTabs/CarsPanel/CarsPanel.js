import React, { Fragment } from "react";
import MyTable from "../../../../components/MyTable/MyTable";
import MyButton from "../../../../components/MyButton/MyButton";
import styled from "styled-components";

const NewCar = styled(MyButton)`
  max-width: fit-content;
  float: right;
`;

const cars = [
  {
    id: 1,
    car: "Audi A6",
    status: "in use"
  },
  {
    id: 2,
    car: "Subaru Imperia",
    status: "available"
  },
  {
    id: 3,
    car: "Ferrari",
    status: "in use"
  }
];

const CarsPanel = props => {
  return (
    <Fragment>
      <MyTable data={cars} type="cars" />
      <NewCar title="Add new car" />
    </Fragment>
  );
};

export default CarsPanel;
