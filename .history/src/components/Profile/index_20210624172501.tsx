import React from 'react'
import { Text, View } from 'react-native'
import { useAuth } from '../../hooks/auth'
import { Avatar } from '../Avatar'
import { styles } from './styles'

export function Profile(){

    const {user} = useAuth()

    return(
        <View style={styles.container}>

                <Avatar urlImage={user.avatar}/>
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