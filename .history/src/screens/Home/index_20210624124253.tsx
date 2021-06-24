import React, { useState} from 'react'
import{FlatList, Text, View} from 'react-native'
import { ButtonAdd } from '../../components/ButtonAdd'
import { CategorySelect } from '../../components/CategorySelect'
import { ListHeader } from '../../components/ListHeader'
import { Profile } from '../../components/Profile'
import {styles} from './styles'
import{Background} from '../../components/Background'
import {Appointment} from '../../components/Appointment'
import {ListDivider} from '../../components/ListDivider'
import { useNavigation } from '@react-navigation/native'
export function Home() {
    const [category, setCategory] = useState('')

    const appointments = [
        {
            id:'1',
            guild:{
                id:'1',
                name:'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date:'22/06 às 10:10',
            description:'É hoje que vamos blkablablablabalblablablabla'
        },

        {
            id:'2',
            guild:{
                id:'1',
                name:'CS: Go',
                icon: null,
                owner: true
            },
            category: '1',
            date:'22/06 10:10',
            description:'É hoje que vamos blkablablablabalblablablabla'
        },
        {
            id:'3',
            guild:{
                id:'1',
                name:'CS: Go',
                icon: null,
                owner: true
            },
            category: '1',
            date:'22/06 10:10',
            description:'É hoje que vamos blkablablablabalblablablabla'
        },
        {
            id:'4',
            guild:{
                id:'1',
                name:'CS: Go',
                icon: null,
                owner: true
            },
            category: '1',
            date:'22/06 10:10',
            description:'É hoje que vamos blkablablablabalblablablabla'
        },
        {
            id:'5',
            guild:{
                id:'1',
                name:'CS: Go',
                icon: null,
                owner: true
            },
            category: '1',
            date:'22/06 10:10',
            description:'É hoje que vamos blkablablablabalblablablabla'
        },
        {
            id:'6',
            guild:{
                id:'1',
                name:'CS: Go',
                icon: null,
                owner: true
            },
            category: '1',
            date:'22/06 10:10',
            description:'É hoje que vamos blkablablablabalblablablabla'
        },
    ]

    const navigation = useNavigation()

    function handleCategorySelect(categoryId: string){
        categoryId === category ? setCategory('') : setCategory(categoryId)
    }

    function handleAppointmentDetails(){
        navigation.navigate('AppointmentDetails')
    }

    function handleAppointmentCreate(){
        navigation.navigate('AppointmentCreate')
    }

    return(
        <Background>

        <View style={styles.header}>
        <Profile/>
        <ButtonAdd onPress={handleAppointmentCreate}/>
        </View>

        <View>
            <CategorySelect
            categorySelected={category}
            setCategory={handleCategorySelect }
            
            />

            <View style={styles.content}>
                <ListHeader
                 title="Partidas Agendadas"
                 subtitle="vai pra puta que te pariu"   
                />

                <FlatList data={appointments} keyExtractor={item => item.id} renderItem={({item})=>(
                        <Appointment 
                        onPress={handleAppointmentDetails}
                        data={item }
                        />
                       
                )} 
                ItemSeparatorComponent={()=> <ListDivider/>}
                style={styles.matches}
                showsVerticalScrollIndicator={false}/>
            </View>
        </View>
        </Background>
    )
}