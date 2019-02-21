import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { history } from "../../helpers/history";
import { Tab, Tabs, TabList, TabPanel } from "../TabsStyling/index";
import { Col, Row, Container } from "reactstrap";
import styled from "styled-components";
import { fetchAllUsers } from "../../actions/user.actions";
import UsersTable from "../UsersTable/UsersTable";

const Wrapper = styled.div`
  margin: 20px 0;
`;

class AdminPage extends PureComponent {
  componentDidMount() {
    if (this.props.role !== "admin") {
      history.push("/");
    }
    this.props.onFetchUsers();
  }

  render() {
    const { users } = this.props;
    return (
      <Wrapper>
        <Container>
          <Row>
            <Col>
              <Tabs>
                <Container>
                  <Row>
                    <Col md="2">
                      <TabList>
                        <Tab>Users</Tab>
                        <Tab>Unverified users</Tab>
                      </TabList>
                    </Col>
                    <Col md="10">
                      <TabPanel>
                        <UsersTable users={users} />
                      </TabPanel>
                      <TabPanel>
                        <UsersTable users={users} verification={true} />
                      </TabPanel>
                    </Col>
                  </Row>
                </Container>
              </Tabs>
            </Col>
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    role: state.user.role,
    users: state.user.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchUsers: () => dispatch(fetchAllUsers())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminPage);
