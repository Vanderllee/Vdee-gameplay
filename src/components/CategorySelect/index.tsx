import React from 'react';

import { ScrollView } from 'react-native';

import { categories } from '../../utils/categories';
import { Category } from '../Category';

import { styles } from './styles';

type Props = {
    categorySelected: string;
    setCategoryId: (categoryId: string) => void;
    hasCheckBox?: boolean;
  
}

export function CategorySelect ({categorySelected, setCategoryId, hasCheckBox=false}: Props) {

    return (
        <ScrollView
            horizontal
            style={styles.container}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ padding: 30 }}
        >
            { 
                categories.map(category => (
                    <Category
                        key={category.id} 
                        title={category.title}
                        icon={category.icon}
                        checked={category.id === categorySelected}
                        onPress={() => setCategoryId(category.id)}
                        hasCheckBox={hasCheckBox}
                    />
                ))
            }
        </ScrollView>
            
       
    )
}

