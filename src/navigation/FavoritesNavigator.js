import React from 'react';
import { Platform, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { FavoritesScreen } from '../screens/FavoritesScreen';
import { MealDetailsScreen } from '../screens/MealDetailsScreen';

// Constants
import Colors from '../constants/colors';

// components
import { CustomHeaderButton } from '../components/HeaderButton';


const FavStack = createStackNavigator();

const FavoriteNavigator = ({ navigation }) => {

  return (
    <FavStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor:
            Platform.OS === 'android' ? Colors.primary : Colors.white,
        },
        headerTitleStyle: {
          fontFamily: 'open-sans-bold',
        },
        headerBackTitleStyle: {
          fontFamily: 'open-sans',
        },
        headerTintColor:
          Platform.OS === 'android' ? Colors.white : Colors.primary,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <FavStack.Screen
        name='Favorites'
        component={FavoritesScreen}
        options={{
          title: 'Your Favourites',
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title='Favorite'
                iconName='ios-menu'
                onPress={() => {
                  navigation.toggleDrawer();
                }}
              />
            </HeaderButtons>
          ),
        }}
      />
      <FavStack.Screen
        name='MealDetail'
        component={MealDetailsScreen}
        options={({ route }) => ({
          title: route.params.name,
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title='Favorite'
                iconName={route.params.isFav ? 'ios-star' : 'ios-star-outline'}
                onPress={() => {
                  route.params.toggleFav(route.params.mealId);
                }}
              />
            </HeaderButtons>
          ),
        })}
      />
    </FavStack.Navigator>
  );
};


export default FavoriteNavigator;