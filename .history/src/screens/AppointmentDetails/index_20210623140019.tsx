import React from 'react'
import {View, ImageBackground} from 'react-native'
import { Background } from '../../components/Background'
import { Header } from '../../components/Header'
import {BorderlessButton} from 'react-native-gesture-handler'
import {Fontisto} from '@expo/vector-icons'
import { theme } from '../../@types/styles/theme'
import BannerImg from '../../assets/banner.png'
import { styles } from '../../components/Avatar/styles'


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

            </ImageBackground>

        </Background>
       
    )
}