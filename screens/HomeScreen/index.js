import React from 'react';
import {Image, SafeAreaView, Text, View} from "react-native";
import styles from './styles';
import tw from 'tailwind-react-native-classnames';
import NavOptions from "../../components/NavOptions";
import {useNavigation} from "@react-navigation/native";


const HomeScreen = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image style={{width: 100, height: 100, resizeMode: 'contain'}} source={{
                    uri: 'https://links.papareact.com/gzs'
                }} />

                <NavOptions />
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;
