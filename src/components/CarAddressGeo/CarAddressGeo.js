import React, { Component, Fragment } from "react";
import { Input, Button } from "reactstrap";
import Geocode from "react-geocode";

class CarAddressGeo extends Component {
  handleClick = () => {
    Geocode.setApiKey("AIzaSyA8FuWiGjUL8rA-BZ_eJnTpPl2hKqvMRLI");
    Geocode.fromAddress("Eiffel Tower").then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
      },
      error => {
        console.error(error);
      }
    );
  };
  render() {
    return (
      <Fragment>
        <Input />
        <Button onClick={this.handleClick}>Search</Button>
      </Fragment>
    );
  }
}

export default CarAddressGeo;
