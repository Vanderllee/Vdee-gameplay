/** Definição as regras visuais da interface */

import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.background,
    },
    image: {
        width: '100%',
        height: 300
    },

    content: {
        marginTop: -40,
        paddingHorizontal: 50
    },

    title: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 26,
        marginBottom: 15

    },
    
    subtitle: {
        color: theme.colors.heading,
        fontSize: 10,
        textAlign: 'center',
        marginBottom: 25
    }

    


})