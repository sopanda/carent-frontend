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
import Spinner from "../../../components/Spinner/Spinner";

class SettingsTabs extends Component {
  componentDidMount = () => {
    this.props.onFetchProfile();
    this.props.onFetchMyCars();
  };

  shouldComponentUpdate = nextProps => {
    return nextProps.myCars !== this.props.myCars;
  };

  render() {
    const { profile, myCars, isCarsFetched } = this.props;
    return (
      <Tabs>
        <Container>
          <Row>
            <Col md="2">
              <TabList>
                <Tab>Requests</Tab>
                <Tab>My orders</Tab>
                <Tab>My cars</Tab>
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
                <OrderPanel cars={myCars} />
              </TabPanel>
              <TabPanel>
                {!isCarsFetched ? <CarsPanel cars={myCars} /> : <Spinner />}
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
    myCars: state.cars.myCars,
    isCarsFetched: state.cars.fetchingCars
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
