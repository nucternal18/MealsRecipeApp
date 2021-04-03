import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';
import { useDispatch } from 'react-redux';

// Constants
import Colors from '../constants/colors';

// redux/actions
import { setFilters } from '../redux/actions'

export const FiltersScreen = ({ route, navigation }) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false)
  const [isLactoseFree, setIsLactoseFree] = useState(false)
  const [isVegan, setIsVegan] = useState(false)
  const [isVegetarian, setIsVegetarian] = useState(false);
  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian
    }

    dispatch(setFilters(appliedFilters));
  }, [isGlutenFree, isLactoseFree, isVegan,isVegetarian])

  useEffect(() => {
     navigation.setParams( { save: saveFilters });
  },[saveFilters])
    return (
      <View style={styles.screen}>
        <Text style={styles.title}>Available Filters / Restrictions</Text>
        <View style={styles.filterContainer}>
          <Text>Gluten-free</Text>
          <Switch trackColor={{ true: Colors.primary }} value={isGlutenFree} onValueChange={(value) => setIsGlutenFree(value)} />
        </View>
        <View style={styles.filterContainer}>
          <Text>Lactose-free</Text>
          <Switch trackColor={{ true: Colors.primary }} value={isLactoseFree} onValueChange={(value) => setIsLactoseFree(value)} />
        </View>
        <View style={styles.filterContainer}>
          <Text>Vegan</Text>
          <Switch trackColor={{ true: Colors.primary }} value={isVegan} onValueChange={(value) => setIsVegan(value)} />
        </View>
        <View style={styles.filterContainer}>
          <Text>Vegetarian</Text>
          <Switch trackColor={{ true: Colors.primary }} value={isVegetarian} onValueChange={(value) => setIsVegetarian(value)} />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 30,
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    margin: 20,
    color: Colors.black,
    textAlign: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 10
  }
});