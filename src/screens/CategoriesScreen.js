import React from 'react';
import {StyleSheet, FlatList} from 'react-native';

import {CATEGORIES} from '../data/dummy-data';

import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = props => {
  function renderGridItem(itemData) {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        id={itemData.item.id}
        onSelect={() => {
          props.navigation.navigate('CategoryMeals', {
            categoryId: itemData.item.id,
          });
        }}
      />
    );
  }
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories',
};

const styles = StyleSheet.create({});

export default CategoriesScreen;
