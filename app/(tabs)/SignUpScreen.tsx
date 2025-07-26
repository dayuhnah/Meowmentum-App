import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert, SafeAreaView, Pressable, ImageBackground, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SignUpStyles as style } from '../styles/SignUpStyle';

export default function SignUpScreen() {
    const [fontsLoaded] = useFonts({
        'Handjet-Regular': require('../../assets/fonts/Handjet-Regular.ttf'),
        'Handjet-Bold': require('../../assets/fonts/Handjet-Bold.ttf'),
        'Handjet-Medium': require('../../assets/fonts/Handjet-Medium.ttf'),

    });

    return (
        <ScrollView style={style.screen}>
            <SafeAreaView>
                <View style={style.titleContainer}>
                    <Text style={style.titleScreen}>Sign Up</Text>
                </View>
                <View style={style.containerLine} />
                <View style={style.thinLine} />
                <Text style={style.textLabel}>First Name</Text>
                <View style={style.containerTextInput}>
                    <ImageBackground
                        source={require('../../assets/images/PixelText.png')}
                        style={style.imageBackground}>
                        <TextInput
                            style={style.textInput}
                            placeholder="John"
                        />
                    </ImageBackground>
                </View>
                <Text style={style.textLabel}>Last Name</Text>
                <View style={style.containerTextInput}>
                    <ImageBackground
                        source={require('../../assets/images/PixelText.png')}
                        style={style.imageBackground}>
                        <TextInput
                            style={style.textInput}
                            placeholder="Smith"
                        />
                    </ImageBackground>
                </View>
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
                <Text style={style.textLabel}>Confirm Password</Text>
                <View style={style.containerTextInput}>
                    <ImageBackground
                        source={require('../../assets/images/PixelText.png')}
                        style={style.imageBackground}>
                        <TextInput
                            style={style.textInput}
                            placeholder="Re-Enter Password"
                        />
                    </ImageBackground>
                </View>
                <View style={style.containerLine}>
                    <TouchableOpacity onPress={() => alert('Button Pressed!')}>
                        <ImageBackground
                            source={require('../../assets/images/PixelButton.png')}
                            style={style.pixelButton}
                            imageStyle={{ resizeMode: 'stretch' }}>
                            <Text style={style.signUpButton}>
                                Sign Up
                            </Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}