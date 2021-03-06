import React from 'react'
import {View, FlatList, Text} from 'react-native'
import {styles} from './styles'
import {Guild, GuildProps} from '../../components/Guild'
import {ListDivider} from '../../components/ListDivider'


type Props ={
    handleGuildSelect: (guild: GuildProps)=> void,
}

export function Guilds({handleGuildSelect}: Props){
    const guilds = [
        {
            id:'1',
            name:'Lendários',
            icon: "image.png",
            owner: true,
        },
        {
            id:'2',
            name:'Lalelulelo',
            icon: "image.png",
            owner: true,
        },
    ]
    return(

        <View style={styles.container}>
            <FlatList  
            data={guilds}
            keyExtractor={item=> item.id}
            renderItem={({item})=>(
                <Guild data={item} onPress={()=> handleGuildSelect(item)}/>
            )}
            ItemSeparatorComponent={()=> <ListDivider isCentered />}
            contentContainerStyle={{paddingBottom: 68, paddingTop: 104,}}
            ListHeaderComponent={()=> <ListDivider isCentered />}
            showsVerticalScrollIndicator={false}
            style={styles.guilds}
            />
        </View>

  );
};