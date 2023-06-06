import { Pressable, StyleSheet, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';



function GuardItem( {item} ) {
    const navigation = useNavigation();

    function expensePressHandler() {
        navigation.navigate('OneGuard', {
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
            <Text style={styles.text}>{item.date_debut} </Text>
            <Text style={styles.text}>{item.location} </Text>
            <Text style={styles.text}>{item.state} </Text>


        </Pressable>
    );
}

export default GuardItem;

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
        height: 210,
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