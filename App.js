import React, { useEffect, useState } from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Entypo} from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from "./src/screens/HomeScreen";
import PlantsScreen from "./src/screens/MySpaceScreen/Plant/PlantsScreen";
import OnePlantScreen from "./src/screens/MySpaceScreen/Plant/OnePlantScreen";
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from "./src/screens/LoginScreen/LoginScreen";
import GuardsScreen from "./src/screens/MySpaceScreen/Guard/GuardsScreen";
import OneGuardScreen from "./src/screens/MySpaceScreen/Guard/OneGuardScreen";
import NewGuardScreen from "./src/screens/MySpaceScreen/Guard/NewGuardScreen";
import TchatListScreen from "./src/screens/MySpaceScreen/Tchat/tchatListScreen";
import OneTchatScreen from "./src/screens/MySpaceScreen/Tchat/OneTchatScreen";


const Tabs = createBottomTabNavigator();
const MySpaceStack = createNativeStackNavigator();
const GuardsStack = createNativeStackNavigator();
const TipsStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const NewGuardStack = createNativeStackNavigator();
const TchatStack = createNativeStackNavigator();



const LoginStackScreen = () => (
    <LoginStack.Navigator>
        <LoginStack.Screen
            name="Login"
            component={LoginScreen}
            options={{title: null}}
        />
    </LoginStack.Navigator>
)

const PlantStackScreen = () => (
    <MySpaceStack.Navigator>
        <MySpaceStack.Screen
            name="Plants"
            component={PlantsScreen}
            options={{title: null}}
        />
        <MySpaceStack.Screen
            name="OnePlant"
            component={OnePlantScreen}
            options={{title: null}}
        />
    </MySpaceStack.Navigator>
)
const GuardsStackScreen = () => (
    <GuardsStack.Navigator>
        <GuardsStack.Screen
            name="Guards"
            component={GuardsScreen}
            options={{title: null}}
        />
        <GuardsStack.Screen
            name="OneGuard"
            component={OneGuardScreen}
            options={{title: null}}
        />
        <GuardsStack.Screen
                name="NewGuard"
                component={NewGuardScreen}
                options={{title: null}}
            />
    </GuardsStack.Navigator>
)

const tchatStackScreen = () => (
    <TchatStack.Navigator>
        <TchatStack.Screen
            name="tchatList"
            component={TchatListScreen}
            options={{title: null}}
        />
        <TchatStack.Screen
            name="oneTchat"
            component={OneTchatScreen}
            options={{title: null}}
        />
    </TchatStack.Navigator>
)



const TipsStackScreen = () => (
    <TipsStack.Navigator>
        <TipsStack.Screen
            name="Tips"
            component={HomeScreen}
            options={{title: null}}
        />
    </TipsStack.Navigator>
)
const ProfileStackScreen = () => (
    <ProfileStack.Navigator>
        <ProfileStack.Screen
            name="Profile"
            component={HomeScreen}
            options={{title: null}}
        />
    </ProfileStack.Navigator>
)

export default function App() {
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {

        const checkAuthentication = async () => {
            const token = await AsyncStorage.getItem('@TOKEN')
            console.log('TOKEN ===')
            console.log(token)
            isAuthenticated = token !== null;

            setAuthenticated(isAuthenticated);
        };

        checkAuthentication();
    }, []);

    return (
        <NavigationContainer>
        {authenticated ? (
                <Tabs.Navigator
                    screenOptions={(options) => {
                        return {
                            headerShown: false,
                            tabBarInactiveTintColor: 'green',
                            tabBarActiveTintColor: 'white',
                        };

                    }}
                >
                    <Tabs.Screen
                        name="PlantScreen"
                        component={PlantStackScreen}
                        options={{
                            title: "Mes Plantes",
                            tabBarIcon: ({focused}) => <MaterialCommunityIcons name="flower" size={24}
                                                                               color={focused ? "green" : "black"}/>,
                        }}
                    />
                    <Tabs.Screen
                        name="GuardScreen"
                        component={GuardsStackScreen}
                        options={{
                            title: "Service de Garde",
                            tabBarIcon: ({focused}) => <Entypo name="suitcase" size={24}
                                                               color={focused ? "green" : "black"}/>,
                        }}
                    />
                    <Tabs.Screen
                        name="TipsScreen"
                        component={TipsStackScreen}
                        options={{
                            title: "Conseils",
                            tabBarIcon: ({focused}) => <AntDesign name="questioncircleo" size={24}
                                                                  color={focused ? "green" : "black"}/>,
                        }}
                    />
                    <Tabs.Screen
                        name="TchatScreen"
                        component={tchatStackScreen}
                        options={{
                            title: "Tchat",
                            tabBarIcon: ({focused}) => <AntDesign name="user" size={24}
                                                                  color={focused ? "green" : "black"}/>,
                        }}
                    />
                    <Tabs.Screen
                        name="ProfileScreen"
                        component={ProfileStackScreen}
                        options={{
                            title: "Profil",
                            tabBarIcon: ({focused}) => <AntDesign name="user" size={24}
                                                                  color={focused ? "green" : "black"}/>,
                        }}
                    />

                </Tabs.Navigator>
        ) : (
            <LoginScreen/>
        )}
        </NavigationContainer>
    );
}