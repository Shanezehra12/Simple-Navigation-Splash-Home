import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function HomeScreen() {
  return (
    <View style = {{alignItems: "center",justifyContent: 'center', margin: 50 }}>
      <Text style = {{color: 'black', alignItems: "center", fontSize: 30}}> Home Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})