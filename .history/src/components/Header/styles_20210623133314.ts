import {StyleSheet} from 'react-native'
import { theme } from '../../@types/styles/theme'
import {getStatusBarHeight} from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: 104,
        paddingTop: getStatusBarHeight()
    },
    title:{

    },


})