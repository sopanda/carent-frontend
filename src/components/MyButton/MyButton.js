import React from "react";
import classes from "./MyButton.module.css";

const MyButton = ({ title, className }) => {
  return (
    <button className={classes.MyButton + " " + className}>{title}</button>
  );
};

export default MyButton;
