import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const SplashScreen = ({navigation}) => {
  return (
    <View style = {{alignItems: "center",justifyContent: 'center', margin: 50 }}>
      <Text style = {{color: 'black',  fontSize: 20}}> Splash Screen</Text>

      <TouchableOpacity onPress={() => {navigation.navigate('Home')}}
      >
      <Text style = {{color: 'red',  fontSize: 60}}> START </Text>

      </TouchableOpacity>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})