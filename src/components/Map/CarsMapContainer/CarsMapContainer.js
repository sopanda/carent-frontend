import React, { Component, Fragment } from "react";
import CarsMap from "../CarsMap/CarsMap";

export default class CarsMapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: [],
      location: this.props.location,
      activeMarker: null
    };
  }

  /* check if location from props changed and re-render if true */
  componentDidUpdate(prevProps) {
    if (prevProps.location !== this.props.location) {
      this.setState({
        location: this.props.location
      });
    }
  }

  closeOtherMarkers = uid => {
    this.setState({ activeMarker: uid });
  };

  render() {
    return (
      <Fragment>
        <CarsMap
          cars={this.state.cars}
          location={this.state.location}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyA8FuWiGjUL8rA-BZ_eJnTpPl2hKqvMRLI&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `600px`, width: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          activeMarker={this.state.activeMarker}
          closeOtherMarkers={this.closeOtherMarkers}
        />
      </Fragment>
    );
  }
}