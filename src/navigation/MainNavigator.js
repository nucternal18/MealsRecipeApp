import React from 'react';
import { Platform, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MealsNavigator from './MealsNavigator';
import FavoriteNavigator from './FavoritesNavigator';
import MealsFavTabsNavigator from './MealsFavTabsNavigator';
import FilterScreenNavigator from './FilterScreenNavigator';

// Constants
import Colors from '../constants/colors';

const MainNav = createDrawerNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <MainNav.Navigator
        drawerStyle={{
          backgroundColor: Colors.primary,
          width: 240,
        }}
        drawerContentOptions={{
          activeTintColor: Colors.accent,
          itemStyle: { marginVertical: 5 },
          labelStyle: { fontFamily: 'open-sans-bold' },
        }}>
        <MainNav.Screen
          name='MealsFav'
          component={MealsFavTabsNavigator}
          options={{ drawerLabel: 'Meals' }}
        />
        <MainNav.Screen name='Filters' component={FilterScreenNavigator} />
      </MainNav.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
