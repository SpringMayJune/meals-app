import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { View, StyleSheet, FlatList, ListRenderItemInfo } from 'react-native';
import { Category } from '../models/Category';
import { RootStackParamList } from '../App';
import { mockMeals } from '../data/dummy-data';
import MealItem from '../components/MealItem';
import { StackNavigationProp } from '@react-navigation/stack';
import { Meal } from '../models/Meal';
import { useEffect } from 'react';
import MealList from '../components/MealList';

type MealsScreenRouteProp = RouteProp<RootStackParamList, 'MealsScreen'>;
type NavigationProp = StackNavigationProp<RootStackParamList, 'MealDetailScreen'>;
const MealsScreen = () => {
  const route = useRoute<MealsScreenRouteProp>();
  const navigation = useNavigation<NavigationProp>();
  const { category } = route.params;
  const mealsInSelectedCategory = mockMeals.filter((meal) =>
    meal.categoryIds.includes(category.id),
  );

  useEffect(() => {
    navigation.setOptions({ title: category.title });
  }, [category, navigation]);

  const onPressHandler = (item: Meal) => {
    navigation.navigate('MealDetailScreen', {
      meal: item,
    });
  };

  return (
    <MealList
      onPressHandler={(item: Meal) => onPressHandler(item)}
      meals={mealsInSelectedCategory}
    />
  );
};

export default MealsScreen;
