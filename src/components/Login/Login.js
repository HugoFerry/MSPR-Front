import { useNavigation } from '@react-navigation/native';
import { useState } from "react";
import { Text, View, TextInput, StyleSheet, Pressable } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

function Login({}) {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.globalcontainer}>
            <TextInput onChangeText={(mail) => setEmail(mail)} placeholder="votre mail" />
            <TextInput onChangeText={(password) => setPassword(password)} placeholder="votre mot de passe" />

            <Pressable onPress={async () => await expensePressHandler()}>
                <Text style={styles.text}> {"Login"} </Text>
            </Pressable>
        </View>
    );

    async function expensePressHandler() {
        try {
            const response = await fetch('http://localhost:8888/User/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });

            if (response.ok) {
                const tokenLogin = await response.json();
                console.log(tokenLogin);
                await AsyncStorage.setItem('@TOKEN', tokenLogin.token);
            } else {
                console.log('Email or password invalid');
            }
        } catch (e) {
            console.log('Error occurred:', e);
        }
    }
}

export default Login;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.75,
    },
    image: {
        width: 151,
        height: 101,
    },
    container: {
        width: 171,
        height: 148,
        backgroundColor: "white",
        marginBottom: 14,
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
        fontWeight: 700,
        fontSize: 14,
        alignSelf: "flex-start",
    },
    globalcontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
