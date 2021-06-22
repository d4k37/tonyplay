import {styles} from './styles'
import React from 'react'
import {
  View,
   Text, 
   Image,
   
  } from 'react-native'

  import IllustrationImg from '../../assets/illustration.png'
import { ButtonIcon } from '../../components/ButtonIcon';

export function SignIn(){

  

  return(

    <View style={styles.container}>

      <Image 
      source={ IllustrationImg}
      style={styles.image}
      resizeMode="stretch"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conect-se {`\n`}
          e organize {`\n`}
          suas "Jogatinas"{`\n`}
        </Text>

        <Text style={styles.subtitle}>
          Crie Grupos Para Jogar
          Seus Games {`\n`}Favoritos
          Com Amigos
        </Text>
        <ButtonIcon title="ENTRAR COM O DISCORD" activeOpacity={.7}/>


      </View>

    </View>

  );
};