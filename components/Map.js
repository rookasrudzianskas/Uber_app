import React from 'react';
import {Dimensions, Text, View} from "react-native";
import MapView, {Marker} from 'react-native-maps';
import tw from "tailwind-react-native-classnames";
import {StyleSheet} from "react-native";
import {useSelector} from "react-redux";
import {selectOrigin} from "../slices/navSlice";


const Map = () => {

    const origin = useSelector(selectOrigin);
    return (
        <View>
            <MapView style={styles.map}
                     provider="google"
                     mapType="mutedStandard"
                     initialRegion={{
                        latitude: origin.location.lat,
                        longitude: origin.location.lng,
                        latitudeDelta: 0.005,
                        longitudeDelta: 0.005,
            }}/>
        </View>
    );
};

export default Map;

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 2,
        // flex: 1,
    },
});
