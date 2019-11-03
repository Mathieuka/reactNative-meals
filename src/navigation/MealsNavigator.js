import {createStackNavigator} from 'react-navigation-stack';
//import createNativeStackNavigator from 'react-native-screens/createNativeStackNavigator';

import {createAppContainer} from 'react-navigation';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

import {Platform} from 'react-native';
import THEME from '../Style/styles';

const AppNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen,
  },
  {
    initialRouteName: 'Categories',
    defaultNavigationOptions: {
      mode: 'modal', // Handle the screen transition
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? THEME.COLOR.primary : '',
      },
      headerTintColor: THEME.COLOR.accentColor,
    },
  },
);

export default createAppContainer(AppNavigator);
