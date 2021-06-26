import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import{RectButton, RectButtonProps} from 'react-native-gesture-handler'
import { Image, Text, View } from 'react-native'
import { theme } from '../../@types/styles/theme'
import { styles } from './styles'
import DiscordSvg from '../../assets/discord.svg'


const {CDN_IMAGE} = process.env

type Props = {
    guildId: string,
    iconId: string | null,
}

export function GuildIcon({guildId,iconId}: Props){
        const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`

    return(
        <View style={styles.container}>
        {
            iconId ?  
            <Image 
            source={{uri}}
            style={styles.image}
            resizeMode="cover"
         />
         : <DiscordSvg width={40} height={40} />
        }
        </View>
    )
}