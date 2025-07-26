import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert, SafeAreaView, Pressable, ImageBackground, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { OtpStyle as style } from '../styles/OtpStyle';


export default function OtpScreen(){
    const [fontsLoaded] = useFonts({
            'Handjet-Regular': require('../../assets/fonts/Handjet-Regular.ttf'),
            'Handjet-Bold': require('../../assets/fonts/Handjet-Bold.ttf'),
            'Handjet-Medium': require('../../assets/fonts/Handjet-Medium.ttf'),
    
    });
    return(
        <ScrollView style={style.screen}>
            <SafeAreaView>
                <View style={style.titleContainer}>
                    <Text style={style.title}>
                        OTP Verification
                    </Text>
                </View>
                <Text style={style.subtitle}>
                    Enter the OTP sent to your email address
                </Text>
                <View style={style.logoContainer}>
                    <ImageBackground
                    source={require('../../assets/images/OTPLogo.png')}
                        style={style.logo}>
                    </ImageBackground>
                </View>
                <View style={style.codeRow}>
                    <TextInput
                        style={style.input}
                        placeholder="Enter OTP"
                        keyboardType="numeric"
                        maxLength={4}
                    />
                </View>
                <View>
                    
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}