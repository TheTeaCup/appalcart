import React from "react";
import {Marker} from "react-native-maps";
import {BusMarkerProps} from "../types";

const BusMarker = ({title, latitude, longitude, color}: BusMarkerProps) => {
    return (
        <Marker
            coordinate={{
                latitude: latitude,
                longitude: longitude,
            }}
            title={title}
            pinColor={color}
        />
    );
};

export default BusMarker;
