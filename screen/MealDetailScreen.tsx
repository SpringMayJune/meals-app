import { Text, View, Image, StyleSheet, ScrollView, Button } from 'react-native';
import { Meal } from '../models/Meal';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../App';
import { StackNavigationProp } from '@react-navigation/stack';
import { useContext, useEffect, useState } from 'react';
import Label from '../components/ui/Label';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/ui/Subtitle';
import IconButton from '../components/IconButton';
import { FavoriteMealsContext } from '../contexts/FavoriteMealsContext';

type MealDetailScreenRouteProp = RouteProp<RootStackParamList, 'MealDetailScreen'>;
type NavigationProp = StackNavigationProp<RootStackParamList, 'MealDetailScreen'>;
const MealDetailScreen = () => {
  const route = useRoute<MealDetailScreenRouteProp>();
  const navigation = useNavigation<NavigationProp>();
  const { meal } = route.params;
  const { favoriteMeals, addFavorites, removeFavorites } = useContext(FavoriteMealsContext);
  const headerButtonPressHandler = (meal: Meal) => {
    if (favoriteMeals.includes(meal)) {
      removeFavorites(meal);
    } else {
      addFavorites(meal);
    }
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon="star"
            color={favoriteMeals.includes(meal) ? 'yellow' : 'white'}
            item={meal}
            handleOnPress={(meal: Meal) => headerButtonPressHandler(meal)}
          />
        );
      },
    });
  }, [headerButtonPressHandler, navigation]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <Text style={styles.titleText}> {meal.title} </Text>
      <MealDetails meal={meal} style={styles.detailText} />
      <View style={styles.outerContainer}>
        <View style={styles.labelContainer}>
          <Subtitle subtitle="INGREDIENTS" />
          {meal.ingredients.length === 0 ? (
            <Text> There are no ingredients </Text>
          ) : (
            <Label labelList={meal.ingredients} />
          )}
          <Subtitle subtitle="STEPS" />
          {meal.steps.length === 0 ? (
            <Text> There are no steps </Text>
          ) : (
            <Label labelList={meal.steps} />
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  titleText: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 8,
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  labelContainer: {
    width: '80%',
  },
  outerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
