import React from 'react';
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, Circle } from "react-google-maps";

export default compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `93vh` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)((props) =>
    <GoogleMap defaultZoom={16}
        center={
            props.userLocation
                ? { lat: props.userLocation.lat, lng: props.userLocation.lon }
                : props.restaurants
                    ? { lat: props.restaurants[0].lat, lng: props.restaurants[0].lon }
                    : { lat: 41.881832, lng: -87.623177 }
        }>
        {
            props.isMarkerShown && props.restaurants
                ? props.restaurants.map(restaurant => {
                    return <Marker position={{ lat: restaurant.lat, lng: restaurant.lon }} />
                })
                : null
        }
        {
            props.userLocation && <Circle center={{ lat: props.userLocation.lat, lng: props.userLocation.lon }} radius={25} />
        }
    </GoogleMap>
);
