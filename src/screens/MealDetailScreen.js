import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import MealItem from '../components/MealItem';

// Utils
import {getNavigationParams} from '../Utils/utils';

const MealDetailScreen = props => {
  console.log(getNavigationParams(props, 'mealDetails'));
  const {
    title,
    backgroundImage,
    duration,
    complexity,
    affordability,
    ingredients,
    steps,
    isGlutenFree,
    isVegan,
    isVegetarian,
    isLactoseFree,
  } = getNavigationParams(props, 'mealDetails');

  return (
    <View>
      <MealItem
        backgroundImage={backgroundImage}
        title={title}
        duration={duration}
        complexity={complexity}
        affordability={affordability}
      />
    </View>
  );
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
