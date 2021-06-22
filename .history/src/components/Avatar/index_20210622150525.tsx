import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Text, View } from 'react-native'
import { theme } from '../../@types/styles/theme'
import { styles } from './styles'

export function Avatar(){
    
    return(
        <LinearGradient 
        style={styles.container}
        colors={[theme.colors.secondary80, theme.colors.secondary100]}
        >
             
        </LinearGradient>
    )
}