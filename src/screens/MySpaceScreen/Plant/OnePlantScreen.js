import {Image, Pressable, StyleSheet, Text, TouchableOpacity, View, Modal} from 'react-native';
import plantsData from "../../../data/plantsData";
import {useState, useEffect} from "react";
import {OnePlantScreenstyles} from "./OnePlantScreenStyle";
import Button from "../../../components/UI/Button";
import * as ImagePicker from 'expo-image-picker'
import Swiper from 'react-native-swiper';



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

    const [modalVisible, setModalVisible] = useState(false);
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
                <Swiper loop={false} showsPagination={true}>
                    {item.images.map((image, index) => (
                        <View key={index}>
                            <Image style={OnePlantScreenstyles.image} source={image} resizeMode="contain" />
                        </View>
                    ))}
                </Swiper>
            </View>
            <Button primary={true} style={OnePlantScreenstyles.buttonmodal}
                    onPress={() => setModalVisible(true)}>+
            </Button>

            <View style={OnePlantScreenstyles.partie}>
                <View style={OnePlantScreenstyles.TextView}>
                    <Text> Conseils d'entretien</Text>
                    <Text>{item.description}</Text>
                </View>
                <View style={OnePlantScreenstyles.InfoView}>
                    <Text>
                        Oui
                    </Text>
                </View>
            </View>

            <View style={OnePlantScreenstyles.partie}>
                <Button onPress={Button1} primary={true} style={OnePlantScreenstyles.button}>Demander Conseil</Button>
                <Button onPress={Button1} primary={true} style={OnePlantScreenstyles.button}>Faire Garder</Button>
            </View>
            <Modal
                visible={modalVisible}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={OnePlantScreenstyles.modalContainer}>
                    <View style={OnePlantScreenstyles.modalContent}>
                        <Text style={OnePlantScreenstyles.ModalText} title="Depuis la galerie"
                              onPress={pickImage}> Depuis la Galerie </Text>
                        <Text style={OnePlantScreenstyles.ModalText} title="Depuis l'appareil photo"
                              onPress={openCamera}> Prendre une Photo</Text>
                        <Text style={OnePlantScreenstyles.ModalText} title="Annuler"
                              onPress={() => setModalVisible(false)}> Annuler</Text>
                    </View>
                </View>
            </Modal>
        </View>
    );

    function Button1() {
        console.log("test page plante")
    }
}

export default OnePlantScreen;