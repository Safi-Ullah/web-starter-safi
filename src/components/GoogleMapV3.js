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
    <GoogleMap defaultZoom={14} defaultCenter={{ lat: 41.881832, lng: -87.623177 }}>
        {
            props.isMarkerShown && props.restaurants
                ? props.restaurants.map(restaurant => {
                    return <Marker position={{ lat: restaurant.lat, lng: restaurant.lon }} />
                })
                : null
        }
    </GoogleMap>
);
