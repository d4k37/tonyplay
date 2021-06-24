import React from 'react'
import {View, TouchableOpacityProps, TouchableOpacity} from 'react-native'
import {styles} from './styles'

export type GuildProps ={
    id: string,
    name: string,
    icon:string | null,
    owner: boolean,
}

type Props = TouchableOpacityProps && {
    data: GuildProps
}

export function exemplo(){
return(
    <TouchableOpacity>

    </TouchableOpacity>

  );
};