import React, { useState } from 'react'
import {View, ImageBackground, Text, FlatList} from 'react-native'
import { Background } from '../../components/Background'
import { ListHeader } from '../../components/ListHeader'
import { Header } from '../../components/Header'
import { CategorySelect } from '../../components/CategorySelect'
import {BorderlessButton, RectButtonProps, RectButton} from 'react-native-gesture-handler'
import {Fontisto} from '@expo/vector-icons'
import { theme } from '../../@types/styles/theme'
import BannerImg from '../../assets/banner.png'
import { styles } from './styles'
import { Member } from '../../components/Member'
import { ListDivider } from '../../components/ListDivider'
import { ButtonIcon } from '../../components/ButtonIcon'
import { Category } from '../../components/Category'


export function AppointmentCreate(){
    const [category, setCategory] = useState('')
    return(
        <Background>
            <Header title="Agendar Partida"
            />

        <Text style={styles.label}>Categoria</Text>
        <CategorySelect 
        hasCheckBox
        setCategory={setCategory}
        categorySelected={category}
        />
            <View style={styles.form}>
                <RectButton>
                    <View style={styles.select}>

                    <View  style={styles.image}  />
                    <View style={styles.selectBody}>
                        <Text style={styles.label}>Selecione um Servidor</Text>
                    </View>
                    
                    </View>
                </RectButton>
            </View>
        </Background>
       
    )
}