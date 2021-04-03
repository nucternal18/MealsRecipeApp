import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {  useSelector } from 'react-redux';

// Constants
import Colors from '../constants/colors';

// components
import MealList from '../components/MealList';

export const CategoryMealsScreen = ({ navigation, route }) => {
  const catId = route.params.categoryId;
  const availableMeals = useSelector((state) => state.meals.filteredMeals)
  const selectedMeal = availableMeals.filter(({ categoryIds }) =>
    categoryIds.includes(catId)
  );

  if (selectedMeal.length === 0 || !selectedMeal) {
    return (
      <View style={styles.categoryScreen}>
        <Text style={styles.categoryText}>
          No meals found
        </Text>
      </View>
    );
  }

  return <MealList listData={selectedMeal} navigation={navigation} />;
};

const styles = StyleSheet.create({
  categoryScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryText: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary,
  },
});
