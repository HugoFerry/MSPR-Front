import {  StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native';
import PlantItemToGuard from "./PlantItemToGuard";


function renderPlantItem({item}) {
    return <PlantItemToGuard item={item} />;
}


function PlantListToGuard({Plants,header,headerStyle}) {
    return (
        <FlatList
            data={Plants}
            ListHeaderComponent={header}
            ListHeaderComponentStyle={headerStyle}
            numColumns={2}
            columnWrapperStyle={{  justifyContent: "space-around" }}
            renderItem={renderPlantItem}
            keyExtractor={(item) => item.id}
        />
    );
}

export default PlantListToGuard;