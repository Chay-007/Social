import { StyleSheet, Text, View,Modal, ActivityIndicator } from 'react-native'
import React from 'react'

const CustomLoader = ({
    loader
}) => {
  return (
  
          <Modal animationType="fade" transparent={true} visible={props.loader}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ActivityIndicator size="large" color="white" />
            </View>
          </Modal>
        );
     
}

export default CustomLoader

const styles = StyleSheet.create({})