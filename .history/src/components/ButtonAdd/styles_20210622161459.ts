import {StyleSheet} from 'react-native'
import { theme } from '../../@types/styles/theme'

export const styles = StyleSheet.create({
    container:{
        height: 48,
        width: 48,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        justifyContent: "flex-end",
        alignItems: "center",
       
    },

})