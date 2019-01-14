import React from 'react';
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

export default compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `100vh` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)((props) =>
    <GoogleMap defaultZoom={8}
        center={
            props.selectedRestaurant
                ? { lat: props.selectedRestaurant.lat, lng: props.selectedRestaurant.lon }
                : { lat: 41.881832, lng: -87.623177 }
        }>
        {
            props.isMarkerShown && <Marker position={
                props.selectedRestaurant
                    ? { lat: props.selectedRestaurant.lat, lng: props.selectedRestaurant.lon }
                    : { lat: 41.881832, lng: -87.623177 }
            } />
        }
    </GoogleMap>
);