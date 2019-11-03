import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealItem from '../components/MealItem';

// Utils
import {getNavigationParams} from '../Utils/utils';

const selectCategoryId = (categories, categoryId) => {
  return categories.find(cat => cat.id === categoryId);
};

const CategoryMealsScreen = props => {
  const renderMealItem = itemData => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        backgroundImage={itemData.item.imageUrl}
        onSelectMeal={() =>
          props.navigation.navigate('MealDetail', {
            mealId: {
              idSelected: itemData.item.id,
            },
          })
        }
      />
    );
  };

  // get params navigation from CategoriesScreen
  const categoryId = getNavigationParams(props, 'categoryId');
  const displayMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0,
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={styles.flatList}
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
  flatList: {
    width: '100%',
  },
});

export default CategoryMealsScreen;
