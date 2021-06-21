import {StyleSheet} from 'react-native'
import { theme } from '../../@types/styles/theme';


export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: theme.colors.background,
        justifyContent: 'center',
        alignItems: 'center',
    },

    image:{
        width: '100%',
        height: 360,
    },

    content:{

    },

    title:{
        color: theme.colors.heading,
        textAlign: "center",
        fontSize: 37,
        marginBottom: 16,
    },

    subtitle:{
        color: theme.colors.heading,
        fontSize: 15,
        textAlign: "center",
        marginBottom: 64
    }
});