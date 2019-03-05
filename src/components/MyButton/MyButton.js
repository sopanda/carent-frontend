import React from "react";
import classes from "./MyButton.module.css";

const MyButton = ({ title, className, onClick, disabled }) => {
  return (
    <button
      className={classes.MyButton + " " + className}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default MyButton;
