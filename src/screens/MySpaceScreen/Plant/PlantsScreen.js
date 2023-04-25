import {  StyleSheet, Text, View} from 'react-native';
import plantsData from "../../../data/plantsData";
import {PlantsScreenstyles} from "./PlantsScreenStyle";
import PlantList from "../../../components/Plants/PlantsList";
function PlantsScreen() {
    function newPlants(){
        console.log("test page plante")
    }
    const HeaderList = () => {
        return <>
            <View style={PlantsScreenstyles.globalcontainer}>
            <View>
                <View>Plante</View>
                <View>Jardin</View>
            </View>
            <View style={PlantsScreenstyles.containerTop}>
                <Text style={PlantsScreenstyles.title}>Mon espace</Text>
                <Button onPress={newPlants()} primary={true} style={PlantsScreenstyles.button}  >Ajouter une plante + </Button>
            </View>
            <View style={PlantsScreenstyles.text}>
                <Text style={PlantsScreenstyles.subTitle}>Mes Plantes </Text>
            </View>
            </View>
        </>
    };

}
return  <PlantList plant={} header={HeaderList} />

export default PlantsScreen;


