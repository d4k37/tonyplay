import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import{RectButton, RectButtonProps} from 'react-native-gesture-handler'
import { Image, Text, View } from 'react-native'
import { theme } from '../../@types/styles/theme'
import { styles } from './styles'


type Props = {
    guildId: string,
    iconId: string,
}

export function GuildIcon(){
        const uri = 'https://static.wikia.nocookie.net/massfanon/images/f/f3/SsXdaPxK4JWa.png/revision/latest?cb=20161008225042'
    return(
     <Image 
        source={{uri}}
        style={styles.image}
        resizeMode="cover"
     />
    )
}