
import React from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from './styles';

import IllustrationImg from "../../assets/illustration.png";

import { ButtonIcon } from '../../components/Buttonicon';

function SignIn() {
  return (
    <View style={styles.container}>

      <Image 
        source={IllustrationImg} 
        resizeMode="stretch"
        style={styles.image}
        />

        <View style={styles.content}>

          <Text style={styles.title}>
            Conect-se {`\n`}
            e organize suas {`\n`}
            jogatinas
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {`\n`}
            favoritos com seus amigos
          </Text>

          <ButtonIcon 
            title="Entrar com Discord"
            activeOpacity={0.7}
            />
        </View>

        

    </View>
  );
}

export { SignIn };

