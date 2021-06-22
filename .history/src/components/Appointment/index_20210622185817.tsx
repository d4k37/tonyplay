import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Image, Text, View } from 'react-native'
import { theme } from '../../@types/styles/theme'
import { styles } from './styles'

type Props ={
    title:string;
    subtitle:string;

}

export function Appointment({title, subtitle}: Props){
    
    return(
      <View
      style={styles.container}
      >
          
      </View>
    )
}