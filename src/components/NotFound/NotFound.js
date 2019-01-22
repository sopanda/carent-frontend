import React from "react";
import { Link } from "react-router-dom";
import classes from "./NotFound.css";
import MyButton from "../Navigation/MyButton/MyButton";

const NotFound = () => {
  return (
    <div className={classes.PageWrapper}>
      <h1 className={classes.Title}>Page not Found</h1>
      <Link to="/" className={classes.HomeButton}>
        <MyButton>Home</MyButton>
      </Link>
    </div>
  );
};

export default NotFound;
