import { StyleSheet } from "react-native";

export const LoginStyles = StyleSheet.create({
    header: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerImage: {
        width: 100,
        height: 100,
    },
    containerBox: {
        marginTop: 20,
        backgroundColor: '#a52a2a',
        flex: 1,
        borderRadius: 30,
    },
    titlePage: {
        fontFamily: 'Handjet-Bold',
        fontSize: 50,
        color: 'seashell',
        textAlign: 'center',
        marginTop: 20
    },
    containerLine: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    thinLine: {
        borderBottomColor: 'seashell',
        borderBottomWidth: StyleSheet.hairlineWidth,
        width: '50%',
        marginTop: 20,
        alignSelf: 'center'
    },
    textLabel: {
        fontFamily: 'Handjet-Medium',
        fontSize: 30,
        color: 'seashell',
        marginLeft: 70,
        marginTop: 30,
    },
    pixelInput: {
        fontFamily: 'Handjet-Medium',
        fontSize: 30,
        color: 'black',
    },
    containerTextInput: {
        alignItems: 'center',
        marginVertical: 10,
    },
    pixelButton: {
        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 35,
    },
    imageBackground: {
        width: 250, // ✅ give fixed size
        height: 60,
        justifyContent: 'center',
    },
    textInput: {
        height: 40,
        fontFamily: 'Handjet-Regular',
        width: '80%', // Adjust width as needed
        paddingHorizontal: 10,
        color: 'black', // Text color for visibility against the background
        fontSize: 25,
    },
    loginButton:{
        fontSize: 30, 
        fontFamily: 'Handjet-Bold', 
        color: 'Black',
    },
    signUp:{
        fontFamily:'Handjet-Regular', 
        fontSize: 20
    }
});
