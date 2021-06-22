import React from 'react'
import { Text, View } from 'react-native'
import {RectButton, RectButtonProps} from 'react-native-gesture-handler'
import { Avatar } from '../Avatar'
import { styles } from './styles'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { theme } from '../../@types/styles/theme'

type Props= RectButtonProps

export function ButtonAdd({...rest}: Props){
    return(
        <RectButton 
        {...rest}
        style={styles.container}>
        <MaterialCommunityIcons name="plus" color={theme.colors.heading} size={24}/>


        </RectButton>
    )
}