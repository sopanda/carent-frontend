import React, { Component, Fragment } from "react";
import Home from "./containers/Home/Home";
import { Switch, Router, Route } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Offer from "./components/Offer/Offer";
import Dashboard from "./containers/Dashboard/Dashboard";
import NotFound from "./components/NotFound/NotFound";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import AboutPage from "./components/AboutPage/AboutPage";
import ContactPage from "./components/ContactPage/ContactPage";
import { history } from "./helpers/history";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router history={history}>
          <Layout>
            <Switch>
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegisterPage} />
              <PrivateRoute exact path="/" component={Home} />
              <PrivateRoute exact path="/offer/:id" component={Offer} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/contact" component={ContactPage} />
              <PrivateRoute exact path="/about" component={AboutPage} />
              <PrivateRoute path="*" component={NotFound} />
            </Switch>
          </Layout>
        </Router>
      </Fragment>
    );
  }
}

export default App;
