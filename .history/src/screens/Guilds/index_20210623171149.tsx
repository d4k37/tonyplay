import React from 'react'
import {View, FlatList, Text} from 'react-native'
import {styles} from './styles'
import {Guild} from '../../components/Guild'
import {ListDivider} from '../../components/ListDivider'
export function exemplo(){
    const guilds = [
        {
            id:'1',
            name:'Lendários',
            icon: null,
            owner: true,
        }
    ]
    return(

        <View style={styles.container}>
            <FlatList  
            data={guilds}
            keyExtractor={item=> item.id}
            renderItem={({item})=>(
                <Guild data={item}/>
            )}
            />
        </View>

  );
};