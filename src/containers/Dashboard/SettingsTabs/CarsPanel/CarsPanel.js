import React, { Fragment, Component } from "react";
import MyTable from "../../../../components/MyTable/MyTable";
import MyButton from "../../../../components/MyButton/MyButton";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NewCar = styled(MyButton)`
  max-width: fit-content;
  float: right;
`;

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
