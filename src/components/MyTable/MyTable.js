import React, { Component, Fragment } from "react";
import { Table } from "reactstrap";
import styled from "styled-components";
import DeleteCarModal from "../../components/Modals/DeleteCarModal/DeleteCarModal";
import { connect } from "react-redux";
import { deleteCarById } from "../../actions/cars.actions";
import { Link } from "react-router-dom";
import CommentCreationModal from "../Modals/CommentCreationModal/CommentCreationModal";

const EmptyTable = styled.div`
  text-align: center;
  padding-bottom: 1rem;
  margin: 5px;
`;

export const TableHead = styled.th`
  border-top: none !important;
  border-bottom: 1px solid #3de6af !important;
`;

export const TableRowCell = styled.th`
  border-top: 1px solid #3de6af !important;
`;

export const TableRow = styled.tr`
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
    this.commentChild = React.createRef();
  }

  handleCarRowClick = car => {
    this.child.current.toggle();
    this.child.current.handleCar(car);
  };

  handleOrderRowClick = order => {
    this.commentChild.current.toggle();
    this.commentChild.current.handleOrder(order, this.props.type);
  };

  render() {
    const { data, type } = this.props;
    let information;
    if (type !== "cars") {
      information = data.length
        ? data.map((order, i) => (
            <TableRow
              key={i}
              onClick={
                order.status !== "complete" // DONT FORGET CHANGE TO ===
                  ? () => this.handleOrderRowClick(order)
                  : null
              }
            >
              <TableRowCell>{order.id}</TableRowCell>
              <TableRowCell>{order.model}</TableRowCell>
              <TableRowCell>
                <Link to={`/users/${order.renter.id}`}>
                  @{order.renter.username}
                </Link>
              </TableRowCell>
              <TableRowCell>
                <Link to={`/users/${order.owner.id}`}>
                  @{order.owner.username}
                </Link>
              </TableRowCell>
              <TableRowCell>{order.start_date}</TableRowCell>
              <TableRowCell>{order.end_date}</TableRowCell>
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
          <TableHead>Rented by</TableHead>
          <TableHead>Owner</TableHead>
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
      <Fragment>
        <Table>
          <thead>{headers}</thead>
          <tbody>{information}</tbody>
          <DeleteCarModal
            ref={this.child}
            deleteCarById={this.props.onDeleteCarById}
          />
          <CommentCreationModal ref={this.commentChild} />
        </Table>
        {!data.length && <EmptyTable>no data</EmptyTable>}
      </Fragment>
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
