
import React, { useState, useEffect } from 'react';
import { Fontisto } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';

import {
  ImageBackground,
  Text,
  View,
  FlatList,
  Alert,
  Share,
  Platform
} from 'react-native';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';
import BannerImg from '../../assets/banner.png';

import { ListDivider } from '../../components/ListDivider';
import { Background } from '../../components/Background';
import { ListHeader } from '../../components/ListHeader';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Member, MemberProps } from '../../components/Member';
import { Header } from '../../components/Header';
import { useRoute as route, useRoute } from '@react-navigation/native';

import { api } from '../../services/api';
import { Load } from '../../components/Load';
import { AppointmentProps } from '../../components/Appointment';
import * as Linking from 'expo-linking'
type Params = {
  guildSelected: AppointmentProps
}

type GuildWidget ={
  id: string,
  name: string,
  instant_invite: string,
  members?: MemberProps[],
  presence_count?: number,
}

export function AppointmentDetails(){
  const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget)
  const route = useRoute()
  const {guildSelected} = route.params as Params
  const [loading, setLoading] = useState(true)

  async function fetchGuildWidget(){
    try {
        const  response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`)

      setWidget(response.data)


    } catch {
      Alert.alert('verifique as configurações do corneador. Será que o kitkat está pago?')
    } finally{
      setLoading(false)
    }
  }

    function handleShareInvitation(){
      const message = "bora"
      widget.instant_invite
 
      Share.share({
        message,
        url: "http://facebook.com.br"
      })
    }


    function handleOpenGuild(){
      Linking.openURL("https://facebook.com")
    }

    useEffect(()=>{
      fetchGuildWidget()
    },[])
  return (
    <Background>
      <Header 
        title="Detalhes"
        action={
          
          <BorderlessButton onPress={handleShareInvitation} >
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
           {guildSelected.guild.name}
          </Text>

          <Text style={styles.subtitle}>
           {guildSelected.description}
          </Text>
        </View>
      </ImageBackground>
      {
       loading ? <Load /> :
      <><ListHeader 
        title="Jogadores"
        subtitle={`Total ${widget.members?.length}`}
      />

      <FlatList 
        data={widget.members}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Member data={item} />
        )}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        style={styles.members}
      /></>
      }

      <View style={styles.footer}>
        <ButtonIcon onPress={handleOpenGuild} title="Entrar na partida" />
      </View>
      
    </Background>
  );
}
