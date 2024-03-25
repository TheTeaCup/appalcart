import React, {useEffect, useState} from "react";
import {StyleSheet} from "react-native";
// import { useTheme } from "@react-navigation/native";
import Map from "../components/map";
import BusMarker from "../components/busMarker";
import useSelectedRoutes from "../utils/useSelectedRoutes";
import {Polyline} from "react-native-maps";
import StopMarker from "../components/stopMarker";
import MapViewDirections from "react-native-maps-directions";

const Home = () => {
    // const { colors } = useTheme();

    const [vehicles, setVehicles] = useState([]);
    const [busInfo, setBusInfo] = useState([]);
    const [stops, setStops] = useState([]);
    const { selectedRoutes, handleRouteSelection } = useSelectedRoutes();

    const fetchData = async () => {
        try {
            const vehiclesFetch = await fetch(
                "https://appalcart.pages.dev/api/vehicles"
                // "https://appalcart.etaspot.net/service.php?service=get_vehicles&includeETAData=1&inService=1&orderedETAArray=1",
            );
            const vehiclesData = await vehiclesFetch.json();
            if (vehiclesData.get_vehicles) {
                setVehicles(vehiclesData.get_vehicles);
            }
        } catch (e) {
            console.error("vehicles fetch: \n" + e);
        }
    };

    const fetchBusInfo = async () => {
        try {
            const routesFetch = await fetch(
                "https://appalcart.pages.dev/api/routes"
                // "https://appalcart.etaspot.net/service.php?service=get_routes",
            );
            const routesData = await routesFetch.json();
            if (routesData.get_routes) {
                setBusInfo(routesData.get_routes);
            }
        } catch (e) {
            console.error("bus info fetch: \n" + e);
        }
    };

    const fetchStops = async () => {
        try {
            const stopsFetch = await fetch(
                "https://appalcart.pages.dev/api/stops"
                // "https://appalcart.etaspot.net/service.php?service=get_stops",
            );
            const stopsData = await stopsFetch.json();
            if (stopsData.get_stops) {
                setStops(stopsData.get_stops);
            }
        } catch (e) {
            console.error("stops fetch: \n" + e);
        }
    };

    useEffect(() => {
        fetchData();
        fetchBusInfo();
        fetchStops();

        const interval = setInterval(() => {
            fetchData();
        }, 500);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (selectedRoutes.length === 0) {
            handleRouteSelection(3);
        }
    }, [selectedRoutes]);

    const getStopsWithRoutes = () => {
        return stops
            .filter(stop => selectedRoutes.includes(stop.rid)) // Filter stops based on selected routes
            .map(stop => {
                const route = busInfo.find(route => route.stops.includes(stop.id));
                return { ...stop, route };
            });
    };

    return (
        <Map>
            {/* show all the routes */}

            {/*<Polyline*/}
            {/*    coordinates={getStopsWithRoutes().map(stop => ({*/}
            {/*        latitude: stop.lat,*/}
            {/*        longitude: stop.lng,*/}
            {/*    }))}*/}
            {/*    strokeColor="blue"*/}
            {/*    strokeWidth={2}*/}
            {/*/>*/}


            {/*<Line coordinates={*/}
            {/*  stops.map((stop) => ({*/}
            {/*    latitude: stop.lat,*/}
            {/*    longitude: stop.lng,*/}
            {/*  }))*/}
            {/*}/>*/}

            {/*{stops.map((stop, index) => {*/}
            {/*    return (*/}
            {/*        <StopMarker*/}
            {/*            key={index}*/}
            {/*            title={stop.name}*/}
            {/*            color={"black"}*/}
            {/*            longitude={stop.lng}*/}
            {/*            latitude={stop.lat}*/}
            {/*        />*/}
            {/*    )*/}
            {/*})}*/}
            {/* show only the bus that is selected
           from selectedRoutes use vehicles for the list of all routes
           */}

            {vehicles
                .filter(vehicle => selectedRoutes.includes(vehicle.routeID))
                .map((vehicle, index) => {
                    if (vehicle.inService === 1) {
                        return (
                            <>
                                <BusMarker
                                    key={index}
                                    title={
                                        busInfo.find((route) => route.id === vehicle.routeID)?.name ||
                                        "No Name"
                                    }
                                    color={
                                        busInfo.find((route) => route.id === vehicle.routeID)
                                            ?.color || "black"
                                    }
                                    longitude={vehicle.lng}
                                    latitude={vehicle.lat}
                                />
                            </>
                        );
                    }
                })}

            {getStopsWithRoutes().map((stop, index) => (
                <StopMarker
                    key={index}
                    title={stop.name}
                    color={stop.route ? stop.route.color : "black"}
                    longitude={stop.lng}
                    latitude={stop.lat}
                />
            ))}

            {/*{getStopsWithRoutes().map((stop, index) => (*/}
            {/*    <MapViewDirections*/}
            {/*        key={index}*/}
            {/*        apikey={""}*/}
            {/*        origin={{ latitude: stop.lat, longitude: stop.lng }}*/}
            {/*        destination={{ latitude: stop.route.lat, longitude: stop.route.lng }}*/}
            {/*        strokeWidth={3}*/}
            {/*        strokeColor={stop.route.color}*/}
            {/*    />*/}
            {/*))}*/}
        </Map>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
