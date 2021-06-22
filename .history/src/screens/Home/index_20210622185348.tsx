import React, { useState} from 'react'
import{FlatList, View} from 'react-native'
import { ButtonAdd } from '../../components/ButtonAdd'
import { CategorySelect } from '../../components/CategorySelect'
import { ListHeader } from '../../components/ListHeader'
import { Profile } from '../../components/Profile'
import {styles} from './styles'

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
            date:'22/06 às seu cu',
            description:'É hoje que vamos blkablablablabalblablablabla'
        }
    ]

    function handleCategorySelect(categoryId: string){
        categoryId === category ? setCategory('') : setCategory(categoryId)
    }

    return(
        <View>

        <View style={styles.header}>
        <Profile/>
        <ButtonAdd/>
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

                <FlatList  />
            </View>
        </View>
        </View>
    )
}