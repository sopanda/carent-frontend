import React, { Component, Fragment } from "react";
import CarsMapContainer from "../../components/Map/CarsMapContainer/CarsMapContainer";
import GeoLocation from "../../components/GeoLocation/GeoLocation";
import { connect } from "react-redux";
import { fetchAllCars } from "../../actions/cars.actions";
import { setMyLocation } from "../../actions/user.actions";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /* Lviv coordination */
      location: { latitude: 49.83826, longitude: 24.02324, range: 50 }
    };
  }

  /*getting data about user position from child component*/
  coordsHandler = (latitude, longitude) => {
    this.setState({
      location: {
        ...this.state.location,
        latitude: latitude,
        longitude: longitude
      }
    });
  };

  componentDidUpdate(prevState) {
    if (prevState.location !== this.state.location) {
      this.props.onSetMyLocation(this.state.location);
      setTimeout(() => {
        this.props.onFetchCars(this.state.location);
      }, 500);
    }
  }

  render() {
    return (
      <Fragment>
        <GeoLocation userLocation={this.coordsHandler} />
        <CarsMapContainer
          location={{
            lat: this.state.location.latitude,
            lng: this.state.location.longitude
          }}
        />
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchCars: location => dispatch(fetchAllCars(location)),
    onSetMyLocation: location => dispatch(setMyLocation(location))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Home);
