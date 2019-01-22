import React from "react";
import classes from "./MyButton.css";

const MyButton = props => {
  return <button className={classes.MyButton}>{props.children}</button>;
};

export default MyButton;
