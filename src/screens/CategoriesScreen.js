import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Platform,
} from 'react-native';

import {CATEGORIES} from '../data/dummy-data';
import THEME from '../Style/styles';

const CategoriesScreen = props => {
  function renderGridItem(itemData) {
    return (
      <TouchableOpacity
        style={styles.flexItem}
        onPress={() => {
          props.navigation.navigate('CategoryMeals', {
            categoryId: itemData.item.id,
          });
        }}>
        <View>
          <Text style={styles.textFlexItem}>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
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
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? THEME.COLOR.primary : '',
  },
  headerTintColor: THEME.COLOR.accentColor,
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexItem: {
    flex: 1,
    margin: 5,
    height: 150,
  },
  textFlexItem: {
    fontFamily: THEME.FONT.body,
  },
});

export default CategoriesScreen;
