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

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {`\n`}
          Suas Jogatinas {`\n`}
          Facilmente{`\n`}
        </Text>

        <Text style={styles.subtitle}>
          Crie Grupos Para Jogar
          Seus Games {`\n`}Favoritos
          Com Amigos
        </Text>
      </View>

    </View>

  );
};