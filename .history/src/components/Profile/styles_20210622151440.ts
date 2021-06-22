import {StyleSheet} from 'react-native'
import { theme } from '../../@types/styles/theme'

export const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        alignItems: "center",
    },

    corno:{
        fontFamily: theme.fonts.title500,
        fontSize: 24,
        color: theme.colors.heading,
        marginRight: 5,
        
    },

    username:{
        fontFamily: theme.fonts.title700,
        fontSize: 24,
        color: theme.colors.heading
    },
    message:{
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight,
    },
    user:{
        flexDirection: "row",
    }
})