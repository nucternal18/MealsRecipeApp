import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { useSelector } from 'react-redux';

import { MealItem } from './mealItem';

const MealList = (props) => {
  const favoriteMeal = useSelector((state) => state.meals.favoriteMeals);
  const renderedMealItem = (itemData) => {
    const isFavorite = favoriteMeal.some(meal => meal.id === itemData.item.id)
    return (
      <MealItem
        itemData={itemData}
        onSelectMeal={() => {
          props.navigation.navigate('MealDetail', {
            mealId: itemData.item.id,
            name: itemData.item.title,
            isFav: isFavorite
          });
        }}
      />
    );
  };
  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderedMealItem}
        style={{ width: '100%' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MealList;
