import React from "react";
import classes from "./MyButton.module.css";

const MyButton = ({ title, className, onClick }) => {
  return (
    <button className={classes.MyButton + " " + className} onClick={onClick}>
      {title}
    </button>
  );
};

export default MyButton;
