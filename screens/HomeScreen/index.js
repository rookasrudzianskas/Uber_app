import React from 'react';
import {Image, SafeAreaView, Text, View} from "react-native";
import styles from './styles';
import tw from 'tailwind-react-native-classnames';
import NavOptions from "../../components/NavOptions";
import {useNavigation} from "@react-navigation/native";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_API} from "@env";

const HomeScreen = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image style={{width: 100, height: 100, resizeMode: 'contain'}} source={{
                    uri: 'https://links.papareact.com/gzs'
                }} />

                <GooglePlacesAutocomplete
                    placeholder='Where From?'
                    style={{
                        container: {
                            flex: 0,
                        },
                        textInput: {
                            fontSize: 18,
                        }
                    }}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}
                    // enablePoweredByContainer={false}
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        console.log(data, details);
                    }}
                    query={{
                        key: GOOGLE_MAPS_API,
                        language: 'en',
                    }}
                />

                <NavOptions />
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;
