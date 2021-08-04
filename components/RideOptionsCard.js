import React, {useState} from 'react';
import {FlatList, Image, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import tw from "tailwind-react-native-classnames";
import {Icon} from "react-native-elements";
import {useNavigation} from "@react-navigation/native";
import {GOOGLE_MAPS_API} from "@env";
import {useSelector} from "react-redux";
import {selectTravelTimeInformation} from "../slices/navSlice";

const data = [
    {
        id: "Uber-X-123",
        title: "UberX",
        multiplier: 1, // const for the charge rate
        image: "https://links.papareact.com/3pn",
    },
    {
        id: "Uber-XL-456",
        title: "UberXL",
        multiplier: 1.2, // const for the charge rate
        image: "https://links.papareact.com/5w8",
    },
    {
        id: "Uber-LUX-789",
        title: "Uber LUX",
        multiplier: 1.75, // const for the charge rate
        image: "https://links.papareact.com/7pf",
    },
];

// if we have Surge pricing we are charging with go up

const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard = () => {

    const navigation = useNavigation();
    const [selected, setSelected] = useState(null);

    const travelTimeInformation = useSelector(selectTravelTimeInformation);


    return (
        <SafeAreaView style={tw`bg-white flex-grow`}>
            <View>

                <TouchableOpacity onPress={() => navigation.navigate("NavigateCard")} style={tw`absolute top-3 left-5 p-3 rounded-full`}>
                    <Icon name="chevron-left" type="fontawesome" />
                </TouchableOpacity>

                <Text style={tw`text-center py-5 text-xl`}>Select a Ride - {travelTimeInformation?.distance.text}</Text>

            </View>


            <FlatList data={data} keyExtractor={(item) => item.id} renderItem={({item: {id, title, image, multiplier}, item}) => (
                <TouchableOpacity onPress={() => setSelected(item)} activeOpacity={1} style={tw`flex flex-row items-center justify-between px-10 ${id === selected?.id && "bg-gray-200"}`}>
                    <Image style={{width: 100, height: 100, resizeMode: 'contain',}} source={{uri: image}} />

                    <View style={tw`-ml-6`}>
                        <Text style={tw`text-xl font-semibold`}>{title}</Text>
                        <Text>{travelTimeInformation?.duration.text} Travel Time</Text>
                    </View>

                    <Text style={tw`text-xl`}>

                        {new Intl.NumberFormat('en-gb', {
                            style: 'currency',
                            currency: 'GBP',
                        }).format(

                            (travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * multiplier) / 100

                        )}

                    </Text>

                </TouchableOpacity>

            )} />

            <View>
                <TouchableOpacity disabled={!selected} style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}>
                    <Text style={tw`text-center text-white text-xl`}>Choose {selected?.title}</Text>
                </TouchableOpacity>
            </View>


        </SafeAreaView>
    );
};

export default RideOptionsCard;
