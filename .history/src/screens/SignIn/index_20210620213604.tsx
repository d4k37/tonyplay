import React, {useState} from 'react'
import {styles} from './styles'
import {View, Text, TextInput} from 'react-native'

export function SignIn(){

  const [text, setText] = useState('');

  return(

    <View style={styles.container}>
      <Text>AE PORRA</Text>
      <TextInput style={styles.input}/>
      <Text>
        Você digitou...{text}
      </Text>
    </View>

  );
};