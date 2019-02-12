import React, { Fragment } from "react";
import MyTable from "../../../../components/MyTable/MyTable";
import MyButton from "../../../../components/MyButton/MyButton";
import styled from "styled-components";
import {
  Tab,
  TabList,
  TabPanel,
  Tabs
} from "../../../../components/TabsStyling/index";

const NewOffer = styled(MyButton)`
  max-width: fit-content;
  float: right;
`;

const RowTabs = styled(Tabs)`
  display: block;
`;

const orders_comp = [
  {
    id: 1,
    car: "Audi A6",
    username: "statecrown",
    start: "14:30 26/02/2019",
    till: "14:30 26/02/2019",
    status: "complete"
  },
  {
    id: 2,
    car: "Subaru Imperia",
    username: "hellboy",
    start: "20:00 26/05/2019",
    till: "21:30 26/05/2019",
    status: "complete"
  },
  {
    id: 3,
    car: "Ferrari",
    username: "rudik",
    start: "16:25 01/02/2019",
    till: "14:30 22/03/2019",
    status: "complete"
  }
];

const orders_in = [
  {
    id: 5,
    car: "Subaru Imperia",
    username: "panda",
    start: "20:00 6/05/2019",
    till: "21:30 6/05/2019",
    status: "in progress"
  },
  {
    id: 7,
    car: "Ferrari",
    username: "hollybary",
    start: "20:00 2/05/2019",
    till: "21:30 2/05/2019",
    status: "in progress"
  }
];

const OrderPanel = props => {
  return (
    <Fragment>
      <RowTabs>
        <TabList>
          <Tab>In progress</Tab>
          <Tab>Complete</Tab>
        </TabList>
        <TabPanel>
          <MyTable data={orders_in} />
          <NewOffer title="Create new offer" />
        </TabPanel>
        <TabPanel>
          <MyTable data={orders_comp} />
          <NewOffer title="Create new offer" />
        </TabPanel>
      </RowTabs>
    </Fragment>
  );
};

export default OrderPanel;
