import React, { Fragment } from "react";
import MyTable from "../../../../components/MyTable/MyTable";
import MyButton from "../../../../components/MyButton/MyButton";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  Tab,
  TabList,
  TabPanel,
  Tabs
} from "../../../../components/TabsStyling/index";

const NewOrder = styled(MyButton)`
  max-width: fit-content;
  float: right;
`;

const RowTabs = styled(Tabs)`
  display: block;
`;

const OrderPanel = props => {
  return (
    <Fragment>
      <RowTabs>
        <TabList>
          <Tab>My orders</Tab>
          <Tab>My loans</Tab>
        </TabList>
        <TabPanel>
          <MyTable data={props.orders} type="orders" />
        </TabPanel>
        <TabPanel>
          <MyTable data={props.loans} type="loans" />
        </TabPanel>
        <Link to="/new_order">
          <NewOrder title="Create new order" />
        </Link>
      </RowTabs>
    </Fragment>
  );
};

export default OrderPanel;
