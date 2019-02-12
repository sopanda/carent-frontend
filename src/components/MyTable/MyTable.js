import React, { Component } from "react";
import { Table } from "reactstrap";
import styled from "styled-components";
import CarsModal from "../../components/Modals/CarModal/CarModal";
import { connect } from "react-redux";
import { deleteCarById } from "../../actions/cars.actions";

const TableHead = styled.th`
  border-top: none !important;
  border-bottom: 1px solid #3de6af !important;
`;

const TableRowCell = styled.th`
  border-top: 1px solid #3de6af !important;
`;

const TableRow = styled.tr`
  &:hover {
    background-color: #32bb8d;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    cursor: pointer;
  }
`;

class MyTable extends Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();
  }

  handleCarRowClick = car => {
    this.child.current.toggle();
    this.child.current.handleCar(car);
  };

  render() {
    const { data, type } = this.props;
    let information;
    if (type !== "cars") {
      information = data.length
        ? data.map((order, i) => (
            <TableRow key={i}>
              <TableRowCell>{order.id}</TableRowCell>
              <TableRowCell>{order.car}</TableRowCell>
              <TableRowCell>@{order.username}</TableRowCell>
              <TableRowCell>{order.start}</TableRowCell>
              <TableRowCell>{order.till}</TableRowCell>
              <TableRowCell>{order.status}</TableRowCell>
            </TableRow>
          ))
        : null;
    } else {
      information =
        data !== undefined
          ? data.map((car, i) => (
              <TableRow key={i} onClick={() => this.handleCarRowClick(car)}>
                <TableRowCell>{car.id}</TableRowCell>
                <TableRowCell>{car.model}</TableRowCell>
                <TableRowCell>{car.year}</TableRowCell>
                <TableRowCell>{car.status}</TableRowCell>
              </TableRow>
            ))
          : null;
    }

    const headers =
      type !== "cars" ? (
        <tr>
          <TableHead>#</TableHead>
          <TableHead>Car</TableHead>
          <TableHead>User</TableHead>
          <TableHead>From</TableHead>
          <TableHead>Till</TableHead>
          <TableHead>Status</TableHead>
        </tr>
      ) : (
        <tr>
          <TableHead>#</TableHead>
          <TableHead>Car</TableHead>
          <TableHead>Year</TableHead>
          <TableHead>Status</TableHead>
        </tr>
      );
    return (
      <Table>
        <thead>{headers}</thead>
        <tbody>{information}</tbody>
        <CarsModal
          ref={this.child}
          deleteCarById={this.props.onDeleteCarById}
        />
      </Table>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDeleteCarById: id => dispatch(deleteCarById(id))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(MyTable);
