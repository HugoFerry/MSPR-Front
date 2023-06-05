import {  StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native';
import MyGuardItem from "./MyGuardItem";


function renderGuardItem({item}) {
    return <MyGuardItem item={item} />;
}


function MyGuardList({Guards,header,headerStyle}) {
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

export default MyGuardList;