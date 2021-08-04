import React from 'react';
import {FlatList, Image, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import tw from "tailwind-react-native-classnames";
import {Icon} from "react-native-elements";
import {useNavigation} from "@react-navigation/native";

const data = [
    {
        id: "Uber-X-123",
        title: "UberX",
        multiplier: 1,
        image: "https://links.papareact.com/3pn",
    },
    {
        id: "Uber-XL-456",
        title: "UberXL",
        multiplier: 1.2,
        image: "https://links.papareact.com/5w8",
    },
    {
        id: "Uber-LUX-789",
        title: "Uber LUX",
        multiplier: 1.75,
        image: "https://links.papareact.com/7pf",
    },
]

const RideOptionsCard = () => {

    const navigation = useNavigation();
    return (
        <SafeAreaView style={tw`bg-white flex-grow`}>
            <View>

                <TouchableOpacity onPress={() => navigation.navigate("NavigateCard")} style={tw`absolute top-3 left-5 p-3 rounded-full`}>
                    <Icon name="chevron-left" type="fontawesome" />
                </TouchableOpacity>

                <Text style={tw`text-center py-5 text-xl`}>Select a Ride</Text>

            </View>


            <FlatList data={data} keyExtractor={(item) => item.id} renderItem={({item: {id, title, image, multiplier}, item}) => (
                <TouchableOpacity activeOpacity={0.5} style={tw`flex flex-row items-center justify-between px-10`}>
                    <Image style={{width: 100, height: 100, resizeMode: 'contain',}} source={{uri: image}} />

                    <View style={tw`-ml-6`}>
                        <Text style={tw`text-xl font-semibold`}>{title}</Text>
                        <Text>Travel Time ...</Text>
                    </View>

                    <Text style={tw`text-xl`}>$99</Text>

                </TouchableOpacity>

            )} />


        </SafeAreaView>
    );
};

export default RideOptionsCard;
