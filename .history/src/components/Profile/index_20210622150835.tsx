import React from 'react'
import { Text, View } from 'react-native'
import { Avatar } from '../Avatar'
import { styles } from './styles'

export function Profile(){
    return(
        <View style={styles.container}>

                <Avatar/>

            <View style={styles.user}>
                <Text style={styles.corno}>
                    Olá
                </Text>

                <Text style={styles.username}>
                    Tony
                </Text>
            </View>
            <Text style={styles.message}>
                Hoje é dia de ser corno
            </Text>

        </View>
    )
}