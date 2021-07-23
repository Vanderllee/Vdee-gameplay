import React from 'react';
import { ImageBackground, Text, View, FlatList } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler'
import { Fontisto } from '@expo/vector-icons';

import { Background } from '../../components/Background';
import { ListHeader } from '../../components/ListHeader';
import { Header } from '../../components/Header';
import { Member } from '../../components/Member';
import { ListDivider } from '../../components/ListDivider';

import { theme } from '../../global/styles/theme';

import BannerImg from '../../assets/banner.png';

import { styles } from './styles';

const AppointmentDetails: React.FC = () => {

  const members = [
    {
      id: '1',
      username: 'Vanderllee',
      avatar_url: 'https://github.com/vanderllee.png',
      status: 'online'
    },

    {
      id: '2',
      username: 'Vanderllee',
      avatar_url: 'https://github.com/vanderllee.png',
      status: 'offline'
    },
  ]

  return (
    <Background>

        <Header 
          title='Detalhes'
          action={
            <BorderlessButton>
                <Fontisto 
                  name="share"
                  size={24}
                  color={theme.colors.primary}
                />
            </BorderlessButton>
          }
        />

        <ImageBackground 
          source={BannerImg}
          style={styles.banner}
        >
            <View style={styles.contentBanner}>
    
              <Text style={styles.title}>
                Lendários
            </Text>

            <Text style={styles.subtitle}>
                É hoje que vamos chegar ao challenger sem perder uma partida da md10
            </Text>

            </View>
        </ImageBackground>

        <ListHeader 
          title="Jogadores"
          subtitle="Total 3"
        />

        <FlatList 
            data={members}
            keyExtractor={item => item.id}          
            renderItem={
              ({ item }) => (
                <Member data={ item } />
              )
            }
            ItemSeparatorComponent={() => <ListDivider />}
            style={styles.members}
        />
    </Background>


  )
}

export {AppointmentDetails};