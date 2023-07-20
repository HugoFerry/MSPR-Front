import {SectionList, StyleSheet, Text, View} from 'react-native';
import { FlatList } from 'react-native';
import TchatItem from "./TchatItem";


function renderTchatItem({item}) {
    return <TchatItem item={item} />;
}


function TchatList({Tchats,header,headerStyle}) {
    return (
        <FlatList
            data={Tchats}
            ListHeaderComponent={header}
            ListHeaderComponentStyle={headerStyle}
            numColumns={2}
            columnWrapperStyle={{  justifyContent: "space-around" }}
            renderItem={renderTchatItem}
            keyExtractor={(item) => item.id}
        />
    );
}

export default TchatList;