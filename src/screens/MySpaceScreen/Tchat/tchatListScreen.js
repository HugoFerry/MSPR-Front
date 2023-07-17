import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import TchatList from './TchatList';

const discussions = [
    { id: 1, achanger: 'Discussion 1' },
    { id: 2, achanger: 'Discussion 2' },
    { id: 3, achanger: 'Discussion 3' },
    // ... Ajoutez d'autres discussions ici
];

const TchatListScreen = () => {
    const renderHeader = () => {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>En-tête de la liste des discussions</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <TchatList
                Tchats={discussions}
                header={renderHeader()}
                headerStyle={styles.headerStyle}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f9f9f9',
    },
    header: {
        marginBottom: 16,
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: '#ccc',
    },
    headerText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    headerStyle: {
        marginBottom: 16,
    },
});

export default TchatListScreen;
