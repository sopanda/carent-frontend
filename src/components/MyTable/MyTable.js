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
    const { data } = this.props;
    let orders = data.length
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

    return (
      <Table>
        <thead>
          <tr>
            <TableHead>#</TableHead>
            <TableHead>Car</TableHead>
            <TableHead>From</TableHead>
            <TableHead>Till</TableHead>
            <TableHead>Status</TableHead>
          </tr>
        </thead>
        <tbody>{orders}</tbody>
      </Table>
    );
  }
}

export default MyTable;
