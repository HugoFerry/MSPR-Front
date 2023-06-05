import React from 'react';
import { View, Text } from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {GuardsScreenstyles} from "./GuardsScreenStyle";
import plantsData from "../../../data/plantsData";
import guardsData from "../../../data/guardsData";
import MyGuardList from "../../../components/Guards/MyGuardList";

const Stack = createNativeStackNavigator();

function MyGuardScreen() {

    const HeaderList = () => {
        return <>
            <View style={GuardsScreenstyles.globalcontainer}>
                <View style={GuardsScreenstyles.text}>
                </View>
            </View>
        </>
    };
    return  <MyGuardList Guards={guardsData} header={HeaderList} />

}

export default MyGuardScreen;