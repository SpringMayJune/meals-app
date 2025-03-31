import { Text, View, Image, StyleSheet } from 'react-native';
import { Meal } from '../models/Meal';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../App';

type MealDetailScreenRouteProp = RouteProp<RootStackParamList, 'MealDetailScreen'>;
const MealDetailScreen = () => {
  const route = useRoute<MealDetailScreenRouteProp>();
  const { meal } = route.params;
  return (
    <View style={styles.container}>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <Text style={styles.titleText}> {meal.title} </Text>
      <View style={styles.detailContainer}>
        <Text style={styles.detailText}> {meal.duration} m</Text>
        <Text style={styles.detailText}> {meal.complexity.toUpperCase()} </Text>
        <Text style={styles.detailText}> {meal.affordability.toUpperCase()} </Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text> INGREDIENTS </Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text> STEPS </Text>
      </View>
    </View>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 300,
  },
  titleText: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 8,
  },
  detailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailText: {
    marginHorizontal: 4,
    fontSize: 12,
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
