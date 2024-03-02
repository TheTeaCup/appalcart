import React from "react";
import {Marker} from "react-native-maps";
import {BusMarkerProps} from "../types";

const BusMarker = ({ title, latitude, longitude }: BusMarkerProps) => {
    return (
        <Marker
            coordinate={{
                latitude: latitude,
                longitude: longitude
            }}
            title={title}
            description={"Cool Bus Icon"}
        />
    );
}

export default BusMarker;