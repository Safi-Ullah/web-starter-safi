import React from 'react';
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, Circle } from "react-google-maps";

export default compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `calc(100vh - 64px)` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)((props) =>
    <GoogleMap defaultZoom={15}
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
            props.userLocation && <Circle center={{ lat: props.userLocation.lat, lng: props.userLocation.lon }}
                radius={35}
                options={{
                    strokeColor: '#FF0000',
                    strokeOpacity: 1,
                    strokeWeight: 2,
                    fillColor: '#FF0000',
                    fillOpacity: 0.6,
                }} />
        }
    </GoogleMap>
);