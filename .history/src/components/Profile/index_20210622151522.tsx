import React from 'react'
import { Text, View } from 'react-native'
import { Avatar } from '../Avatar'
import { styles } from './styles'

export function Profile(){
    return(
        <View style={styles.container}>

                <Avatar urlImage="https://scontent.fvag4-1.fna.fbcdn.net/v/t1.6435-9/182907515_2953772881569383_2707811664478623535_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=bGCdGt_wffkAX_pzm41&_nc_ht=scontent.fvag4-1.fna&oh=872af1ed7abd2dadfa925e73f82362bc&oe=60D7609C"/>

            <View style={styles.user}>
                <Text style={styles.corno}>
                    Olá
                </Text>

                <Text style={styles.username}>
                    Tony
                </Text>{`\n`}
            </View>
            <Text style={styles.message}>
                Hoje é dia de ser corno
            </Text>

        </View>
    )
}