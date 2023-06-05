import {StyleSheet} from "react-native";

export const GuardsScreenstyles = StyleSheet.create({
    globalcontainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontSize:36,
        marginBottom:5
    },
    header_title:{
        fontSize:24,
        color: 'black',
        fontWeight: 'bold'
    },
    button:{
        width:358,
        height:53,
        marginTop: 20
    },
    buttonAdd:{
        width:358,
        marginBottom: 50,
        marginTop: 50,
        height:53
    },
    buttonTextSelected: {
        color: 'green',
    },
    containerTop:{
        marginTop: 15,
        marginBottom: 35,
        alignItems:"center"
    },
    subTitle:{
        fontSize:24,
    },
    text :{
        marginLeft:15,
        marginBottom:5,

    },
    onglet: {
        flexDirection: "row",
        justifyContent: 'center',
        backgroundColor: "white",
        padding: 20,
        fontSize: 36,
        width: "100%",
        gap: 50
    },
    container: {
        flex: 1,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 80,
        margin: 20
    },
    label: {
        marginRight: 10,
        fontSize: 28,
    },
    input: {
        flex: 1,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        fontSize: 16,
    },

});

