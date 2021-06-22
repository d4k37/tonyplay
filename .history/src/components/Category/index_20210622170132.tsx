import React from 'react'
import {RectButton, RectButtonProps} from 'react-native-gesture-handler'
import{ View } from 'react-native'
import {SvgProps} from 'react-native-svg'

import DiscordImg from '../../assets/discord.png'
import {styles} from './styles'
import {categories} from '../../utils/categories'

type Props= RectButtonProps & {
    title: string;
    icon: React.FC<SvgProps>;
    checked?: boolean;

}


export function Category(){
    return(
        <View
        
        >

        </View>
    )
}