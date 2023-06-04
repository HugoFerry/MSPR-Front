import {StyleSheet} from "react-native";

export const OnePlantScreenstyles = StyleSheet.create({
    globalcontainer:{
        flex: 1,
        alignItems: 'center',
    },
    title:{
        fontSize:36,
        marginBottom:5
    },
    button:{
        width: '40%',
        height:'auto',
        margin : 10,
    },
    buttonmodal:{
        position: 'absolute',
        top: 200,
        right: 20,
        backgroundColor: 'grey',
        padding: 10,
        borderRadius: 5,
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
    partie : {
        flexDirection: "row",
        width: "100%",
        height: "auto",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: '100%',
    },
    imageView: {
        flex: 1,
        width: "100%",
        height: "100%",
    },

    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 5,
        width: 250,
    },

    ModalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 20,

    },

    TextView: {
        flex: 1,
        flexDirection: 'column',
        height: 'auto',
        width: '70%',
        borderWidth: 2,
        borderColor: 'green',
        backgroundColor: 'white',
        marginLeft: 5,
        borderRadius: 5,
    },

    InfoView: {
        flex: 1,
        flexDirection: 'column',
        height: 'auto',
        width: '30%',
        BackgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 2,
    }
});

