import React from 'react'
import {useFonts} from 'expo-font'
import {Inter_400Regular, Inter_500Medium} from '@expo-google-fonts/inter'
import {Rajdhani_500Medium, Rajdhani_700Bold} from '@expo-google-fonts/rajdhani'
import {Routes} from './src/routes'
import AppLoading from 'expo-app-loading'
import { StatusBar } from 'react-native'
import {AuthContext} from './src/context/auth'
import{Background} from './src/components/Background'

export default function App(){

{  const [fontsLoaded] = useFonts({
      Inter_400Regular,
      Inter_500Medium,
      Rajdhani_500Medium,
      Rajdhani_700Bold
    })
    if(!fontsLoaded){
      return<AppLoading/>
    }}

  return(
    <Background>
    <StatusBar
    barStyle="default"
    backgroundColor="orange"
    translucent
    /> 
    <AuthContext.Provider value={{
      name: 'Tony',
      email: 'luis.dhac@gmail.com',
      avatar: 'tony.png',
    }}>
      <Routes/>
      </AuthContext.Provider>
      </Background>

  );
};