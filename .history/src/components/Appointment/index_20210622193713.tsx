import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import{RectButton, RectButtonProps} from 'react-native-gesture-handler'
import { Image, Text, View } from 'react-native'
import { theme } from '../../@types/styles/theme'
import { styles } from './styles'
import {GuildIcon } from '../GuildIcon'

export type GuildProps={

}


export type AppointmentProps={
    id:string;
    guild: GuildProps;
    category: string;
    date: string;
    description: string;
}
type Props =RectButtonProps &{
    data: AppointmentProps;

}

export function Appointment({data, ...rest}: Props){
    
    return(
      <RectButton
      
      {...rest}
      >
          <View style={styles.container}>
              <GuildIdon/>
          </View>

          
      </RectButton>
    )
}