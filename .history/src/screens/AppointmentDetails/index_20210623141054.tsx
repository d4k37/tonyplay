import React from 'react'
import {View, ImageBackground, Text} from 'react-native'
import { Background } from '../../components/Background'
import { ListHeader } from '../../components/ListHeader'
import { Header } from '../../components/Header'
import {BorderlessButton} from 'react-native-gesture-handler'
import {Fontisto} from '@expo/vector-icons'
import { theme } from '../../@types/styles/theme'
import BannerImg from '../../assets/banner.png'
import { styles } from './styles'


export function AppointmentDetails(){
    return(
        <Background>
            <Header title="Detalhes" 
            action={
                <BorderlessButton>
                    <Fontisto name="share" size={24} color={theme.colors.primary } />
                </BorderlessButton>
            }
            />


            <ImageBackground 
            source={BannerImg}
            style={styles.banner}
            >
                <View style={styles.content}>

                
                <Text style={styles.title}>Lendários</Text>
                <Text style={styles.subtitle}>
                    É hoje que blablablablablablabla sem nem blablabalbalbal
                </Text >
                </View>
            </ImageBackground>
            <ListHeader/>
        </Background>
       
    )
}