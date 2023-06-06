import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {GuardsScreenstyles} from "./GuardsScreenStyle";
import Button from '../../../components/UI/Button';

const Stack = createNativeStackNavigator();

const NewGuardScreen = ({ navigation }) => {
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');

    const handleDateChange = (text) => {
        setSelectedDate(text);
    };

    const handleLocationChange = (text) => {
        setSelectedLocation(text);
    };

    const handleValidation = () => {
        if (selectedDate.trim() === '' || selectedLocation.trim() === '') {
            alert('Veuillez remplir tous les champs');
        } else if (!isValidDate(selectedDate)) {
            alert('Veuillez saisir une date au format dd/mm/yyyy');
        } else if (!isValidLocation(selectedLocation)) {
            alert('Veuillez saisir un lieu au format "adresse, ville"');
        } else {
            // Effectuer les actions de validation ici

            // Naviguer vers la page précédente
            navigation.goBack();
        }
    };

    const isValidDate = (dateString) => {
        const regex = /^\d{2}\/\d{2}\/\d{4}$/;
        if (!regex.test(dateString)) {
            return false;
        }
        const [day, month, year] = dateString.split('/');
        const date = new Date(`${year}-${month}-${day}`);
        return !isNaN(date.getTime());
    };

    const isValidLocation = (locationString) => {
        const regex = /^.+,\s*.+$/;
        return regex.test(locationString);
    };

    return (
        <View style={GuardsScreenstyles.container}>
            <View style={GuardsScreenstyles.inputContainer}>
                <Text style={GuardsScreenstyles.label}>Dates :</Text>
                <TextInput
                    style={GuardsScreenstyles.input}
                    placeholder="Du XX/XX/XXXX au ..."
                    value={selectedDate}
                    onChangeText={handleDateChange}
                />
            </View>
            <View style={GuardsScreenstyles.inputContainer}>
                <Text style={GuardsScreenstyles.label}>Lieu :</Text>
                <TextInput
                    style={GuardsScreenstyles.input}
                    placeholder="12 rue de la place, Bordeaux"
                    value={selectedLocation}
                    onChangeText={handleLocationChange}
                />
            </View>
            <Button onPress={() => navigation.navigate('PlantsList')} primary={true} style={GuardsScreenstyles.buttonAdd}>Ajouter une plante</Button>
            <Button onPress={handleValidation} primary={true} style={GuardsScreenstyles.button}>Valider</Button>
        </View>
    );
};

export default NewGuardScreen;