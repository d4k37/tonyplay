import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Image, Text, View } from 'react-native'
import { theme } from '../../@types/styles/theme'
import { styles } from './styles'

type Props ={
    title:string;
    subtitle:string;

}

export function ListHeader({title, subtitle}: Props){
    
    return(
      <View
      style={styles.container}
      >
          <Text style={styles.title}>
              {title}
          </Text>

          <Text style={styles.subtitle}>
              {subtitle}
          </Text>
      </View>
    )
}