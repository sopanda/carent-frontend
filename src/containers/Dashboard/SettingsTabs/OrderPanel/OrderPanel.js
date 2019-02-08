import React, { Fragment } from "react";
import MyTable from "../../../../components/MyTable/MyTable";
import MyButton from "../../../../components/MyButton/MyButton";
import styled from "styled-components";

const NewOffer = styled(MyButton)`
  max-width: fit-content;
  float: right;
`;

const orders = [
  {
    id: 1,
    car: "Audi A6",
    start: "14:30 26/02/2019",
    till: "14:30 26/02/2019",
    status: "complete"
  },
  {
    id: 2,
    car: "Subaru Imperia",
    start: "20:00 26/05/2019",
    till: "21:30 26/05/2019",
    status: "in progress"
  },
  {
    id: 3,
    car: "Ferrari",
    start: "16:25 01/02/2019",
    till: "14:30 22/03/2019",
    status: "available"
  }
];

const OrderPanel = props => {
  return (
    <Fragment>
      <MyTable data={orders} />
      <NewOffer title="Create new offer" />
    </Fragment>
  );
};

export default OrderPanel;
