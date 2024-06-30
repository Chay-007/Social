import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Rating } from '@kolking/react-native-rating'
import { responsiveWidth } from 'react-native-responsive-dimensions'

const Ratings = ({Rate}) => {
  return (
    <Rating
    size={responsiveWidth(4)}
    fillColor={'#3FB300'}
    rating={Rate}
    disabled={true}
    color={'#FFDC57'}
  />
  )
}

export default Ratings

const styles = StyleSheet.create({})