/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import MealItem from '../components/MealItem';

// Utils
import {getNavigationParams} from '../Utils/utils';
import THEME from '../Style/styles';

import {MEALS} from '../data/dummy-data';

const MealDetailScreen = props => {
  const {
    idSelected,
  } = getNavigationParams(props, 'mealId');

  const selectedMeal = () => MEALS.find(meal => meal.id === idSelected);

  const {
    title,
    imageUrl,
    duration,
    complexity,
    affordability,
    ingredients,
    steps,
    isGlutenFree,
    isVegan,
    isVegetarian,
    isLactoseFree,
  } = selectedMeal();

  // Ingredient component
  const ingredientComp = ((ingredient, index) => <Text key={index} style={styles.text}>{ingredient}</Text>)(ingredients);
  // Steps component
  const stepsComp = (steps => steps.map((step, index) => <Text key={index} style={styles.text}>{step}</Text>))(steps);
  // Allergenics component
  const allergenicsComp = (() => {
    return (
      <View>
        {isGlutenFree ? <Text style={{color: 'brown'}}>Is gluten free</Text> : false}
        {isVegan ? <Text style={{color: 'green'}}>Vegan</Text> : false}
        {isVegetarian ? <Text style={{color: 'green'}}>Vegetarian</Text> : false}
        {isLactoseFree ? <Text style={{color: 'blue'}}>Lactose free</Text> : false}
      </View>
    );
  })();

  return (
    <View>
      <ScrollView style={styles.scrollView}>
        <MealItem
          backgroundImage={imageUrl}
          title={title}
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
      <View style={styles.textContainer}>
          <View style={styles.ingredients}>{ingredientComp}</View>
          <View style={styles.ingredients}>{stepsComp}</View>
          <View style={styles.ingredients}>{allergenicsComp}</View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    padding: 10,
  },
  textContainer: {
    borderWidth: 1,
    margin: 5,
    backgroundColor: THEME.COLOR.recipeColor,
  },
  ingredients: {
    padding: 10,
  },
  text: {
    fontSize: 18,
  },
});

//handle dynamically the header title of the view
MealDetailScreen.navigationOptions = navigationData => {
  const {idSelected} = getNavigationParams(navigationData, 'mealId');
  const selectedMeal = (() => MEALS.find(meal => meal.id === idSelected))();
  return {
   headerTitle: selectedMeal.title,
  };
};

export default MealDetailScreen;
