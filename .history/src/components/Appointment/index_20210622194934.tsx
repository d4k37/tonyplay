import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import{RectButton, RectButtonProps} from 'react-native-gesture-handler'
import { Image, Text, View } from 'react-native'
import { theme } from '../../@types/styles/theme'
import { styles } from './styles'
import {GuildIcon } from '../GuildIcon'
import { categories } from '../../utils/categories'

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

    const [category] = categories.filter(item => item.id === data.category)
    
    return(
      <RectButton
      
      {...rest}
      >
          <View style={styles.container}>
              <GuildIcon/>

            <View style={styles.content}>
                <View style={styles.header}>

                    <Text style={styles.title}>
                        {data.guild.name}
                    </Text>

                    <Text style={styles.category}>
                        {category.title}
                    </Text>

                </View>

            </View>

          </View>

          
      </RectButton>
    )
}