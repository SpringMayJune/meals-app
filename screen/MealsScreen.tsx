import { RouteProp, useRoute } from '@react-navigation/native';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Category } from '../models/Category';
import { RootStackParamList } from '../App';
import { mockMeals } from '../data/dummy-data';
import MealItem from '../components/MealItem';

type MealsScreenRouteProp = RouteProp<RootStackParamList, 'MealsScreen'>;
const MealsScreen = () => {
  const route = useRoute<MealsScreenRouteProp>();
  const { category } = route.params;
  const mealsInSelectedCategory = mockMeals.filter((meal) =>
    meal.categoryIds.includes(category.id),
  );

  return (
    <View style={styles.container}>
      {mealsInSelectedCategory.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </View>
  );
};

export default MealsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
