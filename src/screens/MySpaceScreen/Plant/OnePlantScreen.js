import {Image, Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import plantsData from "../../../data/plantsData";
import {useState, useEffect} from "react";
import {PlantsScreenstyles} from "./PlantsScreenStyle";
import Button from "../../../components/UI/Button";

function OnePlantScreen({ route , navigation }) {
     const [activeTab, setActiveTab] = useState('view1');

    const handlePress = (viewName) => {
        setActiveTab(viewName);
    };

    const [item, setItem] = useState(null)
    const {itemId} = route.params;
    useEffect(() => {
        setItem(plantsData.find((e) => e.id = itemId))
    }, [navigation]);

    return (item &&
        <View style={PlantsScreenstyles.globalcontainer}>

            <View>
                <TouchableOpacity onPress={() => handlePress('view1')}>
                    <Text>View 1</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePress('view2')}>
                    <Text>View 2</Text>
                </TouchableOpacity>
                {activeTab === 'view1' ? (
                    <View>
                        <Text>Contenu de la vue 1</Text>
                    </View>
                ) : (
                    <View>
                        <Text>Contenu de la vue 2</Text>
                    </View>
                )}
            </View>

            <View>
                <Text>{item.name}</Text>
                <Text>{item.description}</Text>
            </View>
            <View>
                <Button onPress={Button1} primary={true} style={PlantsScreenstyles.button}>Demander Conseil</Button>
                <Button onPress={Button1} primary={true} style={PlantsScreenstyles.button}>Faire Garder</Button>
            </View>
        </View>
    );

    function Button1() {
        console.log("test page plante")
    }
}
export default OnePlantScreen;