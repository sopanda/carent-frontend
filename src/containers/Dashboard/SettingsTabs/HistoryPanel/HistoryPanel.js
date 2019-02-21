import React, { Fragment } from "react";
import { Table } from "reactstrap";
import {
  TableHead,
  TableRowCell,
  TableRow
} from "../../../../components/MyTable/MyTable";
import { Link } from "react-router-dom";

const HistoryPanel = props => {
  const { bookings } = props;
  return (
    <Fragment>
      <Table>
        <thead>
          <tr>
            <TableHead>#</TableHead>
            <TableHead>Car</TableHead>
            <TableHead>Renter</TableHead>
            <TableHead>Owner</TableHead>
            <TableHead>From</TableHead>
            <TableHead>Till</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Total</TableHead>
          </tr>
        </thead>
        <tbody>
          {bookings.length
            ? bookings.map((booking, i) => (
                <TableRow key={i}>
                  <TableRowCell>{booking.id}</TableRowCell>
                  <TableRowCell>
                    <Link to={`/cars/${booking.car.id}`}>
                      {booking.car.model}
                    </Link>
                  </TableRowCell>
                  <TableRowCell>
                    <Link to={`/users/${booking.renter.id}`}>
                      @{booking.renter.username}
                    </Link>
                  </TableRowCell>
                  <TableRowCell>
                    <Link to={`/users/${booking.car.owner.id}`}>
                      @{booking.car.owner.username}
                    </Link>
                  </TableRowCell>
                  <TableRowCell>{booking.start_date}</TableRowCell>
                  <TableRowCell>{booking.end_date}</TableRowCell>
                  <TableRowCell>{booking.status}</TableRowCell>
                  <TableRowCell>{booking.price}$</TableRowCell>
                </TableRow>
              ))
            : null}
        </tbody>
      </Table>
    </Fragment>
  );
};

export default HistoryPanel;
