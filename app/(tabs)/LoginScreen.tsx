import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert, SafeAreaView, Pressable, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { LoginStyles as style } from '../styles/LoginStyle';

export default function LoginScreen() {
    const [fontsLoaded] = useFonts({
        'Handjet-Regular': require('../../assets/fonts/Handjet-Regular.ttf'),
        'Handjet-Bold': require('../../assets/fonts/Handjet-Bold.ttf'),
        'Handjet-Medium': require('../../assets/fonts/Handjet-Medium.ttf'),

    });

    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'seashell' }}>
            <View style={[style.header]}>
                <Image source={require('../../assets/images/Logo.png')}
                    style={style.headerImage} />
            </View>
            <View style={[style.containerBox]}>
                <Text style={style.titlePage}>Log In</Text>
                <View style={style.containerLine} />
                <View style={style.thinLine} />
                <Text style={style.textLabel}>Username</Text>
                <View style={style.containerTextInput}>
                    <ImageBackground
                        source={require('../../assets/images/PixelText.png')}
                        style={style.imageBackground}>
                        <TextInput
                            style={style.textInput}
                            placeholder="Enter Username"
                        />
                    </ImageBackground>
                </View>
                <Text style={style.textLabel}>Password</Text>
                <View style={style.containerTextInput}>
                    <ImageBackground
                        source={require('../../assets/images/PixelText.png')}
                        style={style.imageBackground}>
                        <TextInput
                            style={style.textInput}
                            placeholder="Enter Password"
                        />
                    </ImageBackground>
                </View>
                <View style={style.containerLine}>
                    <TouchableOpacity onPress={() => alert('Button Pressed!')}>
                        <ImageBackground
                            source={require('../../assets/images/PixelButton.png')}
                            style={style.pixelButton}
                            imageStyle={{ resizeMode: 'stretch' }}>
                            <Text style={style.loginButton}>
                                Log In
                            </Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 30, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={style.signUp}>
                        Don't have an account yet?
                        <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}><Text style={{ textDecorationLine: 'underline' }}> Sign Up Here!</Text></TouchableOpacity>
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

