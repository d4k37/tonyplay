
import React from 'react';
import { Fontisto } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';

import {
  ImageBackground,
  Text,
  View,
  FlatList
} from 'react-native';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';
import BannerImg from '../../assets/banner.png';

import { ListDivider } from '../../components/ListDivider';
import { Background } from '../../components/Background';
import { ListHeader } from '../../components/ListHeader';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Member } from '../../components/Member';
import { Header } from '../../components/Header';
import { useRoute } from '@react-navigation/native';
import { AppointmentProps } from '../../components/Appointment';

type Params = {
  guildSelected: AppointmentProps
}

export function AppointmentDetails(){
  const route = useRoute
  const {} = route.params


  const members = [




    {
      id: '1',
      username: 'Rodrigo',
      avatar_url: 'https://github.com/rodrigorgtic.png',
      status: 'online'
    },
    {
      id: '2',
      username: 'Rodrigo',
      avatar_url: 'https://github.com/rodrigorgtic.png',
      status: 'offline'
    }
  ]
  return (
    <Background>
      <Header 
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto 
              name="share"
              size={24}
              color={theme.colors.primary}
            />
          </BorderlessButton>
        }
      />

      <ImageBackground 
        source={BannerImg}
        style={styles.banner}
      >
        <View style={styles.content}>
          <Text style={styles.title}> 
            Lendários 
          </Text>

          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>

      <ListHeader 
        title="Jogadores"
        subtitle="Total 3"
      />

      <FlatList 
        data={members}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Member data={item} />
        )}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        style={styles.members}
      />

      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida" />
      </View>
    </Background>
  );
}