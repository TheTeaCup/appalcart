import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { Card } from "react-native-paper";
import { Route } from "../types";
import CheckmarkSVG from "../components/checkmark";
import useSelectedRoutes from "../utils/useSelectedRoutes";

const Routes = () => {
  const { colors } = useTheme();

  const [routes, setRoutes] = useState<Route[]>([]);
  const { selectedRoutes, handleRouteSelection } = useSelectedRoutes();

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const routesFetch = await fetch(
          "https://appalcart.etaspot.net/service.php?service=get_routes",
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          },
        );

        const routesData = await routesFetch.json();

        if (routesData.get_routes) {
          setRoutes(routesData.get_routes);
        }
      } catch (error) {
        console.error("Error fetching routes:", error);
      }
    };

    fetchRoutes();
  }, []);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <Text style={{ color: colors.text }}>
          Select your route to view on the map
        </Text>
        <Text style={{ color: colors.text }}>
          {routes.length} active routes
        </Text>
      </View>

      {routes.map((route, index) => (
        <TouchableWithoutFeedback
          key={index}
          onPress={() => handleRouteSelection(route.id)}
        >
          <Card style={{ margin: 10 }}>
            <Card.Content
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ color: colors.text }}>{route.name}</Text>
              <View
                style={[
                  styles.colorIndicator,
                  { backgroundColor: route.color },
                ]}
              >
                {selectedRoutes.includes(route.id) && (
                  <CheckmarkSVG size={24} color={route.color} />
                )}
              </View>
            </Card.Content>
          </Card>
        </TouchableWithoutFeedback>
      ))}
    </ScrollView>
  );
};

export default Routes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  colorIndicator: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  checkmark: {
    fontSize: 16,
  },
});
