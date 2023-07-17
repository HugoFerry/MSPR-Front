import TchatListScreen from "./tchatListScreen";

import React from 'react';
import { View, Text } from 'react-native';

const OneTchatScreen = ({ route }) => {
    const { conversationId } = route.params;

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Conversation ID: {conversationId}</Text>
        </View>
    );
};


export default OneTchatScreen;