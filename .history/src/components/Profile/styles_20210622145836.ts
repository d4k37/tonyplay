import {StyleSheet} from 'react-native'
import { theme } from '../../@types/styles/theme'

export const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
    },

    corno:{
        fontFamily: theme.fonts.title500,
        fontSize: 24,
        color: theme.colors.heading,
        marginRight: 5,
        
    },

    username:{

    },
    message:{

    },
    user:{
        flexDirection: "row",
    }
})