import React, { Fragment, Component } from "react";
import { ListGroup, ListGroupItem, Col } from "reactstrap";
import styled from "styled-components";
import MyButton from "../../../../components/MyButton/MyButton";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "../../../../components/Spinner/Spinner";
import {
  acceptRequest,
  declineRequests
} from "../../../../actions/request.actions";

const NavLink = styled(Link)`
  padding: 0 !important;
  color: #3de6af;
  &:hover {
    color: #32bb8d;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    text-decoration: none;
  }
`;

const RequestWrapper = styled.div`
  max-width: 350px;
  border: 1px solid rgb(61, 230, 175);
  background-color: #082336;
  padding: 10px 0;
  border-radius: 4%;
`;

const ListItem = styled(ListGroupItem)`
  background: transparent !important;
  border: none !important;
`;

const DecisionButton = styled(MyButton)`
  max-width: fit-content;
`;

const ButtonGroup = styled.div`
  text-align: center;
`;

class RequestsPanel extends Component {
  render() {
    return this.props.orders ? (
      <Fragment>
        {this.props.orders.map((order, i) => (
          <Col md="6" key={i}>
            <RequestWrapper>
              <ListGroup>
                <ListItem>Order: {`#${order.id}`}</ListItem>
                <ListItem>
                  User:{" "}
                  <NavLink to={`/users/${order.sender.id}`}>
                    {order.sender.first_name + " " + order.sender.last_name}
                  </NavLink>
                </ListItem>
                <ListItem>Car: {order.car.model}</ListItem>
                <ListItem>From: {order.car.start_date}</ListItem>
                <ListItem>Till: {order.car.end_date}</ListItem>
              </ListGroup>
              <ButtonGroup>
                <DecisionButton
                  title="Accept request"
                  onClick={() => this.props.onAccept(order.id)}
                />
                <DecisionButton
                  title="Reject request"
                  onClick={() => this.props.onDecline(order.id)}
                />
              </ButtonGroup>
            </RequestWrapper>
          </Col>
        ))}
      </Fragment>
    ) : null;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAccept: id => dispatch(acceptRequest(id)),
    onDecline: id => dispatch(declineRequests(id))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(RequestsPanel);
