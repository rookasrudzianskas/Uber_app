import React from 'react';
import {Text, View} from "react-native";
import tw from "tailwind-react-native-classnames";
import Map from "../../components/Map";

const MapScreen = () => {
    return (
        <View>

            <View style={tw`h-1/2`}>
                <Map />
            </View>

            <View style={tw`h-1/2`}>

            </View>
        </View>
    );
};

export default MapScreen;
