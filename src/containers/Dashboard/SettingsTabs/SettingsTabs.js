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
import { fetchDataForOrdersPanel } from "../../../actions/orders.actions";
import styled from "styled-components";
import MyButton from "../../../components/MyButton/MyButton";
import { Link } from "react-router-dom";

const NoRequestAlert = styled.div`
  text-align: center;
  background: #001220;
`;

const AdminLink = styled(Link)`
  text-align: center;
  display: block;
  margin: 10px;
`;

class SettingsTabs extends Component {
  componentDidMount = () => {
    this.props.onFetchProfile();
    this.props.onFetchMyCars();
    this.props.onFetchRequests();
    this.props.onFetchDataForOrdersPanel();
  };

  shouldComponentUpdate = nextProps => {
    return (
      nextProps.myCars !== this.props.myCars ||
      nextProps.requests !== this.props.requests ||
      nextProps.profile !== this.props.profile ||
      nextProps.myLoans !== this.props.myLoans ||
      nextProps.myOrders !== this.props.myOrders
    );
  };

  render() {
    const {
      profile,
      myCars,
      isCarsFetched,
      requests,
      myLoans,
      myOrders,
      isLoansFetched,
      isOrdersFetched
    } = this.props;
    return (
      <Tabs>
        <Container>
          <Row>
            <Col md="2">
              <TabList>
                <Tab>My orders</Tab>
                <Tab>Requests</Tab>
                <Tab>My cars</Tab>
                <Tab>Your Account</Tab>
              </TabList>
              {profile.role === "admin" ? (
                <AdminLink to={`/admin`}>
                  <MyButton title={"Admin panel"} />
                </AdminLink>
              ) : null}
            </Col>
            <Col md="10">
              <TabPanel>
                {isLoansFetched && isOrdersFetched ? (
                  <OrderPanel orders={myOrders} loans={myLoans} />
                ) : (
                  <Spinner />
                )}
              </TabPanel>
              <TabPanel>
                {requests.length !== 0 ? (
                  <Fragment>
                    <SettingsTitle>Your offer requests:</SettingsTitle>
                    <Row>
                      <RequestsPanel orders={requests} />
                    </Row>
                  </Fragment>
                ) : (
                  <NoRequestAlert>You don't have any requests</NoRequestAlert>
                )}
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
    isCarsFetched: state.cars.fetchedCars,
    requests: state.request.myRequests,
    myLoans: state.orders.loans,
    myOrders: state.orders.orders,
    isLoansFetched: state.orders.fetchedLoans,
    isOrdersFetched: state.orders.fetchedOrders
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchProfile: () => dispatch(fetchProfile()),
    onFetchMyCars: () => dispatch(fetchMyCars()),
    onFetchRequests: () => dispatch(fetchMyRequests()),
    onFetchDataForOrdersPanel: () => dispatch(fetchDataForOrdersPanel())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsTabs);
