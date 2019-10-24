import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import THEME from '../Style/styles';

const selectCategoryId = (categories, categoryId) => {
  return categories.find(cat => cat.id === categoryId);
};
const getNavigationParams = (data, paramName) => {
  return data.navigation.getParam(paramName);
};

const CategoryMealsScreen = props => {
  const categoryId = getNavigationParams(props, 'categoryId');
  const category = selectCategoryId(CATEGORIES, categoryId);
  console.log('CategoryMealsScreen rendered');
  return (
    <View style={styles.screen}>
      <Text>The CategoryMealsScreen Screen!</Text>
      <Text>{category.title}</Text>
      <Button
        title="Go to MealDetail screen"
        onPress={() => props.navigation.navigate({routeName: 'MealDetail'})}
      />
    </View>
  );
};

//handle dynamically the header title of the view
CategoryMealsScreen.navigationOptions = navigationData => {
  const categoryId = getNavigationParams(navigationData, 'categoryId');
  const category = selectCategoryId(CATEGORIES, categoryId);
  return {
    headerTitle: category.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryMealsScreen;
