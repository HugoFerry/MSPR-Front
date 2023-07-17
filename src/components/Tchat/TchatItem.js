import {Pressable, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from "react";

function TchatItem( {item} ) {
    const navigation = useNavigation();

    function expensePressHandler() {
        navigation.navigate('oneTchat', {
            itemId: item.id
        });
    }

    return (
        <Pressable
            onPress={expensePressHandler}
            style={({ pressed }) => [pressed && styles.pressed,styles.container]}
        >
            <Text style={styles.text}>{item.achanger} </Text>
        </Pressable>
    );
}

export default TchatItem;

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