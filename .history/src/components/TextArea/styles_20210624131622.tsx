import {StyleSheet} from 'react-native'
import { theme } from '../../@types/styles/theme'
import {getBottomSpace} from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: 95,
        backgroundColor: theme.colors.secondary40,
        borderRadius: 8,
        color: theme.colors.heading,
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        marginRight: 4,
        borderWidth: 1,
        borderColor: theme.colors.secondary50,
        paddingLeft: 16,
        paddingTop: 16,
    }
})