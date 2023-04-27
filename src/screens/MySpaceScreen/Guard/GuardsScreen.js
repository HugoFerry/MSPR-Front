import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {GuardsScreenstyles} from "./GuardsScreenStyle";
import GuardList from "../../../components/Guards/GuardsList";
import Button from '../../../components/UI/Button';
import {useState} from "react";
import guardsData from "../../../data/guardsData";
import {PlantsScreenstyles} from "../Plant/PlantsScreenStyle";


function GuardsScreen({ navigation }) {

    const [activeTab, setActiveTab] = useState('view1');

    const handlePress = (viewName) => {
        setActiveTab(viewName);
    };

    const MesAnnonces = () => {
        return <>
        <View>
            <View style={GuardsScreenstyles.containerTop}>
                <Text style={GuardsScreenstyles.title}>Mes Annonces</Text>
                <Button onPress={() => navigation.navigate('NewGuard')} primary={true} style={PlantsScreenstyles.button}  >Ajouter une annonce + </Button>
            </View>
        </View>
        </>
    }

    const Gardienner = () => {
        return <>
            <View>
                <View style={GuardsScreenstyles.containerTop}>
                    <Text style={GuardsScreenstyles.title}>Annonces proche de chez moi</Text>
                </View>
            </View>
        </>
    }
    const HeaderList = () => {
        return <>
            <View style={GuardsScreenstyles.globalcontainer}>
                <View>
                    <View style={GuardsScreenstyles.onglet}>
                    <TouchableOpacity onPress={() => handlePress('view1')}>
                        <Text style={GuardsScreenstyles.header_title}>Mes annonces</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePress('view2')}>
                        <Text style={GuardsScreenstyles.header_title}>Gardienner</Text>
                    </TouchableOpacity>
                    </View>
                    {activeTab === 'view1' ? (
                        <MesAnnonces></MesAnnonces>
                    ) : (
                        <Gardienner></Gardienner>
                    )}
                </View>
            </View>
        </>
    };
    return  <GuardList Guards={guardsData} header={HeaderList} />

}


export default GuardsScreen;


