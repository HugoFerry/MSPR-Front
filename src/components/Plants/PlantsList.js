import {  StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native';
import PlantItem from "./PlantItem";


function renderPlantItem({item}) {
    return <PlantItem item={item} />;
}


function PlantList({Plants,header,headerStyle}) {
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

export default PlantList;