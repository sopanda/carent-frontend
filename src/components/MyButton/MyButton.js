import React from "react";
import classes from "./MyButton.module.css";

const MyButton = ({ title, className, onClick, ...rest }) => {
  return (
    <button
      className={classes.MyButton + " " + className}
      onClick={onClick}
      {...rest}
    >
      {title}
    </button>
  );
};

export default MyButton;
