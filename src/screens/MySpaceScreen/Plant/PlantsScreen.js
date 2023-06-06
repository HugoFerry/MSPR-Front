import {ScrollView, StyleSheet, Text, View} from 'react-native';
import plantsData from "../../../data/plantsData";
import {PlantsScreenstyles} from "./PlantsScreenStyle";
import PlantList from "../../../components/Plants/PlantsList";
import Button from '../../../components/UI/Button';

function PlantsScreen() {
    function newPlants() {
        console.log("test page plante")
    }

    const MyPlantList = () => {
        return <>
            <View style={PlantsScreenstyles.globalcontainer}>
                <View style={PlantsScreenstyles.onglet}>
                    <View style={PlantsScreenstyles.case_onglet}><Text>Plante</Text></View>
                    <View style={PlantsScreenstyles.case_onglet}><Text>Jardin</Text></View>
                </View>
                <View style={PlantsScreenstyles.containerTop}>
                    <Text style={PlantsScreenstyles.title}>Mon espace</Text>
                    <Button onPress={newPlants()} primary={true} style={PlantsScreenstyles.button}>Ajouter une
                        plante</Button>
                </View>
                <View style={PlantsScreenstyles.text}>
                    <Text style={PlantsScreenstyles.subTitle}>Mes Plantes </Text>
                </View>
            </View>
        </>
    };
    const GardList = () => {
        return <>
            <View style={PlantsScreenstyles.globalcontainer}>
                <View style={PlantsScreenstyles.text}>
                    <Text style={PlantsScreenstyles.subTitle}>Mes Plantes gardées</Text>
                </View>
            </View>
        </>
    };

    return (
        <>
            <ScrollView>
                <View>
                    <PlantList Plants={plantsData} header={MyPlantList}/>

                </View>
                <View>
                    <GardList></GardList>
                    <PlantList Plants={plantsData}/>
                </View>
            </ScrollView>
        </>
    );
}


export default PlantsScreen;


