import React from 'react';
import { View, Text } from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function NewGuardScreen() {
    return (
        <View>
            <Text>Ceci est la page suivante pour créer son annonce !</Text>
        </View>
    );
}

export default NewGuardScreen;