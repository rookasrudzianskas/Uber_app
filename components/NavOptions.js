import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from "react-native";

const data = [
    {
        id: '123',
        title: 'Get a ride',
        image: 'https://links.papareact.com/3pn',
        screen: 'MapScreen',
    },
    {
        id: '456',
        title: 'Order food',
        image: 'https://links.papareact.com/28w',
        screen: 'EatsScreen', // change in the future
    },
];

const NavOptions = () => {
    return (
        <FlatList data={data} horizontal renderItem={({item}) => (
            <TouchableOpacity>
                <Text>{item.title}</Text>
            </TouchableOpacity>
        )} />
    );
};

export default NavOptions;
