import {useNavigation} from '@react-navigation/native';
import {useState} from "react";
import {Text, View, TextInput, StyleSheet, Pressable} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppRegistry} from 'react-native';
import App from "../../../App"

function Login({}) {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={(mail) => setEmail(mail)}
                placeholder="Votre mail"
            />
            <TextInput
                style={styles.input}
                onChangeText={(password) => setPassword(password)}
                placeholder="Votre mot de passe"
                secureTextEntry
            />

            <TouchableOpacity style={styles.button} onPress={expensePressHandler}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );


    async function expensePressHandler() {
        try {
            const response = await fetch('http://51.77.157.173:8888/User/login', {
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
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#f9f9f9',
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    button: {
        width: '100%',
        height: 40,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
