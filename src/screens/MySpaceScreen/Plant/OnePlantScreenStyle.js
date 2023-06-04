import {StyleSheet} from "react-native";

export const OnePlantScreenstyles = StyleSheet.create({
    globalcontainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontSize:36,
        marginBottom:5
    },
    button:{
        width:358,
        height:53
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
    onglet : {
        flexDirection: "row",
        width: "100%",
        height: 50,
        alignItems: "center",
        backgroundColor: "lightgrey"
    },
    case_onglet : {
        justifyContent: "center",
        width: "50%",
        height: "100%",
        alignItems: "center",
        backgroundColor: "grey",
    },
    image: {
        flex: 1,
        width: "100%",
    },
    imageView: {
        flex: 1,
        width: "100%",
        height: "100%",
    }

});

