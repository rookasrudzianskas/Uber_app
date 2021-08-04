import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import {Icon} from "react-native-elements";
import tw from "tailwind-react-native-classnames";

    const data = [
        {
            id: "123",
            icon: "home",
            location: "Home",
            destination: 'Code Street, London, UK',
        },
        {
            id: "456",
            icon: "briefcase",
            location: "Work",
            destination: 'London Eye, London, UK',
        },
    ];

const NavFavourites = () => {


    return (
        <FlatList data={data} ItemSeparatorComponent={() => (
            <View style={[tw`bg-gray-200 `, {height: 0.5}]}>

            </View>
        )} keyExtractor={item => item.id} renderItem={({item: {location, destination, icon }}) => (
            <TouchableOpacity activeOpacity={0.5} style={tw`flex-row items-center p-5`}>
                <Icon style={tw`mr-4 rounded-full bg-gray-300 p-3`} name={icon} type="ionicon" color="white" size={18} />

                <View>
                    <Text style={tw`font-semibold text-lg`}>{location}</Text>
                    <Text style={tw`text-gray-500`}>{destination}</Text>
                </View>
            </TouchableOpacity>
        )}/>
    );
};

export default NavFavourites;
