import React, { Component, Fragment } from "react";
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
import { fetchMyRequests } from "../../../actions/request.actions";

class SettingsTabs extends Component {
  componentDidMount = () => {
    this.props.onFetchProfile();
    this.props.onFetchMyCars();
    this.props.onFetchRequests();
  };

  shouldComponentUpdate = nextProps => {
    return (
      nextProps.myCars !== this.props.myCars ||
      nextProps.requests !== this.props.requests
    );
  };

  render() {
    const { profile, myCars, isCarsFetched, requests } = this.props;
    return (
      <Tabs>
        <Container>
          <Row>
            <Col md="2">
              <TabList>
                <Tab>Requests</Tab>
                <Tab>My orders</Tab>
                <Tab>My cars</Tab>
                <Tab>Your Account</Tab>
              </TabList>
            </Col>
            <Col md="10">
              <TabPanel>
                {requests.length !== 0 ? (
                  <Fragment>
                    <SettingsTitle>Your offer requests:</SettingsTitle>
                    <Row>
                      <RequestsPanel orders={requests} />
                    </Row>
                  </Fragment>
                ) : (
                  <SettingsTitle>You don't have any requests</SettingsTitle>
                )}
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
    isCarsFetched: state.cars.fetchingCars,
    requests: state.request.myRequests
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchProfile: () => dispatch(fetchProfile()),
    onFetchMyCars: () => dispatch(fetchMyCars()),
    onFetchRequests: () => dispatch(fetchMyRequests())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsTabs);
