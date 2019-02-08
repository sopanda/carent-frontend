import React, { Component } from "react";
import { Table } from "reactstrap";
import styled from "styled-components";

const TableHead = styled.th`
  border-top: none !important;
  border-bottom: 1px solid #3de6af !important;
`;

const TableRowCell = styled.th`
  border-top: 1px solid #3de6af !important;
`;

class MyTable extends Component {
  render() {
    const { data, type } = this.props;
    let information;
    if (type !== "cars") {
      information = data.length
        ? data.map((order, i) => (
            <tr key={i}>
              <TableRowCell>{order.id}</TableRowCell>
              <TableRowCell>{order.car}</TableRowCell>
              <TableRowCell>{order.start}</TableRowCell>
              <TableRowCell>{order.till}</TableRowCell>
              <TableRowCell>{order.status}</TableRowCell>
            </tr>
          ))
        : null;
    } else {
      information = data.length
        ? data.map((car, i) => (
            <tr key={i}>
              <TableRowCell>{car.id}</TableRowCell>
              <TableRowCell>{car.car}</TableRowCell>
              <TableRowCell>{car.status}</TableRowCell>
            </tr>
          ))
        : null;
    }

    const headers =
      type !== "cars" ? (
        <tr>
          <TableHead>#</TableHead>
          <TableHead>Car</TableHead>
          <TableHead>From</TableHead>
          <TableHead>Till</TableHead>
          <TableHead>Status</TableHead>
        </tr>
      ) : (
        <tr>
          <TableHead>#</TableHead>
          <TableHead>Car</TableHead>
          <TableHead>Status</TableHead>
        </tr>
      );
    return (
      <Table>
        <thead>{headers}</thead>
        <tbody>{information}</tbody>
      </Table>
    );
  }
}

export default MyTable;
