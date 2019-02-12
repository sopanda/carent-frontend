import React, { Component } from "react";
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
import { connect } from "react-redux";
import { fetchProfile } from "../../../actions/user.actions";
import { fetchMyCars } from "../../../actions/cars.actions";
import { SettingsTitle } from "../../../components/SettingsTitle/SettingsTitle";

class SettingsTabs extends Component {
  componentDidMount = () => {
    this.props.onFetchProfile();
    this.props.onFetchMyCars();
  };

  render() {
    const { profile, myCars } = this.props;
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
                <CarsPanel cars={myCars} />
              </TabPanel>
              <TabPanel>
                <VerificationPanel user={profile} />
              </TabPanel>
            </Col>
          </Row>
        </Container>
      </Tabs>
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.user.profile,
    myCars: state.cars.myCars
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchProfile: () => dispatch(fetchProfile()),
    onFetchMyCars: () => dispatch(fetchMyCars())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsTabs);
