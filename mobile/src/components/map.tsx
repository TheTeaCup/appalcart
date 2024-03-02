import React from "react";
import {Platform, StyleSheet, useColorScheme, View} from "react-native";
import MapView, {MapViewProps} from "react-native-maps";

const Map = ({ children, ...props }: MapViewProps) => {
    const colorScheme = useColorScheme();

    const isWeb = Platform.OS === "web";

    const filteredChildren = isWeb ? null : children;

    return (
        <>
            <View style={styles.container}>
                <MapView
                    userInterfaceStyle={colorScheme ?? "light"}
                    children={filteredChildren}
                    style={styles.map}
                    initialRegion={{
                        latitude: 36.214535736355025,
                        longitude: -81.6820810603153,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    {...props}
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default Map;
