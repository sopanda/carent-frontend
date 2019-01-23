import React, { Component, Fragment } from "react";
import Home from "./containers/Home/Home";
import { Switch, Router, Route } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Offer from "./components/Offer/Offer";
import Dashboard from "./containers/Dashboard/Dashboard";
import NotFound from "./components/NotFound/NotFound";
import { connect } from "react-redux";
import { history } from "./helpers";
import { alertActions } from "./actions";
// import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import AboutPage from "./components/AboutPage/AboutPage";
import ContactPage from "./components/ContactPage/ContactPage";

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
          <Layout>
            <Switch>
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegisterPage} />
              <Route exact path="/" component={Home} />
              <Route exact path="/offer" component={Offer} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/contact" component={ContactPage} />
              <Route exact path="/about" component={AboutPage} />
              <Route path="*" component={NotFound} />
            </Switch>
          </Layout>
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
