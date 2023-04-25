import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";



const Tabs = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

const PlantStackScreen = () => (
    <HomeStack.Navigator>
        <HomeStack.Screen
            name="Plants"
            component={HomeScreen}
            options={{ title: null }}
        />
    </HomeStack.Navigator>
)
const GardStackScreen = () => (
    <HomeStack.Navigator>
        <HomeStack.Screen
            name="Gards"
            component={HomeScreen}
            options={{ title: null }}
        />
    </HomeStack.Navigator>
)
const TipsStackScreen = () => (
    <HomeStack.Navigator>
        <HomeStack.Screen
            name="Tips"
            component={HomeScreen}
            options={{ title: null }}
        />
    </HomeStack.Navigator>
)
const ProfileStackScreen = () => (
    <HomeStack.Navigator>
        <HomeStack.Screen
            name="Profile"
            component={HomeScreen}
            options={{ title: null }}
        />
    </HomeStack.Navigator>
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
                        title : "Mes Plantes",
                        tabBarIcon: ({ focused }) => <Ionicons name="" size={24} color={focused ? "green" : "black"}  />,
                    }}
                />
                <Tabs.Screen
                    name="GuardScreen"
                    component={GardStackScreen}
                    options={{
                        title : "Service de Garde",
                        tabBarIcon: ({ focused }) => <Ionicons name="" size={24} color={focused ? "green" : "black"}  />,
                    }}
                />
                <Tabs.Screen
                    name="TipsScreen"
                    component={TipsStackScreen}
                    options={{
                        title:"Conseils",
                        tabBarIcon: ({focused}) => <MaterialCommunityIcons name="" size={24} color={focused ? "green" : "black"} />,
                    }}
                />
                <Tabs.Screen
                    name="ProfileScreen"
                    component={ProfileStackScreen}
                    options={{
                        title:"Profil",
                        tabBarIcon: ({focused}) => <MaterialCommunityIcons name="" size={24} color={focused ? "green" : "black"}  />,
                    }}
                />
            </Tabs.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#white',
        alignItems: 'center',
        justifyContent: 'center',
    },
});