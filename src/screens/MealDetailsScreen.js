import React, { useEffect, useCallback } from 'react';

import { useSelector, useDispatch } from 'react-redux';


// components
import { MealDetails } from '../components/MealDetails';


// redux/actions
import { toggleFavorite } from '../redux/actions'

export const MealDetailsScreen = ({navigation, route }) => {
  const mealId = route.params.mealId;
  
   const dispatch = useDispatch();

   const toggleFavoritesHandler = useCallback((mealId) => {
     dispatch(toggleFavorite(mealId));
   },[dispatch, mealId]);
  
  useEffect(() => {
    navigation.setParams({ toggleFav: toggleFavoritesHandler })
  }, [toggleFavoritesHandler])

  const availableMeals = useSelector((state) => state.meals.meals);
  const selectedMealDetails = availableMeals.find((meal) => meal.id === mealId);
  const currentMealIsFav = useSelector((state) =>
    state.meals.favoriteMeals.some((meal) => meal.id === mealId)
  );
  useEffect(() => {
    navigation.setParams({ isFav: currentMealIsFav })
  }, [currentMealIsFav])
  
  return <MealDetails mealDetails={selectedMealDetails} />;
};
