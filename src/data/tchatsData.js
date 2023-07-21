import AsyncStorage from '@react-native-async-storage/async-storage';


const getDiscussionsByUserId = async () => {
    try {
        const token = await AsyncStorage.getItem('@TOKEN');
        console.log(token)
        const userId = await AsyncStorage.getItem('@USERID')
        console.log(userId)
        if (!token) {
            // Gérer le cas où le token n'est pas disponible ou n'est pas valide
            console.log("Token non disponible. Assurez-vous que l'utilisateur est connecté.");
            return [];
        }

        const url = `http://51.77.157.173:8888/Discussion/user/${userId}`;

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            console.log('La requête a échoué avec le statut:', response.status);
            return [];
        }

        const discussions = await response.json();
        return discussions;
    } catch (error) {
        console.log('Erreur lors de la récupération des discussions:', error);
        return [];
    }
};
export default getDiscussionsByUserId;
