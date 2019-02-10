import React, { Fragment } from "react";
import { ListGroup, ListGroupItem, Col } from "reactstrap";
import styled from "styled-components";
import MyButton from "../../../../components/MyButton/MyButton";

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

const RequestsPanel = props => {
  return (
    <Fragment>
      <Col md="6">
        <RequestWrapper>
          <ListGroup>
            <ListItem>Order: #4333</ListItem>
            <ListItem>User: Philly Collins</ListItem>
            <ListItem>Car: Subaru Imperia</ListItem>
            <ListItem>From: 14:00 22/09/2019</ListItem>
            <ListItem>Till: 14:12 25/12/2019</ListItem>
            <ListItem>Status: accepted</ListItem>
          </ListGroup>
          <ButtonGroup>
            <DecisionButton title="Accept request" />
            <DecisionButton title="Reject request" />
          </ButtonGroup>
        </RequestWrapper>
      </Col>
    </Fragment>
  );
};

export default RequestsPanel;
