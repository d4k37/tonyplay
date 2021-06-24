import React, {ReactNode} from 'react'
import { useNavigation } from '@react-navigation/native'
import {LinearGradient} from 'expo-linear-gradient'
import {View, Text} from 'react-native'
import {BorderlessButton} from 'react-native-gesture-handler'
import { Background } from '../../components/Background'
import { theme } from '../../@types/styles/theme'
import {Feather} from '@expo/vector-icons'
import {styles} from './styles'

type Props = {
    title: string,
    action?: ReactNode,
}

export function Header({title, action}: Props){

    const navigation = useNavigation()

    function handleGoBack(){
        navigation.goBack()
     }

    return(
       
       <LinearGradient style={styles.container}
       colors={[theme.colors.secondary100, theme.colors.secondary40]}
       >
           <BorderlessButton onPress={handleGoBack}>
               <Feather
               name="arrow-left"
               size={24}
               color={theme.colors.heading}
               />
           </BorderlessButton>

            <Text style={styles.title}>
                {title}
            </Text>

            {
                action ? <View>{action}</View> : <View style={{width:24}} />
            }

       </LinearGradient>
       
    )
}