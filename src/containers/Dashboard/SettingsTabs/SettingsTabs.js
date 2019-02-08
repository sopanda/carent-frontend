import React from "react";
import { Container, Row, Col } from "reactstrap";
import {
  Tab,
  Tabs,
  TabList,
  TabPanel
} from "../../../components/TabsStyling/index";
import "react-tabs/style/react-tabs.css";

const SettingsTabs = props => {
  return (
    <Tabs>
      <Container>
        <Row>
          <Col md="2">
            <TabList>
              <Tab>Orders</Tab>
              <Tab>Cars</Tab>
              <Tab>Verify account</Tab>
            </TabList>
          </Col>
          <Col md="10">
            <TabPanel>
              <h2>Any content 1</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
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
