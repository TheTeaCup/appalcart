import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
// import { useTheme } from "@react-navigation/native";
import Map from "../components/map";
import BusMarker from "../components/marker";
import useSelectedRoutes from "../utils/useSelectedRoutes";

const Home = () => {
  // const { colors } = useTheme();

  // const [db, setDb] = useState({
  //     markerData: [],
  //     polylineData: []
  // })

  const [vehicles, setVehicles] = useState([]);
  const [busInfo, setBusInfo] = useState([]);
  const [stops, setStops] = useState([]);
  const { selectedRoutes, handleRouteSelection } = useSelectedRoutes();

  const fetchData = async () => {
    const vehiclesFetch = await fetch(
      "https://appalcart.etaspot.net/service.php?service=get_vehicles&includeETAData=1&inService=1&orderedETAArray=1",
    );
    const vehiclesData = await vehiclesFetch.json();
    if (vehiclesData.get_vehicles) {
      setVehicles(vehiclesData.get_vehicles);
    }
  };

  const fetchBusInfo = async () => {
    const routesFetch = await fetch(
      "https://appalcart.etaspot.net/service.php?service=get_routes",
    );
    const routesData = await routesFetch.json();
    if (routesData.get_routes) {
      setBusInfo(routesData.get_routes);
    }
  };

  const fetchStops = async () => {
    const stopsFetch = await fetch(
      "https://appalcart.etaspot.net/service.php?service=get_stops",
    );
    const stopsData = await stopsFetch.json();
    if (stopsData.get_stops) {
      setStops(stopsData.get_stops);
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

  return (
    <Map>
      {/* show all the routes */}

      {/*<Polyline coordinates={stops.map((stop) => ({*/}
      {/*      latitude: parseFloat(stop.lat),*/}
      {/*      longitude: parseFloat(stop.lng),*/}
      {/*  }))} strokeWidth={2} strokeColor={"#000"} />*/}
      {/* show only the bus that is selected
           from selectedRoutes use vehicles for the list of all routes
           */}

      {vehicles
        /*.filter(vehicle => selectedRoutes.includes(vehicle.routeID))*/
        .map((vehicle, index) => {
          if (vehicle.inService === 1) {
            {
              /*
                                title comes from the routeID in the vehicle and
                                name comes from busInfo
                                 */
            }
            return (
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
            );
          }
        })}
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
