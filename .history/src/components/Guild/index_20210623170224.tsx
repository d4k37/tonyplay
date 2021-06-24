import React from 'react'
import {View, TouchableOpacityProps, TouchableOpacity} from 'react-native'
import {styles} from './styles'
import {GuildIcon} from '../GuildIcon'
export type GuildProps ={
    id: string,
    name: string,
    icon:string | null,
    owner: boolean,
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

    </TouchableOpacity>

  );
};