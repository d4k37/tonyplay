import {StyleSheet} from 'react-native'
import { theme } from '../../@types/styles/theme'
import {getBottomSpace} from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
    container:{
        width: 48,
        height: 48,
        backgroundColor: theme.colors.secondary40,
        borderRadius: 8,
        color: theme.colors.heading
    }
})