import React, { Component } from "react";
import Home from "./containers/Home/Home";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
