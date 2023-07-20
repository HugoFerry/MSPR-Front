import {Pressable, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from "react";

function TchatItem({ item }) {
    const navigation = useNavigation();

    function expensePressHandler() {
        navigation.navigate('oneTchat', {
            itemId: item.id
        });
    }

    return (
        <Pressable
            onPress={expensePressHandler}
            style={({ pressed }) => [pressed && styles.pressed, styles.container]}
        >
            <Text style={styles.text}>{item.achanger}</Text>
            <Image
                source={require('../../../assets/cactus.jpg')} // Mettez le chemin vers votre image ici
                style={styles.image}
                resizeMode="cover"
            />
        </Pressable>
    );
}

export default TchatItem;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.75,
    },
    container: {
        width: 150,
        height: 180,
        backgroundColor: "white",
        marginBottom: 30,
        borderRadius: 8,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: 120,
        borderRadius: 8,
    },
});