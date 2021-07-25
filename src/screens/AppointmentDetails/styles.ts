import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    banner: {
        width: '100%',
        height: 224,
        marginBottom: 30
        
    },

    contentBanner: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 24,
        marginBottom: 0.5
    },

    title: {
        fontSize: 28,
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
    },

    subtitle: {
        fontSize: 13,
        fontFamily: theme.fonts.text400,
        color: theme.colors.heading
    },

    members: {
        marginLeft: 24,
        marginTop: 27
    },

    footer: {
        paddingHorizontal: 24,
        paddingVertical: 20,
        marginBottom: getBottomSpace()
    }

})