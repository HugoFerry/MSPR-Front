import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {GuardsScreenstyles} from "./GuardsScreenStyle";
import GuardList from "../../../components/Guards/GuardsList";
import Button from '../../../components/UI/Button';
import {useState} from "react";
import guardsData from "../../../data/guardsData";


function GuardsScreen({ navigation }) {

    const [activeTab, setActiveTab] = useState('view1');
    const [selectedButton, setSelectedButton] = useState(null);
    const handlePress = (viewName) => {
        setActiveTab(viewName);
        setSelectedButton(viewName);
    };

    const isButtonSelected = (option) => selectedButton === option;

    const MesAnnonces = () => {
        return <>
        <View>
            <View style={GuardsScreenstyles.containerTop}>
                <Button onPress={() => navigation.navigate('NewGuard')} primary={true} style={GuardsScreenstyles.button}  >Ajouter une annonce</Button>
            </View>
        </View>
        </>
    }

    const Gardienner = () => {
        return <>
            <View>
                <View style={GuardsScreenstyles.containerTop}>
                    <Button onPress={() => navigation.navigate('MyGuard')} primary={true} style={GuardsScreenstyles.button}  >Mes gardiennages</Button>
                </View>
            </View>
        </>
    }
    const HeaderList = () => {

        return <>
            <View style={GuardsScreenstyles.globalcontainer}>
                <View>
                    <View style={GuardsScreenstyles.onglet}>
                    <TouchableOpacity onPress={()  => handlePress('view1')}>
                        <Text style={[GuardsScreenstyles.header_title, isButtonSelected('view1') && GuardsScreenstyles.buttonTextSelected]}>Mes annonces</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePress('view2')}>
                        <Text style={[GuardsScreenstyles.header_title, isButtonSelected('view2') && GuardsScreenstyles.buttonTextSelected]}>Gardienner</Text>
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


