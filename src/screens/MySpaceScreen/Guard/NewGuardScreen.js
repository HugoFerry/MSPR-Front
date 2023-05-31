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
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Dates :</Text>
                <TextInput
                    style={styles.input}
                    placeholder="XX/XX/XXXX"
                    value={selectedDate}
                    onChangeText={handleDateChange}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Lieu :</Text>
                <TextInput
                    style={styles.input}
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 80,
        margin: 20
    },
    label: {
        marginRight: 10,
        fontSize: 28,
    },
    input: {
        flex: 1,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        fontSize: 16,
    },
});

export default NewGuardScreen;