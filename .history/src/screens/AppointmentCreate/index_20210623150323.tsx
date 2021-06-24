import React from 'react'
import {View, ImageBackground, Text, FlatList} from 'react-native'
import { Background } from '../../components/Background'
import { ListHeader } from '../../components/ListHeader'
import { Header } from '../../components/Header'

import {BorderlessButton} from 'react-native-gesture-handler'
import {Fontisto} from '@expo/vector-icons'
import { theme } from '../../@types/styles/theme'
import BannerImg from '../../assets/banner.png'
import { styles } from './styles'
import { Member } from '../../components/Member'
import { ListDivider } from '../../components/ListDivider'
import { ButtonIcon } from '../../components/ButtonIcon'


export function AppointmentCreate(){
    return(
        <Background>
            <Header title="Agendar Partida"
            />

        <Text style={styles.label}>Categoria</Text>
            
        </Background>
       
    )
}