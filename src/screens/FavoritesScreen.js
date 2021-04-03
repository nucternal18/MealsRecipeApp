import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import { useSelector } from 'react-redux';

// components
import MealList from '../components/MealList';

// Constants
import Colors from '../constants/colors';


export const FavoritesScreen = ({ navigation }) => {
  const favMeals = useSelector((state) => state.meals.favoriteMeals);

  if (favMeals.length === 0 || !favMeals) {
    return <View style={styles.favScreen}>
      <Text style={styles.favText}>No favorites meals found. Start adding some!</Text>
    </View>
  }
  
    return <MealList listData={favMeals} navigation={navigation}/>
}


const styles = StyleSheet.create({
  favScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  favText: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary
  }
})
