import {  StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native';
import GuardItem from "./GuardItem";


function renderGuardItem({item}) {
    return <GuardItem item={item} />;
}


function GuardList({Guards,header,headerStyle}) {
    return (
        <FlatList
            data={Guards}
            ListHeaderComponent={header}
            ListHeaderComponentStyle={headerStyle}
            numColumns={2}
            columnWrapperStyle={{  justifyContent: "space-around" }}
            renderItem={renderGuardItem}
            keyExtractor={(item) => item.id}
        />
    );
}

export default GuardList;