import React from 'react';
import { View, Text } from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {GuardsScreenstyles} from "./GuardsScreenStyle";
import plantsData from "../../../data/plantsData";
import GuardList from "../../../components/Guards/GuardsList";
import guardsData from "../../../data/guardsData";

const Stack = createNativeStackNavigator();

function MyGuardScreen() {

    const HeaderList = () => {
        return <>
            <View style={GuardsScreenstyles.globalcontainer}>
                <View style={GuardsScreenstyles.text}>
                    <Text style={GuardsScreenstyles.subTitle}>Mes Plantes Gardées</Text>
                </View>
            </View>
        </>
    };
    return  <GuardList Guards={guardsData} header={HeaderList} />

}

export default MyGuardScreen;