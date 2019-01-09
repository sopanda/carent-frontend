import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import CarMarker from "../CarMarker/CarMarker";

const cars = [
  { uid: 1, latitude: 50.3949112, longitude: 24.2494693 },
  { uid: 2, latitude: 50.4000432, longitude: 24.1995349 },
  { uid: 3, latitude: 50.3890432, longitude: 24.222349 },
  { uid: 4, latitude: 50.3239112, longitude: 24.243693 },
  { uid: 5, latitude: 50.4024332, longitude: 24.154349 },
  { uid: 6, latitude: 50.4230432, longitude: 24.125349 }
];

const CarsMap = withScriptjs(
  withGoogleMap(props => {
    const markers = cars.map(car => {
      let marker = (
        <CarMarker
          key={car.uid}
          uid={car.uid}
          location={{
            lat: car.latitude,
            lng: car.longitude
          }}
          closeMarkers={props.closeOtherMarkers}
          activeMarker={car.uid === props.activeMarker ? true : false}
        />
      );
      return marker;
    });
    return (
      <GoogleMap defaultZoom={11} center={props.location}>
        {markers}
        {/* my home lat: 50.3949112, lng: 24.2494693 */}
      </GoogleMap>
    );
  })
);

export default CarsMap;
