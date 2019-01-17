import React, { Component, Fragment } from "react";
import Home from "./containers/Home/Home";
import { Switch, Router, Route } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Offer from "./components/Offer/Offer";
import { connect } from "react-redux";
import { history } from "./helpers";
import { alertActions } from "./actions";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";

class App extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }
  render() {
    const { alert } = this.props;
    return (
      <Fragment>
        {alert.message && (
          <div className={`alert ${alert.type}`}>{alert.message}</div>
        )}
        <Router history={history}>
          <Switch>
            {/*<Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />*/}
            <Layout>
              <Route exact path="/" component={Home} />
              <Route exact path="/offer" component={Offer} />
            </Layout>
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert
  };
}

export default connect(mapStateToProps)(App);
