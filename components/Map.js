import React, {useEffect, useRef} from 'react';
import {Dimensions, Text, View} from "react-native";
import MapView, {Marker} from 'react-native-maps';
import tw from "tailwind-react-native-classnames";
import {StyleSheet} from "react-native";
import {useSelector} from "react-redux";
import {selectDestination, selectOrigin} from "../slices/navSlice";
import MapViewDirections from "react-native-maps-directions";
import {GOOGLE_MAPS_API} from "@env";



const Map = () => {

    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);
    const mapRef = useRef(null);

    useEffect(() => {

    })

    return (
        <View>
            <MapView style={styles.map}
                     ref={mapRef}
                     provider="google"
                     mapType="mutedStandard"
                     initialRegion={{
                        latitude: origin.location.lat,
                        longitude: origin.location.lng,
                        latitudeDelta: 0.005,
                        longitudeDelta: 0.005,
                     }}>

                {origin && destination && (
                    <MapViewDirections
                        origin={origin.description}
                        destination={destination.description}
                        apikey={GOOGLE_MAPS_API}
                        strokeWidth={3}
                        strokeColor={"black"}
                    />
                )}


                {origin?.location && (
                    <Marker
                        coordinate={{
                            latitude: origin.location.lat,
                            longitude: origin.location.lng,
                        }}
                        title="Starting Point"
                        description={origin.description}
                        indentifier="origin"
                    />
                )}


            </MapView>
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
