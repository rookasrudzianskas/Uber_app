import React from 'react';
import {Dimensions, Text, View} from "react-native";
import MapView, {Marker} from 'react-native-maps';
import tw from "tailwind-react-native-classnames";
import {StyleSheet} from "react-native";


const Map = () => {
    return (
        <View style={styles.container}>
            <MapView style={styles.map}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
            }}/>
        </View>
    );
};

export default Map;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});
