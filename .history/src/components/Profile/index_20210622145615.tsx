import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'

export function Profile(){
    return(
        <View style={styles.container}>
            <View style={styles.user}>
                <Text style={styles.corno}>
                    Olá
                </Text>

                <Text style={styles.username}>
                    Tony
                </Text>
            </View>

        </View>
    )
}