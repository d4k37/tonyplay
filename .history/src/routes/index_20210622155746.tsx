import React from 'react'
import {NavigationContainer } from '@react-navigation/native' 
import { AuthRoutes } from './auth.routes'


export function Routes(){
    return(
        <NavigationContainer>
              <Background>
    <StatusBar
    barStyle="default"
    backgroundColor="orange"
    translucent
    /> 
      <Routes/>
      </Background>
            <AuthRoutes/>
        </NavigationContainer>
    )
}