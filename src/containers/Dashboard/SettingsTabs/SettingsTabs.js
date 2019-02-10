import React from "react";
import { Container, Row, Col } from "reactstrap";
import {
  Tab,
  Tabs,
  TabList,
  TabPanel
} from "../../../components/TabsStyling/index";
import "react-tabs/style/react-tabs.css";
import OrderPanel from "./OrderPanel/OrderPanel";
import CarsPanel from "./CarsPanel/CarsPanel";
import VerificationPanel from "./VerificationPanel/VerificationPanel";
import RequestsPanel from "./RequestsPanel/RequestsPanel";
import { SettingsTitle } from "../../../components/SettingsTitle/SettingsTitle";

const SettingsTabs = props => {
  return (
    <Tabs>
      <Container>
        <Row>
          <Col md="2">
            <TabList>
              <Tab>Requests</Tab>
              <Tab>Orders</Tab>
              <Tab>Cars</Tab>
              <Tab>Verify account</Tab>
            </TabList>
          </Col>
          <Col md="10">
            <TabPanel>
              <SettingsTitle>Your offer requests:</SettingsTitle>
              <Row>
                <RequestsPanel />
              </Row>
            </TabPanel>
            <TabPanel>
              <OrderPanel />
            </TabPanel>
            <TabPanel>
              <CarsPanel />
            </TabPanel>
            <TabPanel>
              <VerificationPanel />
            </TabPanel>
          </Col>
        </Row>
      </Container>
    </Tabs>
  );
};

export default SettingsTabs;
