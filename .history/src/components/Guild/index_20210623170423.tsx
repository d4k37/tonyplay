import React from 'react'
import {View, TouchableOpacityProps, TouchableOpacity, Text} from 'react-native'
import {styles} from './styles'
import {GuildIcon} from '../GuildIcon'
export type GuildProps ={
    id: string,
    name: string,
    icon:string | null,
    owen: boolean,
}

type Props = TouchableOpacityProps & {
    data: GuildProps
}

export function exemplo({data, ...rest}: Props){
    return(
    <TouchableOpacity
    style={styles.container}
    activeOpacity={0.7}
    {...rest}
    >
        <GuildIcon />
        <View style={styles.content}>
            <View>
                <Text style={styles.title}>{data.name}</Text>

                <Text>{data.owen ? 'Administrador' : 'Convidado'}</Text>
            </View>
        </View>
    </TouchableOpacity>

  );
};