import React from 'react'
import {View, ImageBackground, Text, FlatList} from 'react-native'
import { Background } from '../../components/Background'
import { ListHeader } from '../../components/ListHeader'
import { Header } from '../Header'
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

export function Member({data}: Props){

    const isOnline = data.status ==='online'

    return(
        <View style={styles.container}>
            <Avatar urlImage={data.avatar_url} />
            <View>
                <Text style={styles.title}>{data.username}</Text>

                <View style={styles.status}>
                    <View  
                    style={[
                        styles.bulletStatus,
                        {
                            backgroundColor: isOnline ? theme.colors.on : theme.colors.primary
                        }
                    ]}
                    />
                   
                        <Text style={styles.nameStatus}>
                            {isOnline ? 'Disponível' : 'Ocupado'}
                        </Text>
                    
                </View>
                </View>
        </View>
    )

}