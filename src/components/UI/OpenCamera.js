import * as ImagePicker from "react-native-image-picker";

const openCamera = () => {
    const options = {
        mediaType: 'photo',
        quality: 1,
        includeBase64: false,
    };

    ImagePicker.launchCamera(options, response => {
        if (response.didCancel) {
            console.log('L\'utilisateur a annulé la capture de photo');
        } else if (response.error) {
            console.log('Erreur lors de la capture de photo :', response.error);
        } else {
            const source = { uri: response.uri };
            // Faites quelque chose avec la photo, par exemple l'afficher dans votre interface utilisateur
            setPhoto(source);
        }
    });
};

export default openCamera;