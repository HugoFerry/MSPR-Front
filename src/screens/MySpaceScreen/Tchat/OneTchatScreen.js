import TchatListScreen from "./tchatListScreen";

import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OneTchatScreen = ({ route }) => {
    const { itemId } = route.params;

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Conversation ID: {itemId}</Text>
        </View>
    );
};

/*const OneTchatScreen = ({ route }) => {
    const { itemId } = route.params;
    const [discussionData, setDiscussionData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fonction pour récupérer les données de la discussion
        const fetchDiscussionData = async () => {
            try {
                const token = await AsyncStorage.getItem('@TOKEN');

                const response = await axios.get(`https://example-api.com/Discussion/${itemId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                // Mettre à jour l'état avec les données de la discussion
                setDiscussionData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Erreur lors de la récupération des données de la discussion:', error);
                setLoading(false);
            }
        };

        fetchDiscussionData();
    }, [itemId]);

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="green" />
            </View>
        );
    }

    if (!discussionData) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Aucune donnée disponible pour cette discussion.</Text>
            </View>
        );
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Informations de la discussion :</Text>
            <Text>ID: {discussionData.id}</Text>
        </View>
    );
};*/

export default OneTchatScreen;