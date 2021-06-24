import React, {ReactNode} from 'react'
import {LinearGradient} from 'expo-linear-gradient'
import {View} from 'react-native'
import { Background } from '../../components/Background'


type Props = {
    title: string,
    action?: ReactNode,
}

export function Header({title, action}: Props){
    return(
       
       <LinearGradient
       colors={[]}
       >

       </LinearGradient>
       
    )
}