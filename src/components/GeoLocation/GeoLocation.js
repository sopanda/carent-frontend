import React, { PureComponent } from "react";
import Geolocation from "react-geolocation";

export default class GeoLocation extends PureComponent {
  handlePosition = position => {
    const { latitude, longitude } = position.coords;
    this.props.userLocation(latitude, longitude);
  };

  render() {
    return <Geolocation onSuccess={this.handlePosition} />;
  }
}
