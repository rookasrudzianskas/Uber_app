import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import tw from "tailwind-react-native-classnames";
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";
import {setDestination, setOrigin} from "../slices/navSlice";
import {GOOGLE_MAPS_API} from "@env";
import {StyleSheet} from "react-native";
import {useDispatch} from "react-redux";
import {useNavigation} from "@react-navigation/native";
import NavFavourites from "./NavFavourites";
import {Icon} from "react-native-elements";


const NavigateCard = () => {

    const dispatch = useDispatch();
    const navigation = useNavigation();

    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text style={tw`text-center py-5 text-xl`}>Good Morning, Rokas</Text>

            <View style={tw`border-t border-gray-200 flex-shrink`}>
                <View>
                    <GooglePlacesAutocomplete
                        placeholder='Where To?'
                        styles={toInputBoxStyles}
                        onPress={(data, details = null) => {
                            // console.log(data)
                            // console.log(details)

                            dispatch(setDestination({
                                // payload goes in here
                                location: details.geometry.location, // object with lati and long
                                description: data.description,
                            }));

                            navigation.navigate('RideOptionsCard');

                            dispatch(setDestination(null));
                        }}
                        returnKeyType={"search"}
                        fetchDetails={true}
                        nearbyPlacesAPI="GooglePlacesSearch"
                        debounce={400}
                        minLength={2}
                        enablePoweredByContainer={false}
                        query={{
                            key: GOOGLE_MAPS_API,
                            language: 'en',
                        }}
                    />
                </View>

                <NavFavourites />
            </View>

            <View style={tw`flex flex-row bg-white  justify-evenly py-2 mt-auto border-t border-gray-100`}>
                <TouchableOpacity onPress={() => navigation.navigate("RideOptionsCard")} style={tw`flex justify-between flex-row bg-black w-24 px-4 py-3 rounded-full`}>
                    <Icon name="car" type="font-awesome" color="white" size={16} />
                    <Text style={tw`text-white text-center`}>Rides</Text>
                </TouchableOpacity>

                <TouchableOpacity style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}>
                    <Icon name="fast-food-outline" type="ionicon" color="black" size={16} />
                    <Text style={tw` text-center`}>Eats</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingTop: 20,
        flex: 0,
    },
    textInput: {
        backgroundColor: '#DDDDDF',
        borderRadius: 0,
        fontSize: 18,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    }
});

// total done
