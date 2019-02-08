import React, { Component } from "react";
import { Marker, InfoWindow } from "react-google-maps";
import CarMapCard from "../CarMapCard/CarMapCard";
// import carMarker from "../../../assets/carMarker.png";

export class CarMarker extends Component {
  state = {
    isOpen: false,
    activeMarker: this.props.activeMarker
  };

  toggleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen }, () => {
      if (!this.state.isOpen) {
        this.setState({ activeMarker: false }, () => {
          this.props.closeMarkers(null);
        });
      } else {
        this.props.closeMarkers(this.props.uid);
      }
    });
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ activeMarker: nextProps.activeMarker });
  }

  render() {
    return (
      <Marker position={this.props.location} onClick={this.toggleOpen}>
        {this.state.isOpen && this.state.activeMarker ? (
          <InfoWindow max-width={350} defaultPosition={this.props.location}>
            <CarMapCard />
          </InfoWindow>
        ) : null}
      </Marker>
    );
  }
}

export default CarMarker;
