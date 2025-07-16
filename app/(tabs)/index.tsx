import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView, StatusBar, Platform } from 'react-native';

function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'seashell' }}>
      <View
        style={{ height: 60, backgroundColor: 'sienna', justifyContent: 'center', alignItems: 'center' 
        }}>
        <Text style ={{color: 'white'}}>Hello, world!</Text>
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;