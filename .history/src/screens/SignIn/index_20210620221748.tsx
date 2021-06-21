import React, {useState} from 'react'
import {styles} from './styles'
import {
  View,
   Text, 
   Image,
  } from 'react-native'
  import IllustrationImg from '../../assets/illustration.png'

export function SignIn(){

  const [text, setText] = useState('');

  return(

    <View style={styles.container}>

      <Image 
      source={ IllustrationImg}
      style={styles.image}
      />

    </View>

  );
};