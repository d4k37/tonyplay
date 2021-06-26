import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import{RectButton, RectButtonProps} from 'react-native-gesture-handler'
import { Image, Text, View } from 'react-native'
import { theme } from '../../@types/styles/theme'
import { styles } from './styles'

const {CDN_IMAGE} = process.env

type Props = {
    guildId: string,
    iconId: string,
}

export function GuildIcon({guildId,iconId}: Props){
        const uri = `${CDN_IMAGE}/icons/${}`
    return(
     <Image 
        source={{uri}}
        style={styles.image}
        resizeMode="cover"
     />
    )
}