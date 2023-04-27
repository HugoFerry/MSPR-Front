import {  StyleSheet, Text, View} from 'react-native';
import {useState, useEffect} from "react";
import guardsData from "../../../data/guardsData";

function OneGuardScreen({ route , navigation }) {
    const [item, setItem] = useState(null)
    const {itemId} = route.params;
    useEffect(() => {
        setItem(guardsData.find((e) => e.id = itemId))
    }, [navigation]);

    return (item &&
        <View>
            <Text>{item.name}</Text>
            <Text>{item.date}</Text>
            <Text>{item.description}</Text>
        </View>
    );
}
export default OneGuardScreen;