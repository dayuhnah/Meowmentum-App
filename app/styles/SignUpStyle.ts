import { StyleSheet } from "react-native";

export const SignUpStyles = StyleSheet.create({
    screen:{
        backgroundColor: '#a52a2a',
        flex: 1,
    },
    containerLine: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    thinLine: {
        borderBottomColor: 'seashell',
        borderBottomWidth: StyleSheet.hairlineWidth,
        width: '40%',
        marginTop: 20,
        alignSelf: 'center'
    },
    titleContainer:{
        justifyContent:'center',
        alignItems:'center',
    },
    titleScreen:{
        fontFamily:'Handjet-Bold',
        fontSize: 40,
        color: 'seashell'
    },
    textLabel: {
        fontFamily: 'Handjet-Medium',
        fontSize: 25,
        color: 'seashell',
        marginLeft: 70,
        marginTop: 10,
    },
    pixelInput: {
        fontFamily: 'Handjet-Medium',
        fontSize: 20,
        color: 'black',
    },
    containerTextInput: {
        alignItems: 'center',
        marginVertical: 10,
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
        fontSize: 20,
    },
    signUpButton:{
        fontSize: 30, 
        fontFamily: 'Handjet-Bold', 
        color: 'Black',
        paddingLeft: 5 
    },
    pixelButton: {
        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 70
    },
});