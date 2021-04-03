import React from 'react';
import { Platform, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Constants
import Colors from '../constants/colors';

import MealsNavigator from './MealsNavigator';
import FavoriteNavigator from './FavoritesNavigator';

const MealsFavTabNav = createMaterialBottomTabNavigator();

const MealsFavTabsNavigator = () => {
  return (
    <MealsFavTabNav.Navigator
      activeColor={Platform.OS === 'android' ? Colors.white : Colors.accent}
      barStyle={{
        backgroundColor:
          Platform.OS === 'android' ? Colors.primary : Colors.white,
        shifting: true,
      }}
      labelStyle={
        {fontFamily: 'open-sans'}
      }
    >
      <MealsFavTabNav.Screen
        name='Meals'
        component={MealsNavigator}
        options={{
          tabBarLabel: 'Meals',
          tabBarIcon: ({ color }) => (
            <Ionicons name='ios-restaurant' size={25} color={color} />
          ),
        }}
      />
      <MealsFavTabNav.Screen
        name='Favorites'
        component={FavoriteNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name='ios-star' size={25} color={color} />
          ),
        }}
      />
    </MealsFavTabNav.Navigator>
  );
};

export default MealsFavTabsNavigator;
