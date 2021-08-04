import React from 'react';
import {SafeAreaView, Text, View} from "react-native";
import tw from "tailwind-react-native-classnames";

const NavigateCard = () => {
    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text>Good Morning, Rokas</Text>
        </SafeAreaView>
    );
};

export default NavigateCard;
