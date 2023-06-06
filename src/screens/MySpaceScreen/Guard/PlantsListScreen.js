import {  StyleSheet, Text, View} from 'react-native';
import plantsData from "../../../data/plantsData";
import {GuardsScreenstyles} from "./GuardsScreenStyle";
import Button from '../../../components/UI/Button';
import PlantListToGuard from "../../../components/Guards/PlantListToGuard";

function PlantsListScreen() {

    const HeaderList = () => {
        return <>
            <View style={GuardsScreenstyles.globalcontainer}>
                <View style={GuardsScreenstyles.text}>
                    <Text style={GuardsScreenstyles.subTitle}>Mes Plantes</Text>
                </View>
            </View>
        </>
    };
    return  <PlantListToGuard Plants={plantsData} header={HeaderList} />

}

export default PlantsListScreen;
