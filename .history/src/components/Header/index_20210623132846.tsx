import React, {ReactNode} from 'react'
import {LinearGradient} from 'expo-linear-gradient'
import {View, Text} from 'react-native'
import {BorderlessButton} from 'react-native-gesture-handler'
import { Background } from '../../components/Background'
import { theme } from '../../@types/styles/theme'
import {Feather} from '@expo/vector-icons'

type Props = {
    title: string,
    action?: ReactNode,
}

export function Header({title, action}: Props){
    return(
       
       <LinearGradient
       colors={[theme.colors.secondary100, theme.colors.secondary40]}
       >
           <BorderlessButton>
               <Feather
               icon="arrow.left"
               size={24}
               color={theme.colors.heading}
               />
           </BorderlessButton>

            <Text>
                {title}
            </Text>

            {
                action && <View>{action}</View>
            }

       </LinearGradient>
       
    )
}