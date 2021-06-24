import {StyleSheet} from 'react-native'
import { theme } from '../../@types/styles/theme'

export const styles = StyleSheet.create({
    container:{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        
    },
    title:{
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        fontSize: 18,
        
    },

})