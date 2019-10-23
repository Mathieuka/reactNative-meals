import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Button, Platform} from 'react-native';
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
  console.log(
    '%cLOG => ',
    'font-size:15px; color: #0015ff',
    'CategoryMealsScreen FUNCTION',
  );
  const categoryId = getNavigationParams(navigationData, 'categoryId');
  const category = selectCategoryId(CATEGORIES, categoryId);
  return {
    headerTitle: category.title,
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? THEME.COLOR.primary : '',
    },
    headerTintColor: THEME.COLOR.accentColor,
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
