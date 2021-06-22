import React from 'react'
import { Text, View } from 'react-native'
import {RectButton, RectButtonProps} from 'react-native-gesture-handler'
import { Avatar } from '../Avatar'
import { styles } from './styles'


type Props= RectButtonProps

export function ButtonAdd({...rest}: Props){
    return(
        <RectButton 
        {...rest}
        style={styles.container}>
        


        </RectButton>
    )
}