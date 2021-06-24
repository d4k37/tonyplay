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

    const members = [
        {
            id:'1',
            username: 'mati',
            avatar_url: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/80/805514d2bd048e11c775e8002e808ab9c18a154c_full.jpg',
            status: "online"
        },
        {
            id:'2',
            username: 'd4k37',
            avatar_url: 'https://github.com/d4k37rgtic.png',
            status: "offline"
        }
    ]

    return(
        <Background>
            <Header title="LALALALA"
            />


            
        </Background>
       
    )
}