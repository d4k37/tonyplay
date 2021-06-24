import React, {ReactNode} from 'react'
import {LinearGradient} from 'expo-linear-gradient'
import {View} from 'react-native'
import {Bordeless} from 'react-native-gesture-handler'
import { Background } from '../../components/Background'
import { theme } from '../../@types/styles/theme'


type Props = {
    title: string,
    action?: ReactNode,
}

export function Header({title, action}: Props){
    return(
       
       <LinearGradient
       colors={[theme.colors.secondary100, theme.colors.secondary40]}
       >

       </LinearGradient>
       
    )
}