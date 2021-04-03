import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { enableScreens } from 'react-native-screens';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// NavigationContainer
import MainNavigator from './src/navigation/MainNavigator';

// reducers
import mealsReducer from './src/redux/reducers/meals';

enableScreens();

const rootReducer = combineReducers({
  meals: mealsReducer,
});
const store = createStore(rootReducer);

export default function App() {
  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}
