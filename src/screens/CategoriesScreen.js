import React from 'react';
import { FlatList } from 'react-native';

// dummy-data
import { CATEGORIES } from '../data/dummy-data';

// components
import { CategoryGridTile } from '../components/categoryGridTile';

export const CategoriesScreen = ({ navigation }) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        itemData={itemData}
        onSelect={() => {
          navigation.navigate('CategoryMeals', {
            categoryId: itemData.item.id,
            name: itemData.item.title,
          });
        }}
      />
    );
  };
  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};
