import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

// Constants
import Colors from '../constants/colors';

export const MealDetails = ({ mealDetails }) => {
  return (
    <ScrollView>
      <Image source={{ uri: mealDetails.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.mealText}>{mealDetails.duration}</Text>
        <Text style={styles.mealText}>
          {mealDetails.complexity.toUpperCase()}
        </Text>
        <Text style={styles.mealText}>
          {mealDetails.affordability.toUpperCase()}
        </Text>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {mealDetails.ingredients.map((item) => (
        <View key={item} style={styles.listItem}>
          <Text>{item}</Text>
        </View>
      ))}
      <Text style={styles.title}>Steps</Text>
      {mealDetails.steps.map((item) => (
        <View key={item} style={styles.listItem}>
          <Text>{item}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {
    width: '100%',
    height: 210,
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    color: Colors.black,
    textAlign: 'center',
  },
  mealText: {
    fontFamily: 'open-sans-bold',
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
  },
});
