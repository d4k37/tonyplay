import React from 'react'
import {View} from 'react-native'
import { Background } from '../../components/Background'
import { Header } from '../../components/Header'
import {BorderlessButton} from 'react-native-gesture-handler'
import {Fontisto} from '@expo/vector-icons'


export function AppointmentDetails(){
    return(
        <Background>
            <Header title="Detalhes" 
            action={
                <BorderlessButton></BorderlessButton>
            }
            />
        </Background>
       
    )
}