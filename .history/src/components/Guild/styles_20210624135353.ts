import {StyleSheet} from 'react-native';
import { theme } from '../../@types/styles/theme';
import {getBottomSpace} from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        paddingHorizontal: 24,
    },
    content:{
        flex:1,
        justifyContent: "center",
        marginLeft: 20,

    },
    title:{
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        fontSize: 18,
        marginBottom: 4,

    },
    type:{
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight,
        fontSize: 13,
    }


});