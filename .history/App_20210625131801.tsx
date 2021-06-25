import React from 'react'
import {useFonts} from 'expo-font'
import {Inter_400Regular, Inter_500Medium} from '@expo-google-fonts/inter'
import {Rajdhani_500Medium, Rajdhani_700Bold} from '@expo-google-fonts/rajdhani'
import {Routes} from './src/routes'
import AppLoading from 'expo-app-loading'
import { StatusBar, LogBox } from 'react-native'
import {AuthProvider, useAuth} from './src/hooks/auth'
import{Background} from './src/components/Background'

LogBox.ignoreLogs(['Cannot connect to the Metro server.'])

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
      <AuthProvider>
      <Routes/>
      </AuthProvider>
      
      </Background>

  );
};