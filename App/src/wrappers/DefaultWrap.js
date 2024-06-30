import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

const DefaultWrap = ({ children, style }) => {
  return (
    <View style={[styles.contaner, style]}>
      {children}
    </View>
  )
}

export default DefaultWrap

const styles = StyleSheet.create({
  contaner: {
    flex: 1,
    backgroundColor:"white"
  }
})