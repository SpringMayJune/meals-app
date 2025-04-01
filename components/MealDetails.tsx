import { View, Text, StyleSheet } from 'react-native';
import { Meal } from '../models/Meal';

type MealDetailsProps = {
  meal: Meal;
  style?: any;
};
const MealDetails: React.FC<MealDetailsProps> = (props: MealDetailsProps) => {
  const { meal, style } = props;

  return (
    <View style={[styles.detailContainer, style]}>
      <Text style={[styles.detailText, style]}> {meal.duration} m</Text>
      <Text style={[styles.detailText, style]}> {meal.complexity.toUpperCase()} </Text>
      <Text style={[styles.detailText, style]}> {meal.affordability.toUpperCase()} </Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
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
});
