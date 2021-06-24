import React from 'react'
import {RectButton, RectButtonProps} from 'react-native-gesture-handler'
import{ Text, View } from 'react-native'
import {SvgProps} from 'react-native-svg'

import DiscordImg from '../../assets/discord.png'
import {styles} from './styles'
import {categories} from '../../utils/categories'

import { theme } from '../../@types/styles/theme'
import { LinearGradient } from 'expo-linear-gradient'

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
             <View style={[styles.content, {opacity: checked ? 1 : 0.4}]}>
                 <View style={checked ? styles.checked : styles.check}/>
                    

                 <Icon width={48} height={48}/>
                 <Text style={styles.title}>
                     {title}
                 </Text>
             </View>
        </LinearGradient>
        </RectButton>
    )
}