import { StyleSheet } from "react-native";

export const OtpStyle = StyleSheet.create({
    screen:{
        backgroundColor: '#a52a2a',
    },
    titleContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'seashell',
        width: '100%',
        height: 90,
        marginTop: 70
    },
    logo:{
        width: 200,
        height: 200
    },
    title:{
        fontFamily: 'Handjet-Bold',
        fontSize: 50,
        color: '#a52a2a'
    },
    logoContainer:{
        marginTop: 40,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    codeRow:{
        flexDirection: 'row',
        
    }
});