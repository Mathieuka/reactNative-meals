import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const AppNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
    initialRouteName: 'Categories',
  },
);

export default createAppContainer(AppNavigator);
