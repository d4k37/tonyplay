import {styles} from './styles'
import {
  View,
   Text, 
   Image,
   StatusBar,
  } from 'react-native'
  import IllustrationImg from '../../assets/illustration.png'

export function SignIn(){

  

  return(

    <View style={styles.container}>
<StatusBar
barStyle="light-content"
backgroundColor="transparent"
translucent
/>
      <Image 
      source={ IllustrationImg}
      style={styles.image}
      resizeMode="stretch"
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