import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import{RectButton, RectButtonProps} from 'react-native-gesture-handler'
import { Image, Text, View } from 'react-native'
import { theme } from '../../@types/styles/theme'
import { styles } from './styles'
import PlayerSvg from '../../assets/player.svg'
import CalendarSvg from '../../assets/calendar.svg'
import {GuildIcon } from '../GuildIcon'
import { categories } from '../../utils/categories'
import { GuildProps } from '../Guild'


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
    const {owner} = data.guild
    const {primary, on}= theme.colors;
    
    return(
      <RectButton
      
      {...rest}
      >
          <View style={styles.container}>
              <LinearGradient style={styles.guildIconContainer} colors={[theme.colors.secondary50, theme.colors.secondary70]}>
              <GuildIcon/>
              </LinearGradient>

            <View style={styles.content}>
                <View style={styles.header}>

                    <Text style={styles.title}>
                        {data.guild.name}
                    </Text>

                    <Text style={styles.category}>
                        {category.title}
                    </Text>

                    </View> 

                    <View style={styles.footer}>
                        <View style={styles.dateInfo}>
                            <CalendarSvg/>
                            <Text style={styles.date}>{data.date}</Text>
                        </View>
                    </View>

                    <View style={styles.playersInfo}>
                    <PlayerSvg fill={owner? primary : on} />
                    <Text style={[
                        styles.players, {color: owner? primary: on}
                    ]}>
                    {owner ? 'Anfitri??o': 'Visitante'}
                    </Text>
                   </View>
                 
                </View>
             </View>
         </RectButton>
    )
}