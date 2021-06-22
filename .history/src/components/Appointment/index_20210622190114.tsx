import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import{RectButton} from 'react-native-gesture-handler'
import { Image, Text, View } from 'react-native'
import { theme } from '../../@types/styles/theme'
import { styles } from './styles'

export type GuildProps={

}


export type AppointmentProps={
    id:string;
    guild: GuildProps;
    category: string;
    date: string;
    description: string;
}
type Props =RectButton &{
    data: AppointmentProps;

}

export function Appointment({title, subtitle}: Props){
    
    return(
      <View
      style={styles.container}
      >
          
      </View>
    )
}