import React, { Component, Fragment } from "react";
import Home from "./containers/Home/Home";
import { Switch, Router, Route } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Order from "./components/Order/Order";
import Dashboard from "./containers/Dashboard/Dashboard";
import NotFound from "./components/NotFound/NotFound";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import ContactPage from "./components/ContactPage/ContactPage";
import { history } from "./helpers/history";
import UserProfile from "./components/UserProfile/UserProfile";
import NewCar from "./components/NewCar/NewCar";
import NewOrder from "./components/NewOrder/NewOrder";

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
              <PrivateRoute exact path="/order/:id" component={Order} />
              <PrivateRoute exact path="/users/:id" component={UserProfile} />
              <PrivateRoute exact path="/new_car" component={NewCar} />
              <PrivateRoute exact path="/new_order" component={NewOrder} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/contact" component={ContactPage} />
              <PrivateRoute path="*" component={NotFound} />
            </Switch>
          </Layout>
        </Router>
      </Fragment>
    );
  }
}

export default App;
