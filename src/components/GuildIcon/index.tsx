import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';



export function GuildIcon() {

    const uri = 'https://static.wikia.nocookie.net/realmsofjova/images/0/06/Discordapp.jpg/revision/latest?cb=20180204215459'

    return (
        <Image 
            source={{ uri }}
            style={styles.image}
            resizeMode='cover'
        />
            
     

    )
}