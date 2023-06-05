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
import GuardsScreen from "./src/screens/MySpaceScreen/Guard/GuardsScreen";
import OneGuardScreen from "./src/screens/MySpaceScreen/Guard/OneGuardScreen";
import NewGuardScreen from "./src/screens/MySpaceScreen/Guard/NewGuardScreen";
import MyGuardScreen from "./src/screens/MySpaceScreen/Guard/MyGuardScreen";
import PlantsListScreen from "./src/screens/MySpaceScreen/Guard/PlantsListScreen";


const Tabs = createBottomTabNavigator();
const MySpaceStack = createNativeStackNavigator();
const GuardsStack = createNativeStackNavigator();
const TipsStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const NewGuardStack = createNativeStackNavigator();
const MyGuardStack = createNativeStackNavigator();
const PlantsListStack = createNativeStackNavigator();




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
            options={{headerTitle: () => <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>Service de Garde</Text>,}}
        />
        <GuardsStack.Screen
            name="OneGuard"
            component={OneGuardScreen}
            options={{title: null}}
        />
        <GuardsStack.Screen
                name="NewGuard"
                component={NewGuardScreen}
                options={{headerTitle: () => <Text style={{ fontSize: 24, fontWeight: 'bold', alignSelf: 'center' }}>Ajouter une plante</Text>,}}
            />
        <GuardsStack.Screen
            name="MyGuard"
            component={MyGuardScreen}
            options={{headerTitle: () => <Text style={{ fontSize: 24, fontWeight: 'bold', alignSelf: 'center' }}>Mes Plantes Gardées</Text>,}}
        />
        <GuardsStack.Screen
            name="PlantsList"
            component={PlantsListScreen}
            options={{title: null}}
        />
    </GuardsStack.Navigator>
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
    return (
        <NavigationContainer>
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
                    name="ProfileScreen"
                    component={ProfileStackScreen}
                    options={{
                        title: "Profil",
                        tabBarIcon: ({focused}) => <AntDesign name="user" size={24}
                                                              color={focused ? "green" : "black"}/>,
                    }}
                />
            </Tabs.Navigator>
        </NavigationContainer>
    );
}
