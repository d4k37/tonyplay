import React from 'react'
import {RectButton, RectButtonProps} from 'react-native-gesture-handler'
import{ View } from 'react-native'
import {SvgProps} from 'react-native-svg'

import DiscordImg from '../../assets/discord.png'
import {styles} from './styles'
import {categories} from '../../utils/categories'
import { LinearGradient } from 'expo-linear-gradient'
import { theme } from '../../@types/styles/theme'

type Props= RectButtonProps & {
    title: string;
    icon: React.FC<SvgProps>;
    checked?: boolean;

}


export function Category({
    title,
    icon: Icon,
    checked= false,
    ...rest
}: Props){
    return(
        <RectButton{...rest}>
        <LinearGradient 
        style={styles.container}
        colors={[theme.colors.secondary50, theme.colors.secondary70]}
        >
             <View style={[styles.content, {opacity: checked ? 1 : 0.4}]}
        </LinearGradient>
        </RectButton>
    )
}