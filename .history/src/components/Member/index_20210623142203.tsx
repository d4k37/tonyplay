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
import { Avatar } from '../Avatar'


export type MemberProps={
    id: string,
    username: string,
    avatar_url: string,
    status: string,
}

type Props ={
    data: MemberProps,
}

export function Member(){

    return(
        <Vie style={styles.container}>
            <Avatar urlImage={} />
        </View>
    )

}