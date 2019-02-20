import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import CarMarker from "../CarMarker/CarMarker";

const CarsMap = withScriptjs(
  withGoogleMap(props => {
    const { cars } = props;
    console.log(cars);
    const markers =
      cars.length !== 0
        ? cars.map(car => {
            let marker = (
              <CarMarker
                key={car.id}
                id={car.id}
                location={{
                  lat: car.latitude,
                  lng: car.longitude
                }}
                closeMarkers={props.closeOtherMarkers}
                carInfo={car}
                activeMarker={car.id === props.activeMarker ? true : false}
              />
            );
            return marker;
          })
        : null;
    return (
      <GoogleMap defaultZoom={11} center={props.location}>
        {markers}
      </GoogleMap>
    );
  })
);

export default CarsMap;
