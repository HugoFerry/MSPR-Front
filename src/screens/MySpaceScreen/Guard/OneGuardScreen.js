import {Image, StyleSheet, Text, View} from 'react-native';
import {useState, useEffect} from "react";
import guardsData from "../../../data/guardsData";

function OneGuardScreen({ route , navigation }) {
    const [item, setItem] = useState(null)
    const {itemId} = route.params;
    useEffect(() => {
        setItem(guardsData.find((e) => e.id = itemId))
    }, [navigation]);

    return (item &&
        <View style={styles.container}>
            <Text style={styles.title}>{item.name}</Text>
            <Image source={item.src}></Image>
            <View style={styles.description}>
                <Text>{item.location}</Text>
                <Text>{item.date}</Text>
                <Text>{item.description}</Text>
                <Text>{item.state}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 28,
    },
    description: {
        alignItems: 'center',
        marginTop: 20,
        fontSize: 16,
    },
});
export default OneGuardScreen;