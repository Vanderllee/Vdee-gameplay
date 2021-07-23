import React from "react";
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { View, Image, Text} from "react-native";

import DiscordImg  from '../../assets/discord.png'
import { styles } from "./styles";

type ButtonIconProps =  RectButtonProps & {
    title: string;
}

 function ButtonIcon ({title, ...rest}: ButtonIconProps) {
    return (
        <RectButton 
            style={styles.container}
            {...rest}
        >
            <View style={styles.iconwrapper}>
                <Image 
                    source={DiscordImg}
                    style={styles.icon}
                />
            </View>

            <Text style={styles.title}>
                { title }
            </Text>
        </RectButton>
    );
}

export { ButtonIcon };