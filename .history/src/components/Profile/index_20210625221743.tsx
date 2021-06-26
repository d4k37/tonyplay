import React from 'react'
import { Text, View, Alert } from 'react-native'
import { useAuth } from '../../hooks/auth'
import { Avatar } from '../Avatar'
import { styles } from './styles'
import {RectButton, RectButtonProps} from 'react-native-gesture-handler'

export function Profile(){

    const {user} = useAuth()


    function handleSignout(){
                Alert.alert("Logout", "Deseja deslogar?", 
                [{
                    text: 'não',
                    style: 'cancel'
                },
                {
                    text: 'sim',
                    onPress: ()=>{}
                }
            ])
    }

    return(
        <View style={styles.container}>




                <RectButton onPress={handleSignout}>
                <Avatar urlImage={user.avatar}/>
                </RectButton>
            <View style={styles.corninho}>
            <View style={styles.user}>
                <Text style={styles.corno}>
                    Olá, 
                </Text>

                <Text style={styles.username}>
                    {user.firstName}
                </Text>
            </View>
            <Text style={styles.message}>
                Hoje é dia de ser corno
            </Text>
            </View>

        </View>
    )
}