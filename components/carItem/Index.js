import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import styles from './Styles'

const CarItem = (props) => {
    return (
        <View style={styles.carContainer}>
        <ImageBackground 
          source={require('../../images/model-z.jpg')}
          style={styles.image}
        />
        <View style={styles.captions}>
        <Text style={styles.carCaption}>Model X</Text>
        <Text style={styles.carPrice}>Price $1000</Text>
        </View>
      </View>
    )
}

export default CarItem