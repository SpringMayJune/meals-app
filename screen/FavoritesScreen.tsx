import { useContext } from 'react';
import { View, FlatList, ListRenderItemInfo, StyleSheet, Text } from 'react-native';
import { FavoriteMealsContext } from '../contexts/FavoriteMealsContext';
import MealList from '../components/MealList';
import { Meal } from '../models/Meal';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';

type NavigationProp = StackNavigationProp<RootStackParamList, 'MealDetailScreen'>;

const FavoritesScreen = () => {
  const { favoriteMeals } = useContext(FavoriteMealsContext);
  const navigation = useNavigation<NavigationProp>();

  const onPressHandler = (item: Meal) => {
    navigation.navigate('MealDetailScreen', {
      meal: item,
      fromScreen: 'FavoritesScreen',
    });
  };
  return favoriteMeals.length !== 0 ? (
    <MealList onPressHandler={(item: Meal) => onPressHandler(item)} meals={favoriteMeals} />
  ) : (
    <View style={styles.rootContainer}>
      <Text style={styles.noFavoritesText}> You have no favorites yet!</Text>
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#3f2f25',
    justifyContent: 'center',
    alignItems: 'center',
  },
  noFavoritesText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});
