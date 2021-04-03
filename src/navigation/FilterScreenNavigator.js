import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { FiltersScreen } from '../screens/FiltersScreen';

// Constants
import Colors from '../constants/colors';

// components
import { CustomHeaderButton } from '../components/HeaderButton';

const FilterStack = createStackNavigator();

const FilterScreenNavigator = () => {
  return (
    <FilterStack.Navigator
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
      <FilterStack.Screen
        name='Filter'
        component={FiltersScreen}
        options={({route, navigation}) => ({
          headerTitle: 'Filter',
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
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title='Save'
                iconName='ios-save'
                onPress={() => {
                  route.params.save()
                }}
              />
            </HeaderButtons>
          ),
        })}
      />
    </FilterStack.Navigator>
  );
};

export default FilterScreenNavigator;
