import {StyleSheet} from 'react-native'
import { theme } from '../../@types/styles/theme'
import {getBottomSpace} from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    label:{
        fontSize: 18,
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,

    },
    form:{
        paddingHorizontal: 24,
        marginTop: 32,
    },
    select:{
        width: "100%",
        flexDirection: "row",
    }
    
})