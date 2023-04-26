import {  StyleSheet, Text, View} from 'react-native';
import plantsData from "../../../data/plantsData";
import {useState, useEffect} from "react";

function OnePlantScreen({ route , navigation }) {
    const [item, setItem] = useState(null)
    const {itemId} = route.params;
    useEffect(() => {
        setItem(plantsData.find((e) => e.id = itemId))
    }, [navigation]);

    return (item &&
        <View>
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
        </View>
    );
}
export default OnePlantScreen;