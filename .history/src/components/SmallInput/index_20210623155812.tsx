import React from 'react'
import {View, TextInput, TextInputProps} from 'react-native'
import {styles} from './styles'

export function exemplo({...rest}: TextInputProps){
    return(
        <TextInput  
        style={styles.container}
        {...rest}
        />
    );
};
