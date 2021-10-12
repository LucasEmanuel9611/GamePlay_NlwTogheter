import  React from 'react';
import { ScrollView, Text } from "react-native";
import { styles } from "./styles";
import {categories} from '../../utils/categories'
import {Category} from'../Category'

type Props = {
  CategorySelected: String
  setCategory: (categoryId: string) => void 
}

export function CategorySelect({CategorySelected, setCategory}: Props) {
  return (
    <ScrollView style={styles.container}
    horizontal showsHorizontalScrollIndicator
    contentContainerStyle={{paddingRight: 40}}> 
    {
        categories.map(category => {
            <Category 
            key={category.id}
            title={category.title}
            icon={category.icon}
            checked={category.id === CategorySelected}
            onPress={() => setCategory(category.id)}
            />
        })
    }

        
    </ScrollView>
  );
}