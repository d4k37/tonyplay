import React from 'react'
import {RectButton, RectButtonProps} from 'react-native-gesture-handler'
import{
Text,
Image,
View,
} from 'react-native'

import DiscordImg from '../../assets/discord.png'
import {styles} from './styles'

type Props= RectButtonProps & {
    title: string;

}


export function CategorySelect(){
    return(
       <View style={styles.container}>
           
       </View>
    )
}