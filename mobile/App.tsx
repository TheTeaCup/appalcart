import React from "react";
import * as Sentry from "@sentry/react-native";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import Home from "./src/screens/index";
import Routes from "./src/screens/routes";
import Alerts from "./src/screens/alerts";
import { useColorScheme } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PaperProvider } from "react-native-paper";
import config from "./package.json";
import { Feather, FontAwesome5 } from "@expo/vector-icons";

Sentry.init({
  release: config.version,
  dsn: "https://f942f5fb6ad8249fb60600fd0fb9fecf@o4506799948300288.ingest.sentry.io/4506799949742080",
  tracesSampleRate: 1.0,
  enableAutoSessionTracking: true,
  enableAutoPerformanceTracing: true,
});

const App = () => {
  const tab = createBottomTabNavigator();
  const scheme = useColorScheme();

  return (
    <>
      <PaperProvider>
        <NavigationContainer
          theme={scheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                if (route.name === "Map") {
                  return <Feather name={"map-pin"} size={size} color={color} />;
                } else if (route.name === "Routes") {
                  return (
                    <FontAwesome5 name={"route"} size={size} color={color} />
                  );
                } else if (route.name === "Alerts") {
                  return (
                    <Feather
                      name={"alert-triangle"}
                      size={size}
                      color={color}
                    />
                  );
                }
              },
            })}
          >
            <tab.Screen name="Map" component={Home} />
            <tab.Screen name="Routes" component={Routes} />
            <tab.Screen name="Alerts" component={Alerts} />
          </tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </>
  );
};

export default Sentry.wrap(App);
