import React, {useCallback} from 'react';
import { Platform, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

// Screens
import { CategoriesScreen } from '../screens/CategoriesScreen';
import { CategoryMealsScreen } from '../screens/CategoryMealsScreen';
import { MealDetailsScreen } from '../screens/MealDetailsScreen';

// Constants
import Colors from '../constants/colors';

// components
import { CustomHeaderButton } from '../components/HeaderButton';


// dummy-data
import { CATEGORIES } from '../data/dummy-data';

const MealsStack = createStackNavigator();


const MealsNavigator = ({ navigation }) => {
 
  
  return (
    <MealsStack.Navigator
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
      <MealsStack.Screen
        name='Categories'
        component={CategoriesScreen}
        options={{
          title: 'Meal Categories',
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
      <MealsStack.Screen
        name='CategoryMeals'
        component={CategoryMealsScreen}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
      <MealsStack.Screen
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
                  
                  route.params.toggleFav(route.params.mealId)
                }}
              />
            </HeaderButtons>
          ),
        })}
      />
    </MealsStack.Navigator>
  );
};

export default MealsNavigator;
