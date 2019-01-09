import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";

const CarsMap = withScriptjs(
  withGoogleMap(props => {
    return <GoogleMap defaultZoom={11} center={props.location} />;
  })
);

export default CarsMap;
