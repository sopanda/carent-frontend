import React, { Fragment } from "react";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";

const layout = props => (
  <Fragment>
    <Toolbar />
    <main>{props.children}</main>
  </Fragment>
);

export default layout;
