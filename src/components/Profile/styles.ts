import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10
     
       
    },

    user: {
        flexDirection: 'row',
    },

    greeting: {
        fontFamily: theme.fonts.title500,
        fontSize: 12,
        color: theme.colors.heading,
        marginRight: 2,
    
        
    },

    username: {
        fontFamily: theme.fonts.title700,
        fontSize: 12,
        color: theme.colors.heading
    },
    
    message: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight,
        fontSize: 10
    }

})