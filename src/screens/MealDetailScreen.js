import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

// Utils
import {getNavigationParams} from '../Utils/utils';

const MealDetailScreen = props => {
  console.log(getNavigationParams(props, 'mealDetails'));
  const {
    title,
    ingredients,
    steps,
    isGlutenFree,
    isVegan,
    isVegetarian,
    isLactoseFree,
  } = getNavigationParams(props, 'mealDetails');

  return <View style={styles.screen} />;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//handle dynamically the header title of the view
MealDetailScreen.navigationOptions = navigationData => {
  const {title} = getNavigationParams(navigationData, 'mealDetails');
  return {
    headerTitle: title,
  };
};

export default MealDetailScreen;
