import React from 'react'
import {LinearGradient} from 'expo-linear-gradient'
import {styles} from './styles'
import { theme } from '../../@types/styles/theme'

export function Background(){
    return{
       <LinearGradient
       style={styles.container}
       colors={[theme.colors.secondary80, theme.colors.secondary100]}
       >

       </LinearGradient>

    }
}