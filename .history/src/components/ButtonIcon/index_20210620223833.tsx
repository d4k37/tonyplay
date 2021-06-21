import React from 'react'
import{
Text,
Image,
View,
TouchableOpacity,
} from 'react-native'

import DiscordImg from '../../assets/discord.png'
import {styles} from './styles'


export function ButtonIcon(){
    return(
        <TouchableOpacity>
            <View style="styles.iconWrapper">
                <Image src={DiscordImg} style={styles.icon}
            </View>
        </TouchableOpacity>
    )
}