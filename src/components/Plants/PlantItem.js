import { Pressable, StyleSheet, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function PlantItem( {item} ) {
    const navigation = useNavigation();

    function expensePressHandler() {
        navigation.navigate('OnePlant', {
            itemId: item.id
        });
    }

    return (
        <Pressable
            onPress={expensePressHandler}
            style={({ pressed }) => [pressed && styles.pressed,styles.container]}
        >
            <Image style={styles.image} source={item.src} />

            <Text style={styles.text}>{item.name} </Text>


        </Pressable>
    );
}

export default PlantItem;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.75,
    },
    image:{
        width:151,
        height:101,
    },

    container:{
        width: 171,
        height: 148,
        backgroundColor:"white",
        marginBottom:14,
        borderRadius:8,
        padding:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    text:{
        fontWeight: 700,
        fontSize: 14,
        alignSelf:"flex-start"
    }
});