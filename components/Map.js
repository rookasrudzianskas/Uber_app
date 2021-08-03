import React from 'react';
import {Text, View} from "react-native";
import MapView, {Marker} from 'react-native-maps';


const Map = () => {
    return (
        <View>
           <Text>I am the map</Text>
            <MapView
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />


        </View>
    );
};

export default Map;
