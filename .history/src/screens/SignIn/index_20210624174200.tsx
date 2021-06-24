import {styles} from './styles'
import React, {useContext} from 'react'
import {
  View,
   Text, 
   Image,
   Alert,
   ActivityIndicator,
  } from 'react-native'

  import IllustrationImg from '../../assets/illustration.png'
import { ButtonIcon } from '../../components/ButtonIcon';
import { useNavigation } from '@react-navigation/core';
import{Background} from '../../components/Background'
import {useAuth} from '../../hooks/auth'
import { theme } from '../../@types/styles/theme';


export function SignIn(){
  

  const {loading, signIn} = useAuth()
  

 async function HandleSignIn(){
    try{
      await signIn()
    }catch (error){
      Alert.alert(error)
    }
  }

  return(
    <Background>
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
        <ButtonIcon title="ENTRAR COM O "    onPress={HandleSignIn} />
       { loading ? <ActivityIndicator color={theme.colors.primary} /> : <ButtonIcon title="ENTRAR COM O DISCORD"    onPress={HandleSignIn} />}
      



      </View>

    </View>
    </Background>

  );
};