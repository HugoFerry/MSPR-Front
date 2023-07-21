import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import TchatList from "../../../components/Tchat/TchatList";
import getDiscussionsByUserId from "../../../data/tchatsData";

const discussions = getDiscussionsByUserId()


const TchatListScreen = () => {
    const renderHeader = () => {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>Liste des discussions</Text>
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
        backgroundColor: '#f9f9f9',
    },
    header: {
        marginBottom: 16,
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: '#ccc',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    headerStyle: {
        marginBottom: 16,
    },
});

export default TchatListScreen;
