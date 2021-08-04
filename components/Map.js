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
    // console.log("ORIGIN IS", origin);
    const destination = useSelector(selectDestination);

    // console.log("DESTINATION IS", destination);
    const mapRef = useRef(null);
    // console.log("MAP REF", mapRef)


    useEffect(() => {

    }, [origin, destination, GOOGLE_MAPS_API]);

    useEffect(() => {

        if(!origin || !destination) return;


        // zoom out and fit the markers
        mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
            edgePadding: {top: 50, right: 50, bottom: 50, left: 50 }
        });


    }, [origin, destination]);

    return (
        <View>
            <MapView style={styles.map}
                     ref={mapRef}
                     provider="google"
                     mapType="mutedStandard"
                     // onLayout={()=>{
                     //     mapRef.current.fitToCoordinates([{latitude: 34.5, longitude: 82.5}])
                     // }}
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
                        identifier="origin"
                    />
                )}


                {destination?.location && (
                    <Marker
                        coordinate={{
                            latitude: destination.location.lat,
                            longitude: destination.location.lng,
                        }}
                        title="Final Point"
                        description={destination.description}
                        identifier="destination"
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
