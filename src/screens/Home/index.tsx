import React from 'react';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList } from "react-native";

import { Profile } from '../../components/Profile';
import { ButtonAdd } from '../../components/ButtonAdd';
import { ListHeader } from '../../components/ListHeader';
import { CategorySelect } from '../../components/CategorySelect';
import { Appointment } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';
import { Background } from '../../components/Background';

import { styles } from './styles';

export function Home() {

    const [category, setCategory] = useState('');

    const navigation = useNavigation()

    //Os dados do agendaemento
    const appointments = [
        {
            id: '1',
            guild: { //servidor
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem uma partida md10'
        },

        {
            id: '2',
            guild: { //servidor
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem uma partida md10'
        },

        {
            id: '3',
            guild: { //servidor
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem uma partida md10'
        },
        {
            id: '4',
            guild: { //servidor
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem uma partida md10'
        }
    ]

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    function hendleAppointmentDetails () {
        navigation.navigate('AppointmentDetails')
    }

    return (
        <Background>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd />
            </View>

    
                <CategorySelect
                    categorySelected={category}
                    setCategoryId={handleCategorySelect}
                />
           

            <View style={styles.content}>
                <ListHeader
                    title="Partidas agendadas"
                    subtitle="Total 6"
                />
            </View>

            <FlatList
                data={appointments}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Appointment 
                    data={item} 
                    onPress={hendleAppointmentDetails}
                    />
                )}
                ItemSeparatorComponent={() => <ListDivider />}
                style={styles.matches}
                showsVerticalScrollIndicator={false}
            />

        </Background>
    )
}