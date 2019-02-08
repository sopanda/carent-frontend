import React from "react";
import { Container, Row, Col } from "reactstrap";
import {
  Tab,
  Tabs,
  TabList,
  TabPanel
} from "../../../components/TabsStyling/index";
import "react-tabs/style/react-tabs.css";
import classes from "./SettingsTabs.module.css";
import OrderPanel from "./OrderPanel/OrderPanel";
import UserWidget from "../../../components/Offer/UserWidget/UserWidget";

const SettingsTabs = props => {
  return (
    <Tabs>
      <Container>
        <Row>
          <Col md="2">
            <TabList>
              <Tab>My account</Tab>
              <Tab>Orders</Tab>
              <Tab>Cars</Tab>
            </TabList>
          </Col>
          <Col md="10">
            <TabPanel>
              <UserWidget className={classes.Widget} />
            </TabPanel>
            <TabPanel>
              <OrderPanel />
            </TabPanel>
            <TabPanel>
              <h2>Any content 3</h2>
            </TabPanel>
          </Col>
        </Row>
      </Container>
    </Tabs>
  );
};

export default SettingsTabs;
