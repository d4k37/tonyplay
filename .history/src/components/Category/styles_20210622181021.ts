import {StyleSheet} from 'react-native'
import { theme } from '../../@types/styles/theme'

export const styles = StyleSheet.create({
    container:{
        width: 104,
        height: 120,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        marginRight: 8,

    },
    content:{
        width: 100,
        height: 116,
        backgroundColor: theme.colors.secondary40,
        borderRadius:8,
        justifyContent: "center",
        alignItems: "center",

    }

})