import React, { Component, Fragment } from "react";
import CarsMapContainer from "../../components/Map/CarsMapContainer/CarsMapContainer";
import GeoLocation from "../../components/GeoLocation/GeoLocation";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      /* Lviv coordination */
      latitude: 49.83826,
      longitude: 24.02324
    };
  }

  /*getting data about user position from child component*/
  coordsHandler = (latitude, longitude) => {
    this.setState({ latitude, longitude });
  };

  render() {
    return (
      <Fragment>
        <GeoLocation userLocation={this.coordsHandler} />
        <CarsMapContainer
          location={{ lat: this.state.latitude, lng: this.state.longitude }}
        />
      </Fragment>
    );
  }
}
