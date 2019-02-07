import React from "react";
import { Link } from "react-router-dom";
import classes from "./NotFound.module.css";
import MyButton from "../MyButton/MyButton";

const NotFound = () => {
  return (
    <div className={classes.PageWrapper}>
      <h1 className={classes.Title}>Page not Found</h1>
      <Link to="/" className={classes.HomeButton}>
        <MyButton title="Home" />
      </Link>
    </div>
  );
};

export default NotFound;
