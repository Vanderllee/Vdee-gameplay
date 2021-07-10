import React from "react";
import { TouchableOpacity, View, Image, Text, TouchableOpacityProps } from "react-native";

import DiscordImg  from '../../assets/discord.png'
import { styles } from "./styles";

type ButtonIconProps = TouchableOpacityProps & {
    title: string;
}

 function ButtonIcon ({title, ...rest}: ButtonIconProps) {
    return (
        <TouchableOpacity 
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
        </TouchableOpacity>
    );
}

export { ButtonIcon };