import React, {ReactNode} from 'react'
import {LinearGradient} from 'expo-linear-gradient'
import {View, Text} from 'react-native'
import {BorderlessButton} from 'react-native-gesture-handler'
import { Background } from '../../components/Background'
import { theme } from '../../@types/styles/theme'
import {Feather} from '@expo/vector-icons'
import {styles} from './styles'
import { useNavigation } from '@react-navigation/native'

type Props = {
    title: string,
    action?: ReactNode,
}

export function Header({title, action}: Props){

    const navigation = useNavigation



    return(
       
       <LinearGradient style={styles.container}
       colors={[theme.colors.secondary100, theme.colors.secondary40]}
       >
           <BorderlessButton onPress={handleGoBack}>
               <Feather
               name="eye"
               size={24}
               color={theme.colors.heading}
               />
           </BorderlessButton>

            <Text style={styles.title}>
                {title}
            </Text>

            {
                action && <View>{action}</View>
            }

       </LinearGradient>
       
    )
}