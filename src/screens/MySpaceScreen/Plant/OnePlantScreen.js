import {Image, Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import plantsData from "../../../data/plantsData";
import {useState, useEffect} from "react";
import {OnePlantScreenstyles} from "./OnePlantScreenStyle";
import Button from "../../../components/UI/Button";
import * as ImagePicker from 'expo-image-picker'


const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [16, 9],
        quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
        setImage(result.assets[0].uri);
    }
};

const openCamera = async () => {
    const {status} = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
        alert('La permission d\'accéder à la caméra a été refusée.');
        return;
    }

    if (status === 'granted') {
        ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [1, 1],
            base64: true,
            quality: 0.5,
        })
            .then((response) => {
                if (!response.cancelled) {
                    console.log('response', response)
                }
            })
            .catch((error) => console.log(error))
    }

};


function OnePlantScreen({route, navigation}) {
    const [activeTab, setActiveTab] = useState('view1');

    const handlePress = (viewName) => {
        setActiveTab(viewName);
    };

    const [image, setImage] = useState(null);
    const [item, setItem] = useState(null)
    const {itemId} = route.params;
    useEffect(() => {
        setItem(plantsData.find((e) => e.id = itemId));
        navigation.setOptions({title: item ? item.name : ''});
    }, [navigation]);


    return (item &&
        <View style={OnePlantScreenstyles.globalcontainer}>
            <View style={OnePlantScreenstyles.imageView}>
                <Image style={OnePlantScreenstyles.image} source={item.src}></Image>
            </View>

            <View>
                <Button onPress={pickImage}/>
                {image && <Image source={{uri: image}} style={{width: 200, height: 200}}/>}
                <Button onPress={openCamera}/>
                {image && <Image source={{uri: image}} style={{width: 200, height: 200}}/>}
            </View>

            <View>
                <Text>{item.description}</Text>
            </View>
            <View>
                <Button onPress={Button1} primary={true} style={OnePlantScreenstyles.button}>Demander Conseil</Button>
                <Button onPress={Button1} primary={true} style={OnePlantScreenstyles.button}>Faire Garder</Button>
            </View>
        </View>
    );

    function Button1() {
        console.log("test page plante")
    }
}

export default OnePlantScreen;